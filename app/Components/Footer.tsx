import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';

interface ShortcutItem {
  label: string;
  route: string;
  icon: string;
}

const shortcuts: ShortcutItem[] = [
  { label: 'Home', route: '/' },
  { label: 'Categories', route: '/category' },
  // Add more shortcuts as needed
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View className="bg-white px-4 py-6 mt-4">
      {/* Quick Links */}
      <View className="flex-row justify-around mb-6">
        {shortcuts.map((item, index) => (
          <Link key={index} href={item.route} asChild>
            <TouchableOpacity className="items-center">
              <View className="bg-green-50 w-12 h-12 rounded-full items-center justify-center mb-1">
                <Feather name={item.icon as any} size={20} color="#16a34a" />
              </View>
              <Text className="text-gray-600 text-xs">{item.label}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      {/* Company Info */}
      <View className="border-t border-gray-100 pt-6">
        <Text className="text-gray-600 text-sm font-medium text-center mb-4">
          About Us
        </Text>
        <Text className="text-gray-500 text-xs text-center mb-4 px-6 leading-5">
          We connect skilled professionals with customers looking for quality services. Join our growing community today.
        </Text>
      </View>

      {/* Contact Links */}
      <View className="flex-row justify-center space-x-6 mb-6">
        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:support@yourapp.com')}
          className="items-center"
        >
          <View className="bg-green-50 w-10 h-10 rounded-full items-center justify-center mb-1">
            <Feather name="mail" size={18} color="#16a34a" />
          </View>
          <Text className="text-gray-500 text-xs">Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://yourapp.com/help')}
          className="items-center"
        >
          <View className="bg-green-50 w-10 h-10 rounded-full items-center justify-center mb-1">
            <Feather name="help-circle" size={18} color="#16a34a" />
          </View>
          <Text className="text-gray-500 text-xs">Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://yourapp.com/faq')}
          className="items-center"
        >
          <View className="bg-green-50 w-10 h-10 rounded-full items-center justify-center mb-1">
            <Feather name="info" size={18} color="#16a34a" />
          </View>
          <Text className="text-gray-500 text-xs">FAQ</Text>
        </TouchableOpacity>
      </View>

      {/* Copyright */}
      <View className="border-t border-gray-100 pt-6">
        <Text className="text-gray-400 text-xs text-center">
          © {currentYear} Your App Name. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

export default Footer;
