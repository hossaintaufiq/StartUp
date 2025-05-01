import React from 'react';
import { Button, Text, View } from 'react-native';

const ServiceDetail = ({ route, navigation }: any) => {
  const { service } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{service.name}</Text>
      <Text style={{ marginVertical: 10 }}>{service.category}</Text>
      <Button title="Book Now" onPress={() => navigation.navigate('BookService', { service })} />
    </View>
  );
};

export default ServiceDetail;