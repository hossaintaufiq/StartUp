import { Feather } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function BookingsScreen() {
  return (
    <ScrollView className="flex-1 bg-[#F2FDF3]">
      <View className="px-4 pt-12">
        <Text className="text-2xl font-bold mb-4">My Bookings</Text>
        <View className="bg-white p-6 rounded-xl items-center">
          <Feather name="calendar" size={48} color="#16a34a" />
          <Text className="text-gray-600 mt-4 text-center">
            No bookings yet. Start by booking a service!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
} 