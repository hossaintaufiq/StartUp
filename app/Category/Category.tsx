// Category.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { categoryData } from './CatagoryData'; // Adjust path if needed

const Category = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
      {categoryData.map((cat, idx) => (
        <View key={idx} className="items-center mr-4">
          <View
            className="w-16 h-16 rounded-xl items-center justify-center shadow-sm mb-1"
            style={{ backgroundColor: cat.bgColor }}
          >
            <Ionicons name={cat.icon} size={24} color="#065F46" />
          </View>
          <Text className="text-xs text-center">{cat.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Category;


// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import {
//   Image,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// const categoryServices = [
//   {
//     name: 'AC Repair',
//     image: 'https://images.unsplash.com/photo-1601979031925-289f4eb0503d?w=600',
//   },
//   {
//     name: 'Electrician',
//     image: 'https://images.unsplash.com/photo-1602002418816-6c8dba3d0f6e?w=600',
//   },
//   {
//     name: 'Car Wash',
//     image: 'https://images.unsplash.com/photo-1581578731548-c64695cc695c?w=600',
//   },
//   {
//     name: 'Cleaning',
//     image: 'https://images.unsplash.com/photo-1601112219034-ff6b39f2e1f4?w=600',
//   },
//   {
//     name: 'Moving',
//     image: 'https://images.unsplash.com/photo-1606228921747-897dc57cbd1b?w=600',
//   },
// ];

// const Category = () => {
//   const navigation = useNavigation<any>();

//   return (
//     <ScrollView className="flex-1 bg-[#F2FDF3] px-4 pt-12">
//       {/* Header with Back Button */}
//       <View className="flex-row items-center mb-6">
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} className="text-gray-800" />
//         </TouchableOpacity>
//         <Text className="text-xl font-bold ml-4">Categories</Text>
//       </View>

//       {/* List of Category Services */}
//       <View className="flex-row flex-wrap justify-between">
//         {categoryServices.map((item, idx) => (
//           <TouchableOpacity
//             key={idx}
//             onPress={() => navigation.navigate('ServiceDetail', { service: item })}
//             className="w-[48%] bg-white rounded-xl mb-4 overflow-hidden shadow-sm"
//           >
//             <Image
//               source={{ uri: item.image }}
//               className="w-full h-24"
//               resizeMode="cover"
//             />
//             <Text className="text-sm p-2">{item.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// export default Category;
