import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ServiceDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    // Mock service data - replace with your actual data fetching logic
    const service = {
        id: 1,
        name: "John's Plumbing",
        category: 'Plumbing',
        price: 50,
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
        rating: '4.8',
        reviews: 156,
        description: 'Professional plumbing services with years of experience.'
    };

    return (
        <SafeAreaView className="flex-1 bg-[#F2FDF3]">
            <ScrollView className="flex-1">
                <View className="bg-green-600 pt-4 pb-4">
                    <View className="px-4 flex-row items-center justify-between">
                        <TouchableOpacity 
                            onPress={() => router.back()}
                            className="p-2"
                        >
                            <Feather name="arrow-left" size={24} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white text-lg font-semibold">
                            Service Details
                        </Text>
                        <View style={{ width: 32 }} />
                    </View>
                </View>

                <Image
                    source={{ uri: service.image }}
                    className="w-full h-64"
                    resizeMode="cover"
                />

                <View className="bg-white -mt-6 rounded-t-3xl p-4">
                    <Text className="text-2xl font-bold text-gray-800 mb-2">
                        {service.name}
                    </Text>
                    <Text className="text-base text-gray-600 mb-4">
                        {service.category}
                    </Text>
                    <Text className="text-gray-500 mb-6">
                        {service.description}
                    </Text>

                    <TouchableOpacity
                        onPress={() => router.push('/booking')}
                        className="bg-green-600 py-4 rounded-xl"
                    >
                        <Text className="text-white text-center font-semibold text-lg">
                            Book Now - ${service.price}/hr
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
} 