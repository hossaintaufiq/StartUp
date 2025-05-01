import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const BookService = ({ route }: any) => {
  const { service } = route.params;
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const handleBooking = () => {
    if (!name.trim()) {
      Alert.alert('Please enter your name');
      return;
    }
    Alert.alert('Success', `Booking confirmed for ${name} with ${service.name}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-[#F2FDF3]"
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-2xl font-bold mb-6 text-gray-800">
          Book {service.name}
        </Text>

        <View className="bg-white p-5 rounded-xl shadow-md">
          <Text className="text-sm mb-1 text-gray-600">Your Name</Text>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm"
          />

          <Text className="text-sm mb-1 text-gray-600">Notes (optional)</Text>
          <TextInput
            placeholder="e.g. Please arrive early"
            value={note}
            onChangeText={setNote}
            multiline
            numberOfLines={3}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm mb-6"
          />

          <TouchableOpacity
            onPress={handleBooking}
            className="bg-green-500 py-3 rounded-lg"
          >
            <Text className="text-white text-center text-base font-medium">
              Confirm Booking
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default BookService;

