import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    Share,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function BookingDetails({ route }) {
  const booking = route.params;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `My booking confirmation #${booking.bookingId}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-yellow-500';
      case 'Completed':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <View className="flex-1 bg-[#F2FDF3]">
      {/* Header */}
      <View className="bg-green-600 pt-12 pb-4 px-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center"
          >
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold">Booking Details</Text>
          <TouchableOpacity 
            onPress={handleShare}
            className="w-10 h-10 items-center justify-center"
          >
            <Feather name="share-2" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Booking Status */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold">Booking #{booking.bookingId}</Text>
            <View className={`${getStatusColor(booking.status)} px-3 py-1 rounded-full`}>
              <Text className="text-white font-medium">{booking.status}</Text>
            </View>
          </View>

          <View className="space-y-4">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Date</Text>
              <Text className="font-medium">
                {new Date(booking.date).toLocaleDateString()}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Time</Text>
              <Text className="font-medium">{booking.time}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Package</Text>
              <Text className="font-medium">{booking.package.name}</Text>
            </View>
          </View>
        </View>

        {/* Service Location */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold mb-3">Service Location</Text>
          <Text className="text-gray-600">{booking.address}</Text>
        </View>

        {/* Payment Details */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold mb-3">Payment Details</Text>
          <View className="space-y-3">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Package Price</Text>
              <Text className="font-medium">${booking.totalAmount}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Service Fee</Text>
              <Text className="font-medium">$5.00</Text>
            </View>
            <View className="pt-3 border-t border-gray-100 flex-row justify-between">
              <Text className="font-semibold">Total Amount</Text>
              <Text className="text-green-600 font-bold">
                ${Number(booking.totalAmount) + 5}
              </Text>
            </View>
          </View>
        </View>

        {/* Special Instructions */}
        {booking.specialInstructions ? (
          <View className="bg-white rounded-xl p-4 mb-4">
            <Text className="text-lg font-semibold mb-3">Special Instructions</Text>
            <Text className="text-gray-600">{booking.specialInstructions}</Text>
          </View>
        ) : null}
      </ScrollView>

      {/* Bottom Actions */}
      <View className="p-4 bg-white border-t border-gray-200">
        <View className="flex-row space-x-4">
          <TouchableOpacity 
            className="flex-1 py-4 rounded-xl border border-green-600"
            onPress={() => {/* Handle support */}}
          >
            <Text className="text-center text-green-600 font-semibold">
              Contact Support
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="flex-1 py-4 rounded-xl bg-green-600"
            onPress={() => router.push('/(tabs)')}
          >
            <Text className="text-center text-white font-semibold">
              Back to Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 