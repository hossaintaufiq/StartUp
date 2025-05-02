// Common Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  bgColor: string;
  services: string[];
  providers: number;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  availability: 'Available Now' | 'Busy';
  tags: string[];
  provider: ServiceProvider;
  features: string[];
}

export interface ServiceProvider {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  specialization: string;
  experience: number;
  completedJobs: number;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
}

export interface Review {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  comment: string;
  date: string;
  serviceId: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  serviceId: string;
  userId: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  package: ServicePackage;
  address: string;
  specialInstructions?: string;
  totalAmount: number;
}

export interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  iconName: string;
} 