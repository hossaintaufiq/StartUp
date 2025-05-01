
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ServiceCard from '../Components/ServiceCard';
import { services } from '../Constants/Services';

const ServiceList = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-[#F2FDF3] px-4 pt-12">
      {/* Page Header */}
      <Text className="text-2xl font-bold text-gray-800 mb-4">Available Services</Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View className="mb-4">
            <ServiceCard
              service={item}
              onPress={() =>
                navigation.navigate('ServiceDetail', { service: item })
              }
            />
          </View>
        )}
        ListFooterComponent={() => (
          <View className="mt-4 items-center">
            <Text className="text-sm text-gray-400">End of List</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ServiceList;
