import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

interface Service {
    id: number;
    name: string;
    category: string;
    price: number;
    image?: string;
    rating?: string;
    reviews?: number;
}

const services: Service[] = [
    {
        id: 1,
        name: "John's Plumbing",
        category: 'Plumbing',
        price: 50,
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
        rating: '4.8',
        reviews: 156
    },
    {
        id: 2,
        name: 'QuickFix Electric',
        category: 'Electrician',
        price: 45,
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600',
        rating: '4.9',
        reviews: 203
    }
];

export default function ServicesScreen() {
    const router = useRouter();

    const renderServiceCard = ({ item }: { item: Service }) => (
        <TouchableOpacity
            className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden"
            onPress={() => router.push(`/service/${item.id}`)}
        >
            {item.image && (
                <Image
                    source={{ uri: item.image }}
                    className="w-full h-48"
                    resizeMode="cover"
                />
            )}
            <View className="p-4">
                <Text className="text-lg font-semibold">{item.name}</Text>
                <Text className="text-gray-500 mb-2">{item.category}</Text>
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                        <Feather name="star" size={16} color="#16a34a" />
                        <Text className="ml-1 text-gray-600">{item.rating}</Text>
                        <Text className="ml-1 text-gray-400">
                            ({item.reviews} reviews)
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
        <SafeAreaView className="flex-1 bg-[#F2FDF3]">
            <View className="flex-1">
                <View className="bg-green-600 pt-4 pb-4">
                    <Text className="text-white text-xl font-bold text-center">
                        Services
                    </Text>
                </View>

                <FlatList
                    data={services}
                    renderItem={renderServiceCard}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ padding: 16 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
} 