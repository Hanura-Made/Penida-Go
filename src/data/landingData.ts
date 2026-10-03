export interface RouteItem {
  id: string;
  from: string;
  to: string;
  price: string;
  rawPrice: number;
  duration: string;
  image: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ReviewItem {
  name: string;
  origin: string;
  date: string;
  rating: number;
  review: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_INFO = {
  name: 'Penida-Go',
  tagline: 'Bali & Nusa Penida Private Transfer',
  phone: '+62895623170470',
  whatsappUrl: 'https://wa.me/62895623170470?text=Halo%20Penida-Go,%20saya%20ingin%20booking%20transfer',
  domain: 'https://penidago.com',
  address: 'Sanur Port Harbor, Denpasar & Toya Pakeh Harbor, Nusa Penida, Bali, Indonesia'
};

export const TRUST_BADGES = [
  { icon: 'user-check', title: 'Local Driver', subtitle: 'Friendly & experienced' },
  { icon: 'shield-check', title: 'Fixed Price', subtitle: 'No hidden costs' },
  { icon: 'message-circle', title: 'Easy Booking', subtitle: 'Via WhatsApp' },
  { icon: 'calendar', title: 'Available Daily', subtitle: 'Bali & Nusa Penida' }
];

export const POPULAR_ROUTES: RouteItem[] = [
  {
    id: 'sanur-penida',
    from: 'Sanur',
    to: 'Nusa Penida',
    price: 'Rp 350.000',
    rawPrice: 350000,
    duration: '45 mins (Fast Boat)',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    alt: 'Fast boat transfer Sanur to Nusa Penida Bali'
  },
  {
    id: 'airport-sanur',
    from: 'Airport (DPS)',
    to: 'Sanur Port',
    price: 'Rp 150.000',
    rawPrice: 150000,
    duration: '35 mins (Car Transfer)',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80',
    alt: 'Airport private transfer Ngurah Rai to Sanur harbor'
  },
  {
    id: 'ubud-sanur',
    from: 'Ubud',
    to: 'Sanur Port',
    price: 'Rp 250.000',
    rawPrice: 250000,
    duration: '45 mins (Car Transfer)',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
    alt: 'Private transport Ubud to Sanur fast boat terminal'
  },
  {
    id: 'penida-island',
    from: 'Nusa Penida',
    to: 'Penida Island Tour',
    price: 'Rp 300.000',
    rawPrice: 300000,
    duration: 'Day Tour (Car + Driver)',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    alt: 'Sewa mobil Nusa Penida private tour transfer'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'private-transfer',
    title: 'Private Transfer',
    description: 'Airport, hotel, port, and various island locations in Bali.',
    icon: 'car'
  },
  {
    id: 'port-transfer',
    title: 'Port Transfer',
    description: 'Sanur ↔ Nusa Penida and vice versa fast boat & shuttle connection.',
    icon: 'ship'
  },
  {
    id: 'penida-trip',
    title: 'Nusa Penida Trip',
    description: 'Explore the best spots (Kelingking, Broken Beach) with private transport.',
    icon: 'compass'
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    description: 'Ngurah Rai Airport ↔ Hotel / Port / Destination with flight tracking.',
    icon: 'plane'
  },
  {
    id: 'custom-trip',
    title: 'Custom Trip',
    description: 'Tailored itineraries crafted according to your personal travel needs.',
    icon: 'map-pin'
  }
];

export const HOW_IT_WORKS: StepItem[] = [
  {
    number: '01',
    title: 'Choose Your Route',
    description: 'Select your pickup and drop-off destination in Bali or Nusa Penida.',
    icon: 'map'
  },
  {
    number: '02',
    title: 'Confirm Your Booking',
    description: 'Send your trip details through WhatsApp for instant confirmation.',
    icon: 'message-circle'
  },
  {
    number: '03',
    title: 'Meet Your Driver',
    description: 'Your local driver greets you on time at the agreed pickup point.',
    icon: 'user-check'
  }
];

export const PRICING_LIST = [
  { route: 'Sanur ➔ Nusa Penida (Fast Boat)', startingFrom: 'Rp 350.000' },
  { route: 'Airport (DPS) ➔ Sanur Port', startingFrom: 'Rp 150.000' },
  { route: 'Ubud ➔ Sanur Port', startingFrom: 'Rp 250.000' },
  { route: 'Kuta / Seminyak ➔ Sanur Port', startingFrom: 'Rp 180.000' },
  { route: 'Nusa Penida West Tour (Full Day)', startingFrom: 'Rp 550.000' },
  { route: 'Nusa Penida East Tour (Full Day)', startingFrom: 'Rp 600.000' },
  { route: 'Nusa Penida Port Shuttle Transfer', startingFrom: 'Rp 300.000' }
];

export const TRUST_PILLARS = [
  {
    icon: 'map-pin',
    title: 'Local Drivers',
    description: 'Know the fastest routes and scenic spots across Bali & Nusa Penida.'
  },
  {
    icon: 'shield-check',
    title: 'Transparent Pricing',
    description: 'All-inclusive quotes upfront. Absolutely no surprise fees or tourist traps.'
  },
  {
    icon: 'message-circle',
    title: 'Easy Booking',
    description: 'Quick reservation in under 2 minutes directly on WhatsApp.'
  },
  {
    icon: 'clock',
    title: '24/7 Support',
    description: "Real humans ready to assist your arrival, ferry schedules, and delays."
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    name: 'Sarah L.',
    origin: 'Australia',
    date: 'May 2026',
    rating: 5,
    review: 'Amazing service! The driver was on time, friendly, and very helpful with our luggage. Highly recommended for Nusa Penida trip!'
  },
  {
    name: 'James T.',
    origin: 'United Kingdom',
    date: 'Apr 2026',
    rating: 5,
    review: 'Smooth trip from Sanur to Nusa Penida. Clean car and great communication over WhatsApp. Will definitely use again!'
  },
  {
    name: 'Maria S.',
    origin: 'Germany',
    date: 'Mar 2026',
    rating: 5,
    review: 'Very professional and reliable. Made our trip so much easier and stress-free. Thank you Penida-Go team!'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Can I book a transfer last minute?',
    answer: 'Yes! We accommodate same-day and last-minute requests depending on driver and boat availability. Simply message our WhatsApp support for real-time dispatch.'
  },
  {
    question: 'Do you provide hotel pickup and drop-off?',
    answer: 'Absolutely. We offer door-to-door private transfers from all popular areas including Kuta, Seminyak, Canggu, Ubud, Jimbaran, and Nusa Dua directly to Sanur Port or around Nusa Penida.'
  },
  {
    question: 'Can I book a private vehicle for the entire day?',
    answer: 'Yes, our Nusa Penida and Bali Day Tours include a private air-conditioned vehicle, professional local driver, and petrol for 8-10 hours.'
  },
  {
    question: 'How do I pay for my transfer?',
    answer: 'We accept cash on arrival (IDR), Indonesian bank transfers (BCA/Mandiri), and QRIS. No credit card pre-authorization hassle required.'
  },
  {
    question: 'Can I change or reschedule my booking?',
    answer: 'Free rescheduling is available up to 12 hours prior to your scheduled pickup time. Just inform our team via WhatsApp.'
  }
];
