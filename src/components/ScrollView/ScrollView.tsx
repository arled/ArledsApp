import React, { FC, ReactElement } from 'react';
import { SafeAreaView, ScrollView as SV, StyleSheet, View } from 'react-native';

interface ScrollViewProps {
  footer?: ReactElement;
}

const ScrollView: FC<ScrollViewProps> = ({ children, footer }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SV contentInsetAdjustmentBehavior="automatic">
        <View style={styles.wrapper}>{children}</View>
      </SV>
      {footer ? <View style={styles.footer}>{footer}</View> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    margin: 20,
  },
  footer: {
    margin: 20,
  },
});

export { ScrollView };
