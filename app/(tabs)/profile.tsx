import { Feather } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-[#F2FDF3]">
      <View className="px-4 pt-12">
        <Text className="text-2xl font-bold mb-4">Profile</Text>
        <View className="bg-white rounded-xl p-6 mb-4">
          <View className="items-center mb-4">
            <View className="w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-2">
              <Feather name="user" size={36} color="#16a34a" />
            </View>
            <Text className="text-lg font-semibold">Guest User</Text>
          </View>
          
          <TouchableOpacity className="flex-row items-center py-4 border-t border-gray-100">
            <Feather name="settings" size={24} color="#4b5563" />
            <Text className="ml-3 text-gray-600">Settings</Text>
            <Feather name="chevron-right" size={24} color="#4b5563" className="ml-auto" />
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-row items-center py-4 border-t border-gray-100">
            <Feather name="help-circle" size={24} color="#4b5563" />
            <Text className="ml-3 text-gray-600">Help & Support</Text>
            <Feather name="chevron-right" size={24} color="#4b5563" className="ml-auto" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
} 