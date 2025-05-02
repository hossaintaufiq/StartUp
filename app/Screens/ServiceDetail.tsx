import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

const ServiceDetail = () => {
  const params = useLocalSearchParams();
  const service = params; // Contains the service details passed from the previous screen
  const scrollY = new Animated.Value(0);
  const [selectedTab, setSelectedTab] = useState('Overview');

  // Enhanced service details
  const serviceDetails = {
    ...service,
    description: "Professional and reliable service provider with years of experience in the industry. We pride ourselves on quality work and customer satisfaction.",
    highlights: [
      "Experienced professionals",
      "Quality guaranteed",
      "24/7 customer support",
      "Competitive pricing",
      "Insured service"
    ],
    pricing: [
      { name: "Basic", price: service.price, duration: "1 hour" },
      { name: "Standard", price: service.price * 1.5, duration: "2 hours" },
      { name: "Premium", price: service.price * 2, duration: "3 hours" }
    ],
    reviews: [
      {
        id: 1,
        user: "John D.",
        rating: 5,
        date: "2 days ago",
        comment: "Excellent service! Very professional and timely."
      },
      {
        id: 2,
        user: "Sarah M.",
        rating: 4,
        date: "1 week ago",
        comment: "Great work, would recommend!"
      }
    ],
    availability: {
      nextAvailable: "Today, 2:00 PM",
      workingHours: "8:00 AM - 6:00 PM",
      daysAvailable: "Mon - Sat"
    }
  };

  const tabs = ['Overview', 'Pricing', 'Reviews', 'Booking'];

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out ${service.name} on our app!`,
        title: service.name,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookNow = () => {
    router.push({
      pathname: '/book-service',
      params: service // Pass all service details to booking screen
    });
  };

  const renderHeader = () => {
    const headerOpacity = scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View className="bg-green-600 pt-12 pb-4 px-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center"
          >
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold">Service Details</Text>
          <TouchableOpacity className="w-10 h-10 items-center justify-center">
            <Feather name="heart" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTabs = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      className="px-4 border-b border-gray-200"
    >
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setSelectedTab(tab)}
          className={`py-4 px-6 border-b-2 ${
            selectedTab === tab ? 'border-green-600' : 'border-transparent'
          }`}
        >
          <Text
            className={`font-medium ${
              selectedTab === tab ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderContent = () => {
    switch (selectedTab) {
      case 'Overview':
        return (
          <View className="p-4">
            <Text className="text-gray-600 leading-6 mb-6">
              {serviceDetails.description}
            </Text>

            {/* Highlights */}
            <Text className="text-lg font-semibold mb-4">Service Highlights</Text>
            {serviceDetails.highlights.map((highlight, index) => (
              <View key={index} className="flex-row items-center mb-3">
                <View className="w-2 h-2 rounded-full bg-green-600 mr-3" />
                <Text className="text-gray-600">{highlight}</Text>
              </View>
            ))}

            {/* Availability */}
            <View className="mt-6 bg-green-50 rounded-xl p-4">
              <Text className="text-lg font-semibold mb-3">Availability</Text>
              <View className="space-y-2">
                <View className="flex-row justify-between">
                  <Text className="text-gray-600">Next Available</Text>
                  <Text className="text-green-600 font-medium">
                    {serviceDetails.availability.nextAvailable}
                  </Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-600">Working Hours</Text>
                  <Text className="text-gray-800">
                    {serviceDetails.availability.workingHours}
                  </Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-600">Days Available</Text>
                  <Text className="text-gray-800">
                    {serviceDetails.availability.daysAvailable}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );

      case 'Pricing':
        return (
          <View className="p-4">
            {serviceDetails.pricing.map((plan, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100"
              >
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-lg font-semibold">{plan.name}</Text>
                  <Text className="text-green-600 font-bold text-xl">
                    ${plan.price}
                  </Text>
                </View>
                <Text className="text-gray-500">Duration: {plan.duration}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 'Reviews':
        return (
          <View className="p-4">
            {/* Rating Summary */}
            <View className="bg-green-50 rounded-xl p-4 mb-4">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-3xl font-bold text-green-600">
                    {service.rating}
                  </Text>
                  <Text className="text-gray-600">
                    {service.reviews} reviews
                  </Text>
                </View>
                <View className="flex-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Feather
                      key={star}
                      name="star"
                      size={20}
                      color={star <= Math.floor(service.rating) ? '#16a34a' : '#e5e7eb'}
                    />
                  ))}
                </View>
              </View>
            </View>

            {/* Review List */}
            {serviceDetails.reviews.map((review) => (
              <View
                key={review.id}
                className="bg-white rounded-xl p-4 mb-4 shadow-sm"
              >
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="font-semibold">{review.user}</Text>
                  <Text className="text-gray-500 text-sm">{review.date}</Text>
                </View>
                <View className="flex-row mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Feather
                      key={star}
                      name="star"
                      size={16}
                      color={star <= review.rating ? '#16a34a' : '#e5e7eb'}
                    />
                  ))}
                </View>
                <Text className="text-gray-600">{review.comment}</Text>
              </View>
            ))}
          </View>
        );

      case 'Booking':
        return (
          <View className="p-4">
            <View className="bg-white rounded-xl p-4 shadow-sm">
              <Text className="text-lg font-semibold mb-4">Select Date & Time</Text>
              {/* Add your booking component here */}
              <Text className="text-gray-600 mb-4">
                Choose your preferred date and time for the service.
              </Text>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-white">
      {renderHeader()}
      
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* Hero Image */}
        <Image
          source={{ uri: service.image }}
          className="w-full h-72"
          resizeMode="cover"
        />

        {/* Service Info Card */}
        <View className="bg-white -mt-6 rounded-t-3xl">
          <View className="p-4">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-2xl font-bold text-gray-800 mb-1">
                  {service.name}
                </Text>
                <Text className="text-gray-500 mb-2">{service.category}</Text>
              </View>
              <View className="bg-green-50 px-3 py-1 rounded-full">
                <Text className="text-green-600 font-medium">
                  ${service.price}/hr
                </Text>
              </View>
            </View>

            <View className="flex-row items-center mt-2">
              <Feather name="star" size={16} color="#16a34a" />
              <Text className="ml-1 font-medium">{service.rating}</Text>
              <Text className="ml-1 text-gray-500">
                ({service.reviews} reviews)
        </Text>
              <View className="h-2 w-2 bg-gray-300 rounded-full mx-2" />
              <Text className="text-gray-500">{service.availability}</Text>
            </View>
          </View>

          {renderTabs()}
          {renderContent()}
        </View>
      </Animated.ScrollView>

      {/* Bottom Action Bar */}
      <View className="bg-white p-4 border-t border-gray-200">
        <TouchableOpacity
          onPress={handleBookNow}
          className="bg-green-600 py-4 rounded-xl flex-row items-center justify-center"
        >
          <Text className="text-white font-semibold text-lg mr-2">
            Book Now
          </Text>
          <Feather name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceDetail;
