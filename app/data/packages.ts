import { ServicePackage } from '../types';

export const servicePackages: ServicePackage[] = [
  {
    id: '1',
    name: 'Basic',
    price: 50,
    duration: '1 hour',
    features: ['Basic Service', 'Standard Support'],
  },
  {
    id: '2',
    name: 'Standard',
    price: 75,
    duration: '2 hours',
    features: ['Enhanced Service', 'Priority Support', 'Warranty'],
  },
  {
    id: '3',
    name: 'Premium',
    price: 100,
    duration: '3 hours',
    features: ['Premium Service', '24/7 Support', 'Extended Warranty', 'Priority Booking'],
  },
]; 