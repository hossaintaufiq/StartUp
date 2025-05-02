export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
}

export interface BookingData {
  timeSlots: TimeSlot[];
  servicePackages: ServicePackage[];
  calendar: {
    daysOfWeek: string[];
    months: string[];
  };
} 