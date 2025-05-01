import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const BookService = ({ route }: any) => {
  const { service } = route.params;
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const handleBooking = () => {
    alert(`Booking confirmed for ${name} with ${service.name}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Book {service.name}</Text>
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Notes (optional)"
        value={note}
        onChangeText={setNote}
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
      />
      <Button title="Confirm Booking" onPress={handleBooking} />
    </View>
  );
};

export default BookService;
