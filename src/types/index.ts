export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  image: string;
  fallbackImage?: string;
  category: string;
  duration: string;
  intensity: string;
}

export interface ScheduleSlot {
  id: string;
  time: string;
  className: string;
  trainer: string;
  room: string;
  spots: number;
}

export interface DaySchedule {
  day: string;
  slots: (ScheduleSlot | null)[];
}

export interface TrainerSkill {
  name: string;
  percentage: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  fallbackImage?: string;
  experience: string;
  rating: number;
  clients: number;
}
