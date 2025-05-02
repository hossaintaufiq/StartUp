import { Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    title: 'Home Cleaning',
    icon: 'home',
    bgColor: '#D1FAE5',
    services: ['Deep Cleaning', 'Regular Cleaning', 'Window Cleaning'],
    providers: 48,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600',
  },
  {
    id: '2',
    title: 'AC Repair',
    icon: 'wind',
    bgColor: '#DBEAFE',
    services: ['Installation', 'Maintenance', 'Repair'],
    providers: 35,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600',
  },
  // Add more categories...
]; 