import { ProgramItem, DaySchedule, TrainerSkill, PricingTier, TrainerProfile } from '../types';

export const BEHANCE_PROGRAMS: ProgramItem[] = [
  {
    id: 'personal-training',
    title: 'PERSONAL TRAINING',
    description: 'One-on-one coaching tailored to your unique goals, schedule, and fitness level.',
    image: 'https://i.postimg.cc/Vkspr9QK/gym-2.jpg',
    fallbackImage: '/assets/fitcore/gym-2.jpg',
    category: 'Coaching',
    duration: '60 Mins',
    intensity: 'Customized',
  },
  {
    id: 'strength-training',
    title: 'STRENGTH TRAINING',
    description: 'Build muscle, increase power, and transform your physique with proven progressive overload.',
    image: 'https://i.postimg.cc/FsNn8bRL/gym4.jpg',
    fallbackImage: '/assets/fitcore/gym-4.jpg',
    category: 'Hypertrophy',
    duration: '60 Mins',
    intensity: 'High',
  },
  {
    id: 'hiit-classes',
    title: 'HIIT CLASSES',
    description: 'High-intensity interval training that burns calories and builds endurance in record time.',
    image: 'https://i.postimg.cc/s2Qn7wnW/df66b600277fc7fee5c261c8ee6e6a79.jpg',
    fallbackImage: '/assets/fitcore/gym-3-hiit.jpg',
    category: 'Conditioning',
    duration: '45 Mins',
    intensity: 'Extreme',
  },
  {
    id: 'fitness-training',
    title: 'FITNESS TRAINING',
    description: 'One-on-one coaching tailored to your unique goals, schedule, and fitness level.',
    image: 'https://i.postimg.cc/g0ZDnrjW/gym-5.jpg',
    fallbackImage: '/assets/fitcore/gym-5.jpg',
    category: 'Functional',
    duration: '50 Mins',
    intensity: 'Medium - High',
  },
];

export const SCHEDULE_TABS = [
  'Classes',
  'Flexibility',
  'Cardio',
  'HIIT',
  'Bodybuilding',
  'Crossfit',
];

export const TIME_COLUMNS = [
  '9:00am - 10:00am',
  '10:00am - 11:00am',
  '11:00am - 12:00pm',
  '4:00pm - 5:00pm',
  '6:00pm - 7:00pm',
];

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    day: 'Monday',
    slots: [
      { id: 'm-1', time: '9:00am - 10:00am', className: 'Strength Max', trainer: 'Alex Rivera', room: 'Arena A', spots: 4 },
      null,
      { id: 'm-3', time: '11:00am - 12:00pm', className: 'HIIT Circuit', trainer: 'Elena Vance', room: 'Turf', spots: 2 },
      { id: 'm-4', time: '4:00pm - 5:00pm', className: 'Bodybuilding Core', trainer: 'Marcus Stone', room: 'Main Rig', spots: 6 },
      { id: 'm-5', time: '6:00pm - 7:00pm', className: 'Crossfit Blast', trainer: 'Alex Rivera', room: 'Box 1', spots: 3 },
    ],
  },
  {
    day: 'Tuesday',
    slots: [
      null,
      { id: 'tu-2', time: '10:00am - 11:00am', className: 'Cardio Engine', trainer: 'Elena Vance', room: 'Turf', spots: 5 },
      null,
      null,
      { id: 'tu-5', time: '6:00pm - 7:00pm', className: 'Power Lifting', trainer: 'Marcus Stone', room: 'Platforms', spots: 2 },
    ],
  },
  {
    day: 'Wed',
    slots: [
      { id: 'w-1', time: '9:00am - 10:00am', className: 'Endurance Sprint', trainer: 'Elena Vance', room: 'Track', spots: 6 },
      { id: 'w-2', time: '10:00am - 11:00am', className: 'Functional Core', trainer: 'Dr. Sophia', room: 'Studio B', spots: 8 },
      null,
      { id: 'w-4', time: '4:00pm - 5:00pm', className: 'Barbell Hypertrophy', trainer: 'Alex Rivera', room: 'Arena A', spots: 3 },
      { id: 'w-5', time: '6:00pm - 7:00pm', className: 'Crossfit Metcon', trainer: 'Marcus Stone', room: 'Box 1', spots: 1 },
    ],
  },
  {
    day: 'Thursday',
    slots: [
      { id: 'th-1', time: '9:00am - 10:00am', className: 'HIIT Power', trainer: 'Elena Vance', room: 'Turf', spots: 4 },
      null,
      { id: 'th-3', time: '11:00am - 12:00pm', className: 'Strength Lab', trainer: 'Marcus Stone', room: 'Main Rig', spots: 5 },
      { id: 'th-4', time: '4:00pm - 5:00pm', className: 'Bodybuilding Hypertrophy', trainer: 'Alex Rivera', room: 'Arena A', spots: 4 },
      null,
    ],
  },
  {
    day: 'Friday',
    slots: [
      { id: 'f-1', time: '9:00am - 10:00am', className: 'Functional Conditioning', trainer: 'Dr. Sophia', room: 'Studio B', spots: 7 },
      null,
      { id: 'f-3', time: '11:00am - 12:00pm', className: 'Fight Club Boxing', trainer: 'Alex Rivera', room: 'Ring', spots: 2 },
      { id: 'f-4', time: '4:00pm - 5:00pm', className: 'Heavy Metal Friday', trainer: 'Marcus Stone', room: 'Main Rig', spots: 1 },
      null,
    ],
  },
  {
    day: 'Saturday',
    slots: [
      { id: 'sa-1', time: '9:00am - 10:00am', className: 'Weekend Warrior HIIT', trainer: 'Elena Vance', room: 'Turf', spots: 10 },
      { id: 'sa-2', time: '10:00am - 11:00am', className: 'Olympic Lifting Tech', trainer: 'Alex Rivera', room: 'Platforms', spots: 3 },
      { id: 'sa-3', time: '11:00am - 12:00pm', className: 'Cardio Matrix', trainer: 'Elena Vance', room: 'Track', spots: 6 },
      { id: 'sa-4', time: '4:00pm - 5:00pm', className: 'Open Rig Training', trainer: 'Marcus Stone', room: 'Arena A', spots: 8 },
      { id: 'sa-5', time: '6:00pm - 7:00pm', className: 'Sauna & Mobility Flow', trainer: 'Dr. Sophia', room: 'Spa', spots: 4 },
    ],
  },
];

