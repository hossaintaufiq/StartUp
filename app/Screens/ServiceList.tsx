import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// Sample services data
const services = [
  {
    id: 1,
    name: "John's Plumbing",
    category: "Plumber",
    rating: "4.8",
    reviews: 120,
    price: "$25/hr",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600",
    availability: "Available Now"
  },
  {
    id: 2,
    name: "QuickFix Electric",
    category: "Electrician",
    rating: "4.9",
    reviews: 150,
    price: "$30/hr",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600",
    availability: "Available Now"
  },
  {
    id: 3,
    name: "Elite Cleaning",
    category: "Cleaning",
    rating: "4.7",
    reviews: 89,
    price: "$20/hr",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
    availability: "Available Now"
  },
  // Add more services here
];

export default function ServiceList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Available Now', 'Top Rated', 'Price Low-High'];

  return (
    <SafeAreaView className="flex-1 bg-[#F2FDF3]">
      <StatusBar barStyle="light-content" />
      
      {/* Main Content */}
      <View className="flex-1">
        {/* Header */}
        <View className="bg-green-600 pt-12 pb-4 px-4">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity 
              onPress={() => router.back()}
              className="w-10 h-10 items-center justify-center"
            >
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-lg font-semibold">All Services</Text>
            <TouchableOpacity className="w-10 h-10 items-center justify-center">
              <Feather name="sliders" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="bg-white/10 rounded-xl flex-row items-center px-4 py-2">
          <Feather name="search" size={20} color="white" />
          <TextInput
            placeholder="Search services..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            className="flex-1 ml-2 text-white"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Content */}
        <ScrollView 
          className="flex-1"
          showsVerticalScrollIndicator={false}
        >
          {/* Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4 py-4"
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

          {/* Services List */}
          <View className="px-4">
            {services.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden"
                onPress={() => router.push({
                  pathname: '/service-detail',
                  params: { serviceId: item.id }
                })}
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-48"
                  resizeMode="cover"
                />
                
                {/* Availability Badge */}
                <View className="absolute top-2 right-2 bg-green-500 px-2 py-1 rounded-full">
                  <Text className="text-white text-xs font-medium">
                    {item.availability}
                  </Text>
                </View>

                <View className="p-4">
                  <Text className="text-lg font-semibold mb-1">{item.name}</Text>
                  <Text className="text-gray-500 mb-2">{item.category}</Text>
                  
                  <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                      <Feather name="star" size={16} color="#16a34a" />
                      <Text className="ml-1 font-medium">{item.rating}</Text>
                      <Text className="ml-1 text-gray-500">
                        ({item.reviews} reviews)
                      </Text>
                    </View>
                    <Text className="text-green-600 font-semibold">{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
