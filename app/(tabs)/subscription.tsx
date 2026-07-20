import React from 'react';
import {Text, StyleSheet } from 'react-native';

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);


const Subscription = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Subscription</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  }
});

export default Subscription;
