import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
    ViewToken,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const onboardingData = [
  {
    id: '1',
    title: 'Find Trusted Professionals',
    description: 'Connect with verified service providers for all your home needs.',
    image: 'https://img.freepik.com/free-vector/house-repair-renovation-works-tools_33099-1686.jpg',
    backgroundColor: '#E8F5E9',
    iconName: 'user-check',
  },
  {
    id: '2',
    title: 'Book Services Instantly',
    description: 'Schedule services at your convenience with our easy-to-use booking system.',
    image: 'https://img.freepik.com/free-vector/online-calendar-appointment-booking_23-2148552968.jpg',
    backgroundColor: '#E3F2FD',
    iconName: 'calendar',
  },
  {
    id: '3',
    title: 'Secure & Reliable',
    description: 'Your safety is our priority. All transactions are fully secured.',
    image: 'https://img.freepik.com/free-vector/security-concept-illustration_114360-7465.jpg',
    backgroundColor: '#F3E5F5',
    iconName: 'shield',
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0]) {
      setCurrentIndex(Number(viewableItems[0].index));
    }
  }).current;

  const handleGetStarted = () => {
    router.replace('/(tabs)');
  };

  const renderItem = ({ item }: { item: typeof onboardingData[0] }) => (
    <View 
      style={{ width, height }}
      className="flex-1 justify-center items-center px-8"
    >
      <View className="w-64 h-64 mb-8">
        <Image
          source={{ uri: item.image }}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      <View className="bg-white/90 rounded-3xl p-6 w-full">
        <View className="w-16 h-16 bg-green-600 rounded-2xl items-center justify-center mb-4">
          <Feather name={item.iconName as any} size={32} color="white" />
        </View>
        
        <Text className="text-2xl font-bold text-gray-800 mb-3">
          {item.title}
        </Text>
        
        <Text className="text-gray-600 text-base leading-6">
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1" style={{ backgroundColor: onboardingData[currentIndex].backgroundColor }}>
      <TouchableOpacity
        onPress={handleGetStarted}
        className="absolute top-12 right-4 z-10 bg-white/90 px-6 py-2 rounded-full"
      >
        <Text className="text-green-600 font-medium">Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />

      <View className="absolute bottom-12 left-0 right-0 px-8">
        <View className="flex-row justify-center mb-8">
          {onboardingData.map((_, index) => (
            <View
              key={index}
              className={`h-2 rounded-full mx-1 ${
                currentIndex === index
                  ? 'w-8 bg-green-600'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={handleGetStarted}
          className="bg-green-600 py-4 rounded-2xl flex-row items-center justify-center"
        >
          <Text className="text-white font-bold text-lg mr-2">
            Get Started
          </Text>
          <Feather name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
} 