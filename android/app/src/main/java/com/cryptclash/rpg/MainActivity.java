package com.cryptclash.rpg;

import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import androidx.annotation.NonNull;
import com.android.billingclient.api.AcknowledgePurchaseParams;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingClientStateListener;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.ConsumeParams;
import com.android.billingclient.api.ProductDetails;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchasesUpdatedListener;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.getcapacitor.BridgeActivity;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MainActivity extends BridgeActivity implements PurchasesUpdatedListener {
    private BillingClient billingClient;
    private String pendingProductId = null;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        initBillingClient();

        if (getBridge() != null && getBridge().getWebView() != null) {
            WebView webView = getBridge().getWebView();
            webView.getSettings().setJavaScriptEnabled(true);
            webView.addJavascriptInterface(new BillingJsBridge(), "AndroidBilling");
        }
    }

    private void initBillingClient() {
        billingClient = BillingClient.newBuilder(this)
            .setListener(this)
            .enablePendingPurchases()
            .build();

        billingClient.startConnection(new BillingClientStateListener() {
            @Override
            public void onBillingSetupFinished(@NonNull BillingResult billingResult) {
                if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK && pendingProductId != null) {
                    String pid = pendingProductId;
                    pendingProductId = null;
                    launchPurchaseFlow(pid);
                }
            }

            @Override
            public void onBillingServiceDisconnected() {
                // Reconnect on next purchase request
            }
        });
    }

    private void launchPurchaseFlow(final String productId) {
        if (billingClient == null || !billingClient.isReady()) {
            pendingProductId = productId;
            initBillingClient();
            return;
        }

        List<QueryProductDetailsParams.Product> productList = Collections.singletonList(
            QueryProductDetailsParams.Product.newBuilder()
                .setProductId(productId)
                .setProductType(BillingClient.ProductType.INAPP)
                .build()
        );

        QueryProductDetailsParams params = QueryProductDetailsParams.newBuilder()
            .setProductList(productList)
            .build();

        billingClient.queryProductDetailsAsync(params, (billingResult, productDetailsList) -> {
            if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK
                    && productDetailsList != null
                    && !productDetailsList.isEmpty()) {
                ProductDetails productDetails = productDetailsList.get(0);
                List<BillingFlowParams.ProductDetailsParams> detailParamsList = new ArrayList<>();
                detailParamsList.add(
                    BillingFlowParams.ProductDetailsParams.newBuilder()
                        .setProductDetails(productDetails)
                        .build()
                );

                BillingFlowParams flowParams = BillingFlowParams.newBuilder()
                    .setProductDetailsParamsList(detailParamsList)
                    .build();

                runOnUiThread(() -> billingClient.launchBillingFlow(MainActivity.this, flowParams));
            } else {
                notifyJsStatus(productId, billingResult.getResponseCode(), "SKU_NOT_ACTIVE_YET");
            }
        });
    }

    @Override
    public void onPurchasesUpdated(@NonNull BillingResult billingResult, List<Purchase> purchases) {
        if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK && purchases != null) {
            for (Purchase purchase : purchases) {
                handlePurchase(purchase);
            }
        } else if (billingResult.getResponseCode() != BillingClient.BillingResponseCode.USER_CANCELED) {
            notifyJsStatus(pendingProductId != null ? pendingProductId : "", billingResult.getResponseCode(), billingResult.getDebugMessage());
        }
    }

    private void handlePurchase(final Purchase purchase) {
        if (purchase.getPurchaseState() == Purchase.PurchaseState.PURCHASED) {
            final String productId = purchase.getProducts().isEmpty() ? "gems_80" : purchase.getProducts().get(0);
            final String token = purchase.getPurchaseToken();

            ConsumeParams consumeParams = ConsumeParams.newBuilder()
                .setPurchaseToken(token)
                .build();

            billingClient.consumeAsync(consumeParams, (billingResult, outToken) -> {
                if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK) {
                    notifyJsSuccess(productId, token);
                } else {
                    // Fallback acknowledge for non-consumables like royal_pass_s1
                    AcknowledgePurchaseParams ackParams = AcknowledgePurchaseParams.newBuilder()
                        .setPurchaseToken(token)
                        .build();
                    billingClient.acknowledgePurchase(ackParams, ackRes -> notifyJsSuccess(productId, token));
                }
            });
        }
    }

    private void notifyJsSuccess(final String productId, final String token) {
        runOnUiThread(() -> {
            if (getBridge() != null && getBridge().getWebView() != null) {
                String safePid = productId.replace("'", "");
                String safeTok = token.replace("'", "");
                getBridge().getWebView().evaluateJavascript(
                    "if(window.game && window.game.onGooglePlayPurchaseSuccess){window.game.onGooglePlayPurchaseSuccess('" + safePid + "','" + safeTok + "');}",
                    null
                );
            }
        });
    }

    private void notifyJsStatus(final String productId, final int code, final String msg) {
        runOnUiThread(() -> {
            if (getBridge() != null && getBridge().getWebView() != null) {
                String safePid = (productId != null ? productId : "").replace("'", "");
                String safeMsg = (msg != null ? msg : "").replace("'", "");
                getBridge().getWebView().evaluateJavascript(
                    "if(window.game && window.game.onGooglePlayPurchaseStatus){window.game.onGooglePlayPurchaseStatus('" + safePid + "'," + code + ",'" + safeMsg + "');}",
                    null
                );
            }
        });
    }

    public class BillingJsBridge {
        @JavascriptInterface
        public boolean isAvailable() {
            return true;
        }

        @JavascriptInterface
        public void purchase(String productId) {
            launchPurchaseFlow(productId);
        }
    }
}
