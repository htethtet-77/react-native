import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

type RouteParams = {
  id: string;
};

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Details :{id}</Text>
      <Link href="/">Go back</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});
export default SubscriptionDetails;
