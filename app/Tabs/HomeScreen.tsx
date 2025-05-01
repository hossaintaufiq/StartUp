import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const categories = [
  'AC Repair',
  'Electrician',
  'Car Wash',
  'Cleaning',
  'Moving',
];

const professionals = [
  {
    title: 'Photographer',
    image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww',
  },
  {
    title: 'Makeup Artist',
    image: 'https://images.unsplash.com/photo-1621691554154-39df33190691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1ha2V1cCUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Digital Marketer',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMG1hcmtldGVyfGVufDB8fDB8fHww',
  },
  {
    title: 'Dietician',
    image: 'https://images.unsplash.com/photo-1585358682246-23acb1561f6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRpZXRpY2lhbnxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const recommended = [
  {
    title: 'Dry-Cleaning',
    image: 'https://plus.unsplash.com/premium_photo-1682129254917-6c5acb7532ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRyeSUyMGNsZWFuaW5nfGVufDB8fDB8fHww',
  },
  {
    title: 'Golf Club Cleaning',
    image: 'https://images.unsplash.com/photo-1624971035514-2bbbc81ea9fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZiUyMGNsdWIlMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Personal Chef',
    image: 'https://images.unsplash.com/photo-1744043494585-d42e2ac96df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uYWwlMjBDaGVmfGVufDB8fDB8fHww',
  },
  {
    title: 'Tutoring',
    image: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHV0b3Jpbmd8ZW58MHx8MHx8fDA%3D',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView className="flex-1 bg-[#F2FDF3] px-4 pt-12">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between mb-4">
        <Ionicons name="menu" size={24} />
        <Text className="text-xl font-bold">Home</Text>
        <View className="flex-row items-center space-x-2">
          <TouchableOpacity className="bg-green-100 px-3 py-1 rounded-full">
            <Text className="text-green-600 text-sm">Become a Seller</Text>
          </TouchableOpacity>
          <Feather name="bell" size={22} />
        </View>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-white px-4 py-2 rounded-xl mb-4 shadow-sm">
        <Feather name="search" size={20} color="#999" />
        <TextInput
          placeholder="Search services"
          className="ml-2 flex-1 text-sm text-gray-700"
        />
      </View>

      {/* Banner */}
      <View className="h-44 rounded-xl overflow-hidden mb-6">
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1661757369657-d7b09363e137?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHNlcnZpbmd8ZW58MHx8MHx8fDA%3D',
          }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Categories */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-semibold">Category</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Services')}
          className="bg-green-100 px-3 py-1 rounded-full"
        >
          <Text className="text-green-600 text-sm font-medium">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        {categories.map((cat, idx) => (
          <View key={idx} className="items-center mr-4">
            <View className="w-16 h-16 bg-white rounded-xl items-center justify-center shadow-sm mb-1">
              <Ionicons name="construct" size={24} />
            </View>
            <Text className="text-xs text-center">{cat}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Professional Section */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-semibold">Professional</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Services')}
          className="bg-green-100 px-3 py-1 rounded-full"
        >
          <Text className="text-green-600 text-sm font-medium">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        {professionals.map((item, idx) => (
          <TouchableOpacity key={idx} className="mr-4 w-28">
            <View className="h-20 w-full rounded-xl overflow-hidden shadow-sm mb-1">
              <Image source={{ uri: item.image }} className="w-full h-full" />
            </View>
            <Text className="text-xs text-center">{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recommended Section */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-semibold">Recommended</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Services')}
          className="bg-green-100 px-3 py-1 rounded-full"
        >
          <Text className="text-green-600 text-sm font-medium">See All</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row flex-wrap justify-between mb-10">
        {recommended.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            className="w-[48%] bg-white rounded-xl mb-4 overflow-hidden shadow-sm"
          >
            <Image
              source={{ uri: item.image }}
              className="w-full h-24"
              resizeMode="cover"
            />
            <Text className="text-sm p-2">{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
