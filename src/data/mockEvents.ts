
export type EventType = 'hackathon' | 'tech-talk' | 'workshop';

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  college: string;
  eventType: EventType;
  link: string;
}

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'AI Innovation Hackathon',
    description: 'A 24-hour hackathon focused on developing innovative AI solutions for real-world problems. Open to all skill levels.',
    date: '2025-06-15',
    time: '10:00 AM - 10:00 AM (Next day)',
    location: 'Computer Science Building, Room 105',
    college: 'Stanford University',
    eventType: 'hackathon',
    link: 'https://example.com/ai-hackathon'
  },
  {
    id: '2',
    name: 'Blockchain Technology Workshop',
    description: 'Learn the fundamentals of blockchain technology and build your first smart contract in this hands-on workshop.',
    date: '2025-05-22',
    time: '2:00 PM - 5:00 PM',
    location: 'Engineering Hall, Room 220',
    college: 'MIT',
    eventType: 'workshop',
    link: 'https://example.com/blockchain-workshop'
  },
  {
    id: '3',
    name: 'Future of Quantum Computing',
    description: 'Join Dr. Sarah Johnson for an exciting talk on the future of quantum computing and its implications for cybersecurity.',
    date: '2025-05-10',
    time: '4:00 PM - 5:30 PM',
    location: 'Physics Building, Auditorium',
    college: 'Caltech',
    eventType: 'tech-talk',
    link: 'https://example.com/quantum-talk'
  },
  {
    id: '4',
    name: 'Mobile App Development Bootcamp',
    description: 'A weekend bootcamp covering the essentials of mobile app development using React Native. Bring your laptops!',
    date: '2025-05-25',
    time: '9:00 AM - 4:00 PM',
    location: 'Innovation Center, Floor 3',
    college: 'UC Berkeley',
    eventType: 'workshop',
    link: 'https://example.com/mobile-bootcamp'
  },
  {
    id: '5',
    name: 'Women in Tech Symposium',
    description: 'A symposium featuring talks from leading women in the tech industry sharing their experiences and insights.',
    date: '2025-06-05',
    time: '1:00 PM - 6:00 PM',
    location: 'Student Union, Grand Hall',
    college: 'Harvard University',
    eventType: 'tech-talk',
    link: 'https://example.com/women-in-tech'
  },
  {
    id: '6',
    name: 'Cybersecurity Challenge',
    description: 'Test your cybersecurity skills in this competitive challenge with prizes for the top performers.',
    date: '2025-06-10',
    time: '6:00 PM - 9:00 PM',
    location: 'Computer Lab, Building B',
    college: 'Carnegie Mellon University',
    eventType: 'hackathon',
    link: 'https://example.com/cyber-challenge'
  },
  {
    id: '7',
    name: 'Data Science for Beginners',
    description: 'An introductory workshop on data science concepts and tools, including Python and basic machine learning.',
    date: '2025-05-18',
    time: '10:00 AM - 3:00 PM',
    location: 'Statistics Department, Room 302',
    college: 'Princeton University',
    eventType: 'workshop',
    link: 'https://example.com/data-science-workshop'
  },
  {
    id: '8',
    name: 'Tech Startup Pitch Night',
    description: 'Watch student entrepreneurs pitch their tech startup ideas to a panel of industry judges.',
    date: '2025-06-20',
    time: '7:00 PM - 9:30 PM',
    location: 'Business School Auditorium',
    college: 'Yale University',
    eventType: 'tech-talk',
    link: 'https://example.com/pitch-night'
  }
];
