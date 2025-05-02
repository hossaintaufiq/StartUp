import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Footer from './Footer';

interface ScreenWrapperProps {
  children: React.ReactNode;
  withScrollView?: boolean;
  showFooter?: boolean;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  withScrollView = true,
  showFooter = true,
}) => {
  const Content = withScrollView ? ScrollView : View;

  return (
    <SafeAreaView className="flex-1 bg-[#F2FDF3]">
      <Content
        className="flex-1"
        contentContainerStyle={withScrollView ? { flexGrow: 1 } : undefined}
      >
        <View className="flex-1">
          {children}
        </View>
        {showFooter && <Footer />}
      </Content>
    </SafeAreaView>
  );
};

export default ScreenWrapper; 
 