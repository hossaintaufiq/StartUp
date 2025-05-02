// import { Stack } from "expo-router";
// import { View } from 'react-native';
// import './global.css';

// export default function RootLayout() {
//   return (
//     <View style={{ flex: 1 }}>
//       <Stack />
//     </View>
//   );
// }



import { Stack } from "expo-router";
import { View } from 'react-native';
import './global.css';

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" options={{ gestureEnabled: false }} />
        <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
        <Stack.Screen name="service-list" />
        <Stack.Screen name="service-detail" />
        <Stack.Screen name="book-service" />
        <Stack.Screen name="booking-details" />
      </Stack>
    </View>
  );
}