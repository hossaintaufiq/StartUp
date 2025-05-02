import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import bookingData from '../data/booking.json';
import type { ServicePackage } from '../types/booking';

export default function BookService() {
  const params = useLocalSearchParams();
  const service = params; // Service details from previous screen

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage>(bookingData.servicePackages[0]);
  const [address, setAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleConfirmBooking = () => {
    if (!selectedTimeSlot || !address) {
      Alert.alert('Missing Information', 'Please fill in all required fields');
      return;
    }

    // Create booking object
    const bookingDetails = {
      bookingId: Math.random().toString(36).substr(2, 9),
      serviceId: service.id,
      serviceName: service.name,
      serviceImage: service.image,
      date: selectedDate.toISOString(),
      time: selectedTimeSlot,
      package: selectedPackage,
      address: address,
      specialInstructions: specialInstructions,
      status: 'Confirmed',
      totalAmount: selectedPackage.price,
    };

    // Navigate to booking details
    router.push({
      pathname: '/booking-details',
      params: bookingDetails
    });
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
          <Text className="text-white text-lg font-semibold">Book Service</Text>
          <View style={{ width: 40 }} />
        </View>
      </View>

      <ScrollView className="flex-1 p-4">
        {/* Service Summary */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold mb-2">{service.name}</Text>
          <Text className="text-green-600 font-medium">{service.price}</Text>
        </View>

        {/* Date Selection */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold mb-4">Select Date</Text>
          <TouchableOpacity className="bg-gray-50 p-4 rounded-xl">
            <Text>{selectedDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
        </View>

        {/* Time Slots */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold mb-4">Select Time</Text>
          <View className="flex-row flex-wrap justify-between">
            {bookingData.timeSlots.map((slot) => (
              <TouchableOpacity
                key={slot.id}
                onPress={() => slot.available && setSelectedTimeSlot(slot.time)}
                className={`w-[48%] mb-3 p-3 rounded-xl border ${
                  !slot.available
                    ? 'bg-gray-50 border-gray-200'
                    : selectedTimeSlot === slot.time
                    ? 'bg-green-50 border-green-600'
                    : 'bg-white border-gray-200'
                }`}
                disabled={!slot.available}
              >
                <Text
                  className={`text-center ${
                    !slot.available
                      ? 'text-gray-400'
                      : selectedTimeSlot === slot.time
                      ? 'text-green-600 font-medium'
                      : 'text-gray-600'
                  }`}
                >
                  {slot.time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Address Input */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold mb-4">Service Address</Text>
          <TextInput
            className="bg-gray-50 p-4 rounded-xl text-gray-800"
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
            multiline
          />
        </View>

        {/* Special Instructions */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold mb-4">Special Instructions</Text>
          <TextInput
            className="bg-gray-50 p-4 rounded-xl text-gray-800 h-24"
            placeholder="Any special instructions?"
            value={specialInstructions}
            onChangeText={setSpecialInstructions}
            multiline
          />
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="bg-white p-4 border-t border-gray-200">
        <TouchableOpacity
          onPress={handleConfirmBooking}
          className="bg-green-600 py-4 rounded-xl flex-row items-center justify-center"
        >
          <Text className="text-white font-semibold text-lg mr-2">
            Confirm Booking
          </Text>
          <Feather name="check-circle" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

