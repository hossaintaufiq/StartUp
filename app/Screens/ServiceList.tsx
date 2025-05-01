import React from 'react';
import { FlatList } from 'react-native';
import ServiceCard from '../Components/ServiceCard';
import { services } from '../Constants/Services';

const ServiceList = ({ navigation }: any) => (
  <FlatList
    data={services}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <ServiceCard service={item} onPress={() => navigation.navigate('ServiceDetail', { service: item })} />
    )}
  />
);

export default ServiceList;