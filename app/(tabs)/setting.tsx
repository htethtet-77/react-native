import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);


const Setting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Setting</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Setting;
