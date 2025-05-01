

import React from 'react';
import { Image } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

const ServiceCard = ({ service, onPress }: any) => (
  <Card
    onPress={onPress}
    style={{
      marginVertical: 8,
      borderRadius: 12,
      overflow: 'hidden',
      elevation: 3,
      marginHorizontal: 4,
    }}
  >
    {/* Service Image */}
    {service.image && (
      <Image
        source={{ uri: service.image }}
        style={{ width: '100%', height: 160 }}
        resizeMode="cover"
      />
    )}

    {/* Service Content */}
    <Card.Content>
      <Title style={{ fontSize: 18, marginBottom: 4 }}>{service.name}</Title>
      <Paragraph style={{ color: '#666' }}>{service.category}</Paragraph>
    </Card.Content>
  </Card>
);

export default ServiceCard;
