import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

function DefaultLayout({children}: React.PropsWithChildren) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>{children}</SafeAreaView>
    </>
  );
}

export default DefaultLayout;
