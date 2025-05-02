// Category.tsx
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import categoryData from '../data/categories.json';

// Enhanced category data with more details
const categories = [
  {
    id: 1,
    title: 'Home Cleaning',
    icon: 'home',
    bgColor: '#D1FAE5',
    services: ['Deep Cleaning', 'Regular Cleaning', 'Window Cleaning'],
    providers: 48,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600',
  },
  {
    id: 2,
    title: 'AC Repair',
    icon: 'wind',
    bgColor: '#DBEAFE',
    services: ['Installation', 'Maintenance', 'Repair'],
    providers: 35,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600',
  },
  {
    id: 3,
    title: 'Electrician',
    icon: 'zap',
    bgColor: '#FEE2E2',
    services: ['Wiring', 'Installation', 'Repair'],
    providers: 42,
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600',
  },
  {
    id: 4,
    title: 'Plumbing',
    icon: 'droplet',
    bgColor: '#E0E7FF',
    services: ['Repair', 'Installation', 'Maintenance'],
    providers: 39,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
  },
  {
    id: 5,
    title: 'Car Wash',
    icon: 'truck',
    bgColor: '#FEF3C7',
    services: ['Full Service', 'Interior', 'Exterior'],
    providers: 27,
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600',
  },
  {
    id: 6,
    title: 'Moving',
    icon: 'box',
    bgColor: '#FCE7F3',
    services: ['Local Moving', 'Packing', 'Storage'],
    providers: 31,
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600',
  },
];

// Featured categories for the top section
const featuredCategories = categories.slice(0, 3);

const Category = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const { mainCategories, filters } = categoryData;

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView className="flex-1 bg-[#F2FDF3]">
      {/* Header */}
      <View className="bg-green-600 pt-12 pb-6 px-4">
        <View className="flex-row items-center justify-between mb-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Categories</Text>
          <TouchableOpacity>
            <Feather name="sliders" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="bg-white/10 rounded-xl flex-row items-center px-4 py-2">
          <Feather name="search" size={20} color="white" />
          <TextInput
            placeholder="Search categories"
            placeholderTextColor="rgba(255,255,255,0.7)"
            className="flex-1 ml-2 text-white"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Featured Categories */}
      <View className="px-4 mt-6">
        <Text className="text-lg font-semibold mb-4">Featured Categories</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {featuredCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className="mr-4 w-72 bg-white rounded-xl overflow-hidden shadow-sm"
              onPress={() => navigation.navigate('Services')}
            >
              <Image
                source={{ uri: category.image }}
                className="w-full h-32"
                resizeMode="cover"
              />
              <View className="p-3">
                <View className="flex-row justify-between items-center mb-2">
          <View
                    style={{ backgroundColor: category.bgColor }}
                    className="px-3 py-1 rounded-full"
                  >
                    <Text className="text-gray-800 font-medium">
                      {category.providers} Providers
                    </Text>
                  </View>
                  <Feather name="arrow-right" size={20} color="#16a34a" />
                </View>
                <Text className="text-lg font-semibold mb-1">{category.title}</Text>
                <Text className="text-gray-500 text-sm">
                  {category.services.join(' • ')}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Filters */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        className="px-4 mb-6"
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setSelectedFilter(filter)}
            className={`mr-3 px-4 py-2 rounded-full ${
              selectedFilter === filter
                ? 'bg-green-600'
                : 'bg-gray-100'
            }`}
          >
            <Text
              className={`font-medium ${
                selectedFilter === filter
                  ? 'text-white'
                  : 'text-gray-600'
              }`}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* All Categories Grid */}
      <View className="px-4 mb-6">
        <Text className="text-lg font-semibold mb-4">All Categories</Text>
        <View className="flex-row flex-wrap justify-between">
          {filteredCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className="w-[48%] bg-white rounded-xl mb-4 overflow-hidden shadow-sm"
              onPress={() => navigation.navigate('Services')}
            >
              <Image
                source={{ uri: category.image }}
                className="w-full h-24"
                resizeMode="cover"
              />
              <View className="p-3">
                <View 
                  style={{ backgroundColor: category.bgColor }}
                  className="w-10 h-10 rounded-full items-center justify-center mb-2"
                >
                  <Feather name={category.icon} size={20} color="#16a34a" />
                </View>
                <Text className="font-semibold mb-1">{category.title}</Text>
                <Text className="text-gray-500 text-xs">
                  {category.providers} Service Providers
                </Text>
          </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Category;
