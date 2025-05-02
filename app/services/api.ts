import { categories } from '../data/categories';
import { servicePackages } from '../data/packages';
import { services } from '../data/services';
import { timeSlots } from '../data/timeSlots';
import { Booking, Category, Service, ServicePackage, TimeSlot } from '../types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Categories
  getCategories: async (): Promise<Category[]> => {
    await delay(1000);
    return categories;
  },

  getCategoryById: async (id: string): Promise<Category | undefined> => {
    await delay(500);
    return categories.find(category => category.id === id);
  },

  // Services
  getServices: async (): Promise<Service[]> => {
    await delay(1000);
    return services;
  },

  getServiceById: async (id: string): Promise<Service | undefined> => {
    await delay(500);
    return services.find(service => service.id === id);
  },

  getServicesByCategory: async (categoryId: string): Promise<Service[]> => {
    await delay(1000);
    return services.filter(service => service.category === categoryId);
  },

  // Packages
  getServicePackages: async (serviceId: string): Promise<ServicePackage[]> => {
    await delay(500);
    return servicePackages;
  },

  // Time Slots
  getAvailableTimeSlots: async (serviceId: string, date: string): Promise<TimeSlot[]> => {
    await delay(500);
    return timeSlots;
  },

  // Bookings
  createBooking: async (bookingData: Partial<Booking>): Promise<Booking> => {
    await delay(1500);
    return {
      id: Math.random().toString(36).substr(2, 9),
      status: 'confirmed',
      ...bookingData,
    } as Booking;
  },
}; 