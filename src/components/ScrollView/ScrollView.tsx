import React, { FC, ReactElement } from 'react';
import { SafeAreaView, ScrollView as SV, StyleSheet, View } from 'react-native';

interface props {
  footer?: ReactElement;
}

const ScrollView: FC<props> = ({ children, footer }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SV style={styles.ScrollView} contentInsetAdjustmentBehavior="automatic">
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
  ScrollView: {
    // flex: 1,
  },
  wrapper: {
    // flex: 1,
    margin: 20,
  },
  footer: {
    margin: 20,
  },
});

export { ScrollView };