export const TRAINER_SKILLS: TrainerSkill[] = [
  { name: 'Fitness Training', percentage: 94 },
  { name: 'Cardio Training', percentage: 82 },
  { name: 'Body Building', percentage: 88 },
];

export const PRICING_PACKAGES: PricingTier[] = [
  {
    id: 'basic-plan',
    name: 'Basic Plan',
    price: 299,
    description: 'Essential gym access, standard locker use, and basic cardio equipment.',
    features: [
      'Standard floor equipment access',
      'Locker room & shower access',
      'Free high-speed WiFi',
      'Access to Fitcore member portal',
      '1 Guest pass per month',
    ],
  },
  {
    id: 'regular-plan',
    name: 'Regular Plan',
    price: 399,
    popular: true,
    description: 'Our most popular choice for committed lifters seeking unlimited group classes and coach guidance.',
    features: [
      'Unlimited 24/7 gym & rig access',
      'All HIIT, Crossfit & Strength classes',
      'Monthly body composition scan',
      'Finnish sauna & cold plunge suite',
      'Dedicated personal coach check-in',
      'Free towel service & private locker',
    ],
  },
  {
    id: 'premium-plan',
    name: 'Premium Plan',
    price: 599,
    description: 'Personalized 1-on-1 coaching, custom nutritional protocols, and VIP access.',
    features: [
      'All Regular Plan benefits included',
      'Weekly 1-on-1 personal training',
      'Tailored macro & diet strategy',
      'Priority class slot reservation',
      'Private recovery lounge access',
      'Complimentary pre & post-workout shakes',
    ],
  },
];

export const TRAINERS_PROFILES: TrainerProfile[] = [
  {
    id: 'alex-rivera',
    name: 'Alex Rivera',
    role: 'Head Strength & Bodybuilding Coach',
    specialty: 'Hypertrophy & Physique Architecture',
    image: 'https://i.postimg.cc/ZnKsBZX4/gum-10.jpg',
    fallbackImage: '/assets/fitcore/trainer-1.jpg',
    experience: '10+ Years Experience',
    rating: 4.98,
    clients: 380,
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    role: 'Senior HIIT & Conditioning Specialist',
    specialty: 'Metabolic Conditioning & VO2 Max',
    image: 'https://i.postimg.cc/5NrK0hgy/gum-9.jpg',
    fallbackImage: '/assets/fitcore/trainer-2.jpg',
    experience: '8+ Years Experience',
    rating: 4.96,
    clients: 310,
  },
  {
    id: 'marcus-stone',
    name: 'Marcus Stone',
    role: 'Olympic Lifting & Power Coach',
    specialty: 'Barbell Kinematics & Strength',
    image: 'https://i.postimg.cc/5yRgXzBW/gym8.jpg',
    fallbackImage: '/assets/fitcore/trainer-3.jpg',
    experience: '12+ Years Experience',
    rating: 4.99,
    clients: 420,
  },
];
