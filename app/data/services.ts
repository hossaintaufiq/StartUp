import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: "John's Plumbing",
    category: 'Plumbing',
    description: 'Professional plumbing services with 10+ years of experience',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
    price: 50,
    rating: 4.8,
    reviews: 156,
    availability: 'Available Now',
    tags: ['Verified', 'Top Rated'],
    provider: {
      id: 'p1',
      name: 'John Smith',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600',
      specialization: 'Plumbing',
      experience: 10,
      completedJobs: 450,
    },
    features: ['Emergency Service', '24/7 Support', 'Guaranteed Work'],
  },
  // Add more services...
]; 