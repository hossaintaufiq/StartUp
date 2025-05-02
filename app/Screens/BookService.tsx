import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const BookService = ({ route, navigation }: any) => {
  const { service } = route.params;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [address, setAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  // Simplified time slots
  const timeSlots = [
    { id: '1', time: '09:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: false },
    { id: '4', time: '12:00 PM', available: true },
    { id: '5', time: '01:00 PM', available: true },
    { id: '6', time: '02:00 PM', available: false },
    { id: '7', time: '03:00 PM', available: true },
    { id: '8', time: '04:00 PM', available: true },
  ];

  // Simplified packages
  const packages = [
    { name: 'Basic', price: service.price || 50, duration: '1 hour' },
    { name: 'Standard', price: (service.price || 50) * 1.5, duration: '2 hours' },
    { name: 'Premium', price: (service.price || 50) * 2, duration: '3 hours' },
  ];

  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  const handleBooking = () => {
    if (!selectedTimeSlot || !address) {
      Alert.alert('Missing Information', 'Please fill in all required fields');
      return;
    }

    Alert.alert(
      'Booking Confirmed',
      'Your service has been booked successfully!',
      [
        {
          text: 'Done',
          onPress: () => navigation.navigate('Home'),
          style: 'cancel',
        },
      ]
    );
  };

  const renderDateSelection = () => (
    <View className="mb-6">
      <Text className="text-lg font-semibold mb-4">Select Date</Text>
      <TouchableOpacity className="bg-gray-50 p-4 rounded-xl">
        <Text className="text-gray-600 mb-2">Selected Date</Text>
        <View className="flex-row items-center">
          <Feather name="calendar" size={20} color="#16a34a" />
          <Text className="ml-2 text-lg">
            {selectedDate.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderTimeSlots = () => (
    <View className="mb-6">
      <Text className="text-lg font-semibold mb-4">Select Time</Text>
      <View className="flex-row flex-wrap justify-between">
        {timeSlots.map((slot) => (
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
  );

  const renderPackages = () => (
    <View className="mb-6">
      <Text className="text-lg font-semibold mb-4">Select Package</Text>
      {packages.map((pkg, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedPackage(pkg)}
          className={`mb-4 p-4 rounded-xl border ${
            selectedPackage.name === pkg.name
              ? 'bg-green-50 border-green-600'
              : 'bg-white border-gray-200'
          }`}
        >
          <View className="flex-row justify-between items-center mb-2">
            <Text className={`text-lg ${
              selectedPackage.name === pkg.name ? 'font-semibold' : 'font-medium'
            }`}>
              {pkg.name}
            </Text>
            <Text className="text-green-600 font-bold">
              ${pkg.price}
            </Text>
          </View>
          <Text className="text-gray-500">Duration: {pkg.duration}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderServiceDetails = () => (
    <View className="mb-6">
      <Text className="text-lg font-semibold mb-4">Service Details</Text>
      
      {/* Address Input */}
      <View className="mb-4">
        <Text className="text-gray-600 mb-2">Service Address *</Text>
        <TextInput
          className="bg-gray-50 p-4 rounded-xl text-gray-800"
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
          multiline
        />
      </View>

      {/* Special Instructions */}
      <View className="mb-4">
        <Text className="text-gray-600 mb-2">Special Instructions</Text>
        <TextInput
          className="bg-gray-50 p-4 rounded-xl text-gray-800 h-24"
          placeholder="Any special instructions for the service provider?"
          value={specialInstructions}
          onChangeText={setSpecialInstructions}
          multiline
        />
      </View>

      {/* Booking Summary */}
      <View className="bg-gray-50 p-4 rounded-xl">
        <Text className="font-semibold mb-3">Booking Summary</Text>
        <View className="space-y-2">
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Service</Text>
            <Text className="font-medium">{service.name}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Package</Text>
            <Text className="font-medium">{selectedPackage.name}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Time</Text>
            <Text className="font-medium">{selectedTimeSlot || 'Not selected'}</Text>
          </View>
          <View className="pt-2 border-t border-gray-200">
            <View className="flex-row justify-between">
              <Text className="font-semibold">Total Amount</Text>
              <Text className="text-green-600 font-bold">
                ${selectedPackage.price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-green-600 pt-12 pb-4 px-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold">Book Service</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      {/* Progress Steps */}
      <View className="flex-row justify-between items-center px-4 py-4">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <TouchableOpacity
              onPress={() => setCurrentStep(step)}
              className={`w-8 h-8 rounded-full items-center justify-center ${
                step <= currentStep ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <Text className={`font-medium ${
                step <= currentStep ? 'text-white' : 'text-gray-600'
              }`}>
                {step}
              </Text>
            </TouchableOpacity>
            {step < 3 && (
              <View className={`flex-1 h-1 mx-2 ${
                step < currentStep ? 'bg-green-600' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-4">
        {currentStep === 1 && (
          <>
            {renderDateSelection()}
            {renderTimeSlots()}
          </>
        )}
        {currentStep === 2 && renderPackages()}
        {currentStep === 3 && renderServiceDetails()}
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="p-4 border-t border-gray-200">
        <View className="flex-row space-x-4">
          {currentStep > 1 && (
            <TouchableOpacity
              onPress={() => setCurrentStep(currentStep - 1)}
              className="flex-1 py-4 rounded-xl border border-gray-200"
            >
              <Text className="text-center font-semibold text-gray-600">
                Back
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => {
              if (currentStep < 3) {
                setCurrentStep(currentStep + 1);
              } else {
                handleBooking();
              }
            }}
            className="flex-1 py-4 rounded-xl bg-green-600"
          >
            <Text className="text-center font-semibold text-white">
              {currentStep === 3 ? 'Confirm Booking' : 'Continue'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookService;

