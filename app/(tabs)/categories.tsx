import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

interface Category {
    id: number;
    name: string;
    icon: string;
    color: string;
}

const categories: Category[] = [
    {
        id: 1,
        name: 'Plumbing',
        icon: 'tool',
        color: '#D1FAE5'
    },
    {
        id: 2,
        name: 'Electrical',
        icon: 'zap',
        color: '#DBEAFE'
    },
    // Add more categories as needed
];

export default function CategoriesScreen() {
    const router = useRouter();

    const renderCategory = ({ item }: { item: Category }) => (
        <TouchableOpacity
            className="bg-white rounded-xl shadow-sm mb-4 p-4"
            onPress={() => router.push(`/category/${item.id}`)}
        >
            <View className="flex-row items-center">
                <View 
                    className="w-12 h-12 rounded-full items-center justify-center mr-4"
                    style={{ backgroundColor: item.color }}
                >
                    <Feather name={item.icon as any} size={24} color="#16a34a" />
                </View>
                <Text className="text-lg font-semibold">{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView className="flex-1 bg-[#F2FDF3]">
            <View className="flex-1">
                <View className="bg-green-600 pt-4 pb-4">
                    <Text className="text-white text-xl font-bold text-center">
                        Categories
                    </Text>
                </View>

                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ padding: 16 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

export { default } from '../Category/Category';
