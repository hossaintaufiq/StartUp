import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { services } from '../Constants/Services';

// Define TypeScript interfaces
interface Service {
  id: number;
  name: string;
  category: string;
  rating: string;
  reviews: number;
  price: number;
  image: string;
  tags: string[];
  availability: string;
}

// Enhanced service data with more details
const enhancedServices: Service[] = services.map(service => ({
  ...service,
  rating: (4 + Math.random()).toFixed(1),
  reviews: Math.floor(Math.random() * 200) + 50,
  price: Math.floor(Math.random() * 50) + 20,
  image: `https://source.unsplash.com/600x400/?${service.category.toLowerCase().replace(' ', '-')}`,
  tags: ['Verified', 'Top Rated'],
  availability: Math.random() > 0.3 ? 'Available Now' : 'Busy',
}));

interface ServiceListProps {
  navigation: any;
}

const ServiceList: React.FC<ServiceListProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [refreshing, setRefreshing] = useState(false);
  const [viewType, setViewType] = useState<'grid' | 'list'>('list');

  const filters = ['All', 'Popular', 'Nearby', 'Available Now'];

  const filteredServices = enhancedServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  }, []);

  const renderHeader = () => (
    <View className="bg-green-600 pt-12 pb-6">
      {/* Top Bar */}
      <View className="px-4 flex-row items-center justify-between mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">Services</Text>
        <TouchableOpacity onPress={() => setViewType(prev => prev === 'grid' ? 'list' : 'grid')}>
          <Feather name={viewType === 'grid' ? 'list' : 'grid'} size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="mx-4 bg-white/10 rounded-xl flex-row items-center px-4 py-2 mb-4">
        <Feather name="search" size={20} color="white" />
        <TextInput
          placeholder="Search services..."
          placeholderTextColor="rgba(255,255,255,0.7)"
          className="flex-1 ml-2 text-white"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4"
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setSelectedFilter(filter)}
            className={`mr-3 px-4 py-2 rounded-full ${
              selectedFilter === filter
                ? 'bg-white'
                : 'bg-white/20'
            }`}
          >
            <Text
              className={`font-medium ${
                selectedFilter === filter
                  ? 'text-green-600'
                  : 'text-white'
              }`}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderServiceCard = ({ item }: { item: Service }) => (
    <TouchableOpacity
      className={`bg-white rounded-xl shadow-sm mb-4 overflow-hidden ${
        viewType === 'grid' ? 'w-[48%]' : 'w-full'
      }`}
      onPress={() => navigation.navigate('ServiceDetail', { service: item })}
    >
      <Image
        source={{ uri: item.image }}
        className={`w-full ${viewType === 'grid' ? 'h-32' : 'h-48'}`}
        resizeMode="cover"
      />
      
      {/* Availability Badge */}
      <View 
        className={`absolute top-2 right-2 px-2 py-1 rounded-full ${
          item.availability === 'Available Now' ? 'bg-green-500' : 'bg-gray-500'
        }`}
      >
        <Text className="text-white text-xs font-medium">
          {item.availability}
        </Text>
      </View>

      <View className="p-3">
        {/* Tags */}
        <View className="flex-row mb-2">
          {item.tags.map((tag, index) => (
            <View
              key={index}
              className="bg-green-50 px-2 py-1 rounded-full mr-2"
            >
              <Text className="text-green-600 text-xs">{tag}</Text>
            </View>
          ))}
        </View>

        {/* Service Info */}
        <Text className="font-semibold text-base mb-1">{item.name}</Text>
        <Text className="text-gray-500 text-xs mb-2">{item.category}</Text>

        {/* Rating and Price */}
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Feather name="star" size={14} color="#16a34a" />
            <Text className="ml-1 text-sm font-medium">{item.rating}</Text>
            <Text className="ml-1 text-xs text-gray-500">
              ({item.reviews})
            </Text>
          </View>
          <Text className="text-green-600 font-semibold">
            ${item.price}/hr
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-[#F2FDF3]">
      <FlatList
        data={filteredServices}
        renderItem={renderServiceCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={viewType === 'grid' ? 2 : 1}
        key={viewType}
        columnWrapperStyle={viewType === 'grid' ? { justifyContent: 'space-between' } : undefined}
        contentContainerStyle={{ padding: 16 }}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#16a34a"
          />
        }
        ListEmptyComponent={
          <View className="py-8 items-center">
            <Feather name="inbox" size={48} color="#16a34a" />
            <Text className="mt-4 text-gray-500">No services found</Text>
          </View>
        }
      />
    </View>
  );
};

export default ServiceList;
