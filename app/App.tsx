import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { LightTheme } from './Themes';

import BookService from './Screens/BookService';
import ServiceDetail from './Screens/ServiceDetail';
import ServiceList from './Screens/ServiceList';
import HomeScreen from './Tabs/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={LightTheme}>
      {/* <NavigationContainer> */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Services" component={ServiceList} />
          <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
          <Stack.Screen name="BookService" component={BookService} />
        </Stack.Navigator>
      {/* </NavigationContainer> */}
    </PaperProvider>
  );
}
