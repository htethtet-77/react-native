import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Insights = () => {
  return (
    <View style={styles.container}>
      <Text>Insights</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default Insights;
