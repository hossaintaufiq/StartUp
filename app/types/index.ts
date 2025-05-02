// Common Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Category {
  id: number;
  title: string;
  icon: string;
  bgColor: string;
  count: string;
}

export interface Service {
  id: number;
  name: string;
  category: string;
  rating: string;
  reviews: number;
  price: string;
  image: string;
  availability: string;
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

export interface Professional {
  id: number;
  title: string;
  image: string;
  rating: string;
  reviews: string;
  price: string;
  availability: string;
}

export interface FeaturedService {
  id: number;
  title: string;
  description: string;
  image: string;
  discount: string;
}

export interface MainCategory {
  id: number;
  title: string;
  icon: string;
  bgColor: string;
  services: string[];
  providers: number;
  image: string;
}

export interface ServiceData {
  categories: Category[];
  professionals: Professional[];
  featuredServices: FeaturedService[];
}

export interface CategoryData {
  mainCategories: MainCategory[];
  filters: string[];
}

export interface ServiceListData {
  services: Service[];
  filters: string[];
} 