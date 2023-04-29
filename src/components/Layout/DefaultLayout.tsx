import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import styles from './DefaultLayout.style';

function DefaultLayout({children}: React.PropsWithChildren) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={[styles.container]}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default DefaultLayout;
