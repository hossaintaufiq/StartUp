import { Stack } from "expo-router";
import { View } from 'react-native';
import './global.css';

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack />
      {/* <Footer /> */}
    </View>
  );
}
