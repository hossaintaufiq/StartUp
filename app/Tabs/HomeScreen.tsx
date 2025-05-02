import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from '../Components/Footer';

const { width } = Dimensions.get('window');

const categories = [
  { name: 'AC Repair', icon: 'tools' },
  { name: 'Electrician', icon: 'zap' },
  { name: 'Car Wash', icon: 'truck' },
  { name: 'Cleaning', icon: 'refresh-cw' },
  { name: 'Moving', icon: 'box' },
];

const professionals = [
  {
    title: 'Photographer',
    image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600',
    rating: '4.8',
    price: '$50/hr'
  },
  {
    title: 'Makeup Artist',
    image: 'https://images.unsplash.com/photo-1621691554154-39df33190691?w=600',
    rating: '4.9',
    price: '$45/hr'
  },
  {
    title: 'Digital Marketer',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600',
    rating: '4.7',
    price: '$40/hr'
  },
  {
    title: 'Dietician',
    image: 'https://images.unsplash.com/photo-1585358682246-23acb1561f6b?w=600',
    rating: '4.9',
    price: '$55/hr'
  },
];

const featuredServices = [
  {
    title: 'Spring Cleaning Special',
    description: '20% off on deep cleaning services',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600',
    discount: '20%'
  },
  {
    title: 'Home Repair Bundle',
    description: 'Book any 3 services and save',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
    discount: '15%'
  },
];

const bannerData = [
  {
    id: 1,
    title: "Premium Services",
    subtitle: "Get 25% off your first booking",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    accent: "#4ade80", // green-400
    gradient: "from-green-600/95 to-green-900/95",
    icon: "star",
  },
  {
    id: 2,
    title: "Home Cleaning",
    subtitle: "Professional cleaners at your service",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    accent: "#22c55e", // green-500
    gradient: "from-green-800/95 to-emerald-900/95",
    icon: "home",
  },
  {
    id: 3,
    title: "Expert Repairs",
    subtitle: "Trusted & certified professionals",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800",
    accent: "#10b981", // emerald-500
    gradient: "from-emerald-700/95 to-green-900/95",
    icon: "tool",
  }
];

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [activeBannerIndex, setActiveBannerIndex] = React.useState(0);

  // Banner auto-scroll with smooth transition
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % bannerData.length);
    }, 6000); // Changed to 6 seconds for better reading time

    return () => clearInterval(interval);
  }, []);

  const renderBanner = () => (
    <View className="mb-6">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setActiveBannerIndex(newIndex);
        }}
      >
        {bannerData.map((banner, index) => (
          <View 
            key={banner.id}
            style={{ width }}
            className="relative"
          >
            {/* Background Image with Gradient Overlay */}
            <View className="h-[280px] overflow-hidden">
              <Image
                source={{ uri: banner.image }}
                className="absolute w-full h-full"
                resizeMode="cover"
              />
              <View className={`absolute w-full h-full bg-gradient-to-br ${banner.gradient}`} />
              
              {/* Content Container */}
              <View className="flex-1 justify-between p-6 h-full">
                {/* Top Section */}
                <View className="flex-row items-center">
                  <View 
                    style={{ backgroundColor: banner.accent }} 
                    className="w-10 h-10 rounded-full items-center justify-center mr-3"
                  >
                    <Feather name={banner.icon} size={24} color="white" />
                  </View>
                  <View className="bg-white/20 px-3 py-1 rounded-full">
                    <Text className="text-white font-medium">
                      Limited Time Offer
                    </Text>
                  </View>
                </View>

                {/* Middle Section */}
                <View className="my-4">
                  <Text className="text-white text-4xl font-bold mb-2 shadow-lg">
                    {banner.title}
                  </Text>
                  <Text className="text-white/90 text-lg mb-4 shadow-md">
                    {banner.subtitle}
                  </Text>
                </View>

                {/* Bottom Section */}
                <View className="flex-row items-center space-x-4">
                  <TouchableOpacity 
                    className="bg-white rounded-full px-6 py-3 flex-row items-center"
                    onPress={() => navigation.navigate('Services')}
                  >
                    <Text className="text-green-600 font-semibold mr-2">
                      Book Now
                    </Text>
                    <Feather name="arrow-right" size={18} color="#16a34a" />
                  </TouchableOpacity>
                  <TouchableOpacity 
                    className="bg-black/30 rounded-full px-6 py-3 border border-white/30"
                    onPress={() => navigation.navigate('Category')}
                  >
                    <Text className="text-white font-semibold">
                      Learn More
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Enhanced Pagination Dots */}
      <View className="flex-row justify-center items-center space-x-2 mt-3">
        {bannerData.map((_, index) => (
          <View
            key={index}
            className={`rounded-full transition-all duration-300 ease-in-out ${
              index === activeBannerIndex 
                ? 'w-6 h-2 bg-green-600' 
                : 'w-2 h-2 bg-gray-300'
            }`}
          />
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView className="flex-1 bg-[#F2FDF3]">
      {/* Top Bar */}
      <View className="px-4 pt-12 pb-2">
        <View className="flex-row items-center justify-between">
          <Ionicons name="menu" size={24} />
          <Text className="text-xl font-bold">Home</Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="bg-green-100 px-3 py-1 rounded-full">
              <Text className="text-green-600 text-sm">Become a Seller</Text>
            </TouchableOpacity>
            <Feather name="bell" size={22} />
          </View>
        </View>
      </View>

      {/* Enhanced Banner Section */}
      {renderBanner()}

      {/* Search Bar with Location */}
      <View className="px-4 mb-6">
        <View className="flex-row items-center bg-white px-4 py-2 rounded-xl mb-2 shadow-sm">
          <Feather name="search" size={20} color="#999" />
          <TextInput
            placeholder="Search services"
            className="ml-2 flex-1 text-sm text-gray-700"
          />
        </View>
        <TouchableOpacity className="flex-row items-center">
          <Feather name="map-pin" size={16} color="#16a34a" />
          <Text className="ml-1 text-green-600 text-sm">Current Location: New York</Text>
          <Feather name="chevron-down" size={16} color="#16a34a" className="ml-1" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View className="px-4 mb-6">
        <View className="flex-row justify-between">
          <TouchableOpacity className="bg-white rounded-xl p-4 shadow-sm flex-1 mr-2">
            <View className="bg-green-50 w-10 h-10 rounded-full items-center justify-center mb-2">
              <Feather name="calendar" size={20} color="#16a34a" />
            </View>
            <Text className="font-medium">Book Service</Text>
            <Text className="text-xs text-gray-500 mt-1">Schedule now</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-xl p-4 shadow-sm flex-1 ml-2">
            <View className="bg-green-50 w-10 h-10 rounded-full items-center justify-center mb-2">
              <Feather name="clock" size={20} color="#16a34a" />
            </View>
            <Text className="font-medium">Track Service</Text>
            <Text className="text-xs text-gray-500 mt-1">View status</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View className="bg-white px-4 py-6 mb-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Categories</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Category')}
            className="bg-green-100 px-3 py-1 rounded-full"
          >
            <Text className="text-green-600 text-sm font-medium">See All</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row flex-wrap justify-between">
          {categories.map((cat, idx) => (
            <TouchableOpacity 
              key={idx} 
              className="w-[18%] items-center mb-4"
              onPress={() => navigation.navigate('Services')}
            >
              <View className="w-12 h-12 bg-green-50 rounded-full items-center justify-center mb-1">
                <Feather name={cat.icon} size={20} color="#16a34a" />
              </View>
              <Text className="text-xs text-center text-gray-600">{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Top Professionals */}
      <View className="px-4 mb-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Top Professionals</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Services')}
            className="bg-green-100 px-3 py-1 rounded-full"
          >
            <Text className="text-green-600 text-sm font-medium">See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {professionals.map((pro, idx) => (
            <TouchableOpacity 
              key={idx} 
              className="mr-4 bg-white rounded-xl overflow-hidden shadow-sm"
              style={{ width: 200 }}
            >
              <Image 
                source={{ uri: pro.image }} 
                className="w-full h-24"
                resizeMode="cover"
              />
              <View className="p-3">
                <Text className="font-semibold mb-1">{pro.title}</Text>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center">
                    <Feather name="star" size={14} color="#16a34a" />
                    <Text className="ml-1 text-sm text-gray-600">{pro.rating}</Text>
                  </View>
                  <Text className="text-green-600 font-medium">{pro.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Recent Bookings Section */}
      <View className="bg-white px-4 py-6 mb-6">
        <Text className="text-lg font-semibold mb-4">Recent Bookings</Text>
        <View className="bg-green-50 p-4 rounded-xl">
          <Text className="text-base text-gray-600 text-center">
            No recent bookings found
          </Text>
          <TouchableOpacity 
            className="bg-green-600 px-4 py-2 rounded-full mt-3"
            onPress={() => navigation.navigate('Services')}
          >
            <Text className="text-white text-center font-medium">Book a Service</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;
