import { Category, Service } from '../types/types';

export const mockServices: Service[] = [
    {
        id: 1,
        name: "John's Plumbing",
        category: 'Plumbing',
        price: 50,
        description: 'Professional plumbing services',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600'
    },
    {
        id: 2,
        name: 'QuickFix Electric',
        category: 'Electrician',
        price: 45,
        description: 'Expert electrical services',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600'
    }
];

export const mockCategories: Category[] = [
    {
        id: 1,
        name: 'Plumbing',
        icon: 'tool'
    },
    {
        id: 2,
        name: 'Electrical',
        icon: 'zap'
    }
]; 