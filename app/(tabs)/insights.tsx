import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { HOME_SUBSCRIPTIONS } from "@/constants/data";

const SafeAreaView = styled(RNSafeAreaView);

const chartData = [
  { day: "Mon", value: 35 },
  { day: "Tue", value: 30 },
  { day: "Wed", value: 22 },
  { day: "Thu", value: 40, active: true },
  { day: "Fri", value: 34 },
  { day: "Sat", value: 20 },
  { day: "Sun", value: 23 },
];

const Insights = () => {
  const totalExpense = HOME_SUBSCRIPTIONS.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F8F2DE]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between mb-8">
          <Pressable className="w-12 h-12 rounded-full border border-gray-300 items-center justify-center">
            <Text>{"<"}</Text>
          </Pressable>

          <Text className="text-xl font-bold text-slate-900">
            Monthly Insights
          </Text>

          <Pressable className="w-12 h-12 rounded-full border border-gray-300 items-center justify-center">
            <Text>•••</Text>
          </Pressable>
        </View>

        {/* Upcoming */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-slate-900">Upcoming</Text>

          <Pressable className="px-4 py-2 border border-gray-300 rounded-full">
            <Text className="font-medium">View all</Text>
          </Pressable>
        </View>

        {/* Chart Card */}
        <View className="bg-[#F4EBCF] rounded-3xl p-5">
          <View className="h-48 flex-row items-end justify-between">
            {chartData.map((item) => (
              <View key={item.day} className="items-center flex-1">
                <View
                  style={{
                    height: item.value * 3,
                    width: 14,
                    borderRadius: 999,
                    backgroundColor: item.active ? "#F97356" : "#081224",
                  }}
                />

                {item.active && (
                  <View className="absolute -top-5 bg-white px-2 py-1 rounded-full">
                    <Text className="text-xs font-bold">${item.value}</Text>
                  </View>
                )}

                <Text className="mt-3 text-xs text-gray-500">{item.day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Expense Summary */}
        <View className="bg-white rounded-3xl p-5 mt-5 border border-gray-200">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg font-bold">Expenses</Text>

              <Text className="text-gray-500">March 2026</Text>
            </View>

            <View className="items-end">
              <Text className="text-xl font-bold">
                -${totalExpense.toFixed(2)}
              </Text>

              <Text className="text-green-600 font-medium">+12%</Text>
            </View>
          </View>
        </View>

        {/* History */}
        <View className="flex-row justify-between items-center mt-8 mb-4">
          <Text className="text-xl font-bold">History</Text>

          <Pressable className="px-4 py-2 border border-gray-300 rounded-full">
            <Text>View all</Text>
          </Pressable>
        </View>
        {HOME_SUBSCRIPTIONS.slice(0, 5).map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: item.color,
            }}
            className="rounded-3xl p-4 mb-4"
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-14 h-14 rounded-2xl bg-white items-center justify-center">
                  <Image
                    source={item.icon}
                    className="w-8 h-8"
                    resizeMode="contain"
                  />
                </View>

                <View className="ml-4">
                  <Text className="font-bold text-base">{item.name}</Text>

                  <Text className="text-gray-600">
                    {new Date(item.renewalDate).toLocaleDateString()}
                  </Text>
                </View>
              </View>

              <View className="items-end">
                <Text className="font-bold text-xl">${item.price}</Text>

                <Text className="text-gray-500">
                  per {item.billing.toLowerCase()}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Insights;
