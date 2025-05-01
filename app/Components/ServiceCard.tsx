import React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';

const ServiceCard = ({ service, onPress }: any) => (
  <Card style={{ margin: 10 }} onPress={onPress}>
    <Card.Content>
      <Title>{service.name}</Title>
      <Paragraph>{service.category}</Paragraph>
    </Card.Content>
  </Card>
);

export default ServiceCard;

