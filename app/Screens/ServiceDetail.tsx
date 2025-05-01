import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ServiceDetail = ({ route, navigation }: any) => {
  const { service } = route.params;

  return (
    <ScrollView className="flex-1 bg-[#F2FDF3]">
      {/* Banner Image */}
      {service.image && (
        <Image
          source={{ uri: service.image }}
          className="w-full h-64"
          resizeMode="cover"
        />
      )}

      {/* Content Section */}
      <View className="p-5 bg-white rounded-t-3xl -mt-6 shadow-lg">
        <Text className="text-2xl font-bold text-gray-800 mb-2">{service.name}</Text>
        <Text className="text-base text-gray-600 mb-4">{service.category}</Text>
        <Text className="text-sm text-gray-500 mb-6">
          {service.description || 'This service is highly rated and performed by professionals near you. Book with ease and get quality assistance.'}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('BookService', { service })}
          className="bg-green-500 py-3 rounded-xl"
        >
          <Text className="text-white text-center font-semibold text-base">
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ServiceDetail;
