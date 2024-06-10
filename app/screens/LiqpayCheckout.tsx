import React from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

export const LiqpayCheckout = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        useWebKit={true}
        source={{
          uri: 'https://www.privat24.ua/rd/send_qr/liqpay_static_qr/payment_2470630620.d952cd18606d0819b03e0514742c14cf5edd247b5107e4765f15c09b8a4b7f11',
        }}
        startInLoadingState={true}
        scrollEnabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
};
