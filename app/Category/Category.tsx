// Category.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { categoryData } from './CatagoryData'; // Adjust path if needed

const Category = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
      {categoryData.map((cat, idx) => (
        <View key={idx} className="items-center mr-4">
          <View
            className="w-16 h-16 rounded-xl items-center justify-center shadow-sm mb-1"
            style={{ backgroundColor: cat.bgColor }}
          >
            <Ionicons name={cat.icon} size={24} color="#065F46" />
          </View>
          <Text className="text-xs text-center">{cat.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Category;

