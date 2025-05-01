// category.ts
import { Ionicons } from '@expo/vector-icons';

export type CategoryItem = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  bgColor: string;
};

export const categoryData: CategoryItem[] = [
  {
    title: 'AC Repair',
    icon: 'snow',
    bgColor: '#D1FAE5',
  },
  {
    title: 'Electrician',
    icon: 'flash',
    bgColor: '#D1FAE5',
  },
  {
    title: 'Car Wash',
    icon: 'car-sport',
    bgColor: '#D1FAE5',
  },
  {
    title: 'Cleaning',
    icon: 'sparkles',
    bgColor: '#D1FAE5',
  },
  {
    title: 'Moving',
    icon: 'cube',
    bgColor: '#D1FAE5',
  },
  {
    title: 'Plumbing',
    icon: 'water',
    bgColor: '#D1FAE5',
  },
];
