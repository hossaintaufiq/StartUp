import React from 'react';
import { Button, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="View Services" onPress={() => navigation.navigate('Services')} />
  </View>
);

export default HomeScreen;