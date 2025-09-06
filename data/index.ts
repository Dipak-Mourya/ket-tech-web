import { Home, Building, Ruler, Paintbrush } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
}

import type { ReactNode } from "react";
import React from "react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Statistic {
  id: number;
  number: string;
  label: string;
  suffix?: string;
}

export interface ClientReview {
  id: number;
  name: string;
  project: string;
  rating: number;
  review: string;
}
interface InfoSection {
  title: string;
  content: string;
}
interface Claculatorservices {
  id: string;
  name: string;
  price: number;
}

//Cost Estimate data
export const Claculatorservices: Claculatorservices[] = [
  { id: "residential-interiors", name: "Residential Interiors", price: 60000 },
  {
    id: "office-workspace-design",
    name: "Office & Workspace Design",
    price: 75000,
  },
  {
    id: "retail-commercial-interiors",
    name: "Retail & Commercial Interiors",
    price: 80000,
  },
  {
    id: "modular-kitchens-wardrobes",
    name: "Modular Kitchens & Wardrobes",
    price: 50000,
  },
  {
    id: "3d-design-visualization",
    name: "3D Design & Visualization",
    price: 40000,
  },
  { id: "turnkey-projects", name: "Turnkey Projects", price: 100000 },
  {
    id: "renovation-remodeling",
    name: "Renovation & Remodeling",
    price: 70000,
  },
];

//Info data
export const infoSections: InfoSection[] = [
  {
    title: "Our Mission",
    content: `At Ket Design, our mission is to create interiors that go beyond aesthetics—spaces that tell stories, reflect personalities, and enhance everyday living. Since 2015, we've been passionate about balancing beauty with functionality, tradition with modernity, and creativity with comfort. We strive to deliver designs that are timeless, inspiring, and meaningful.`,
  },
  {
    title: "Our Vision",
    content: `Our vision is to craft spaces that inspire, provide comfort, and reflect unique identities. We believe great design should elevate lifestyles, evoke emotion, and stand the test of time—combining elegance, innovation, and functionality to exceed expectations.`,
  },
  {
    title: "Our Scope",
    content: `We design more than just interiors—we create purposeful, enduring spaces. From homes to offices and retail environments, every project is shaped by creativity, precision, and a deep understanding of client needs. Our turnkey solutions ensure a smooth journey from concept to completion.`,
  },
];

// Projects data
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern Living Room Design",
    image: "/projects/modern-living-room.png",
    category: "Residential",
  },
  {
    id: 2,
    title: "Contemporary Kitchen",
    image: "/projects/modern-living-room.png",
    category: "Residential",
  },
  {
    id: 3,
    title: "Office Space Design",
    image: "/projects/modern-living-room.png",
    category: "Commercial",
  },
  {
    id: 4,
    title: "Luxury Bedroom",
    image: "/projects/modern-living-room.png",
    category: "Residential",
  },
  {
    id: 5,
    title: "Restaurant Interior",
    image: "/projects/modern-living-room.png",
    category: "Commercial",
  },
  {
    id: 6,
    title: "Minimalist Bathroom",
    image: "/projects/modern-living-room.png",
    category: "Residential",
  },
  {
    id: 7,
    title: "Corporate Lobby",
    image: "/projects/modern-living-room.png",
    category: "Commercial",
  },
  {
    id: 8,
    title: "Cozy Study Room",
    image: "/projects/modern-living-room.png",
    category: "Residential",
  },
  {
    id: 9,
    title: "Boutique Store Design",
    image: "/projects/modern-living-room.png",
    category: "Commercial",
  },
  {
    id: 10,
    title: "Garden Patio",
    image: "/projects/modern-living-room.png",
    category: "Outdoor",
  },
  {
    id: 11,
    title: "Hotel Suite",
    image: "/projects/modern-living-room.png",
    category: "Hospitality",
  },
  {
    id: 12,
    title: "Cafe Interior",
    image: "/projects/modern-living-room.png",
    category: "Commercial",
  },
];

// Services data
export const servicesData: Service[] = [
  {
    id: 1,
    title: "Residential Interior Design",
    description:
      "Elegant, functional homes designed to reflect your lifestyle with comfort and style.",
    icon: React.createElement(Home, { className: "h-8 w-8 " }),
  },
  {
    id: 2,
    title: "Commercial Interior Design",
    description:
      "Modern, innovative spaces that enhance productivity and create lasting impressions.",
    icon: React.createElement(Building, { className: "h-8 w-8" }),
  },
  {
    id: 3,
    title: "3D Design & Visualization",
    description:
      "See your dream space come alive with realistic 3D concepts before execution.",
    icon: React.createElement(Ruler, { className: "h-8 w-8 " }),
  },
  {
    id: 4,
    title: "Renovation & Remodeling",
    description:
      "Transform your old interiors into fresh, timeless, and modern spaces.",
    icon: React.createElement(Paintbrush, { className: "h-8 w-8 " }),
  },
];

// Testimonials data
export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    company: "Private Client",
    content:
      "KET Design transformed our home into a beautiful, functional space. Their attention to detail is exceptional.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    company: "Tech Startup",
    content:
      "The office design exceeded our expectations. It's both modern and conducive to productivity.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Restaurant Owner",
    company: "Fine Dining",
    content:
      "Our restaurant's interior design has received countless compliments from customers. Excellent work!",
    rating: 5,
    image: "/professional-woman-chef.png",
  },
];

// FAQ data
export const faqData: FAQ[] = [
  {
    id: 1,
    question: "What services does KET Design offer?",
    answer:
      "We provide complete Architectural and Interior Design solutions for residential, commercial, and office spaces. Our services include space planning, 3D design, material selection, project execution support, and consultancy.",
  },
  {
    id: 2,
    question: "Where is KET Design located?",
    answer:
      "KET Design is headquartered in Kolkata, and we handle projects across different cities in India.",
  },
  {
    id: 3,
    question: "How does KET Design charge for its services?",
    answer:
      "Unlike percentage-based fees, KET Design offers fixed design packages, ensuring cost transparency and flexibility. This allows clients to choose the package that best fits their budget.",
  },
  {
    id: 4,
    question: "Can I work with my own vendors and contractors?",
    answer:
      "Yes, you are free to choose vendors you already know. We also provide quotations from multiple trusted vendors, and our team ensures smooth coordination and execution with the vendor of your choice.",
  },
  {
    id: 5,
    question: "Does KET Design provide on-site support?",
    answer:
      "Absolutely. Our site representatives visit the project location as per requirements to ensure that the execution is progressing according to the approved design.",
  },
  {
    id: 6,
    question: "How experienced is the KET Design team?",
    answer:
      "Since our establishment in 2015, our team of qualified designers and experts has successfully handled numerous projects, delivering creative, practical, and high-quality designs tailored to each client’s lifestyle.",
  },
  {
    id: 7,
    question: "What are KET Design’s office hours?",
    answer:
      "We operate from Monday to Saturday, 9:30 a.m. to 7:30 p.m., ensuring our clients always receive personal attention and prompt communication.",
  },
];

// Statistics data
export const statisticsData: Statistic[] = [
  {
    id: 1,
    number: "457",
    label: "Projects Completed",
    suffix: "+",
  },
  {
    id: 2,
    number: "8",
    label: "Years Experience",
    suffix: "+",
  },
  {
    id: 3,
    number: "95",
    label: "Client Satisfaction",
    suffix: "%",
  },
  {
    id: 4,
    number: "50",
    label: "Team Members",
    suffix: "+",
  },
];

// Client reviews data for projects page
export const clientReviewsData: ClientReview[] = [
  {
    id: 1,
    name: "Punam Das",
    project: "Home Interior",
    rating: 5,
    review:
      "The designers transformed our house into a dream home. Every corner reflects our taste, yet feels more stylish than we imagined.",
  },
  {
    id: 2,
    name: "Samir Bairagi",
    project: "Full Home Interiors",
    rating: 5,
    review:
      "Very well experience... super happy with the interiors done by this company... totally worth it.",
  },
  {
    id: 3,
    name: "Chiranjit Gure",
    project: "Apartment Design",
    rating: 5,
    review:
      "Outstanding service and beautiful execution. Highly satisfied with their work.",
  },
  {
    id: 4,
    name: "Jayanti Panda",
    project: "Home Renovation",
    rating: 5,
    review: "Amazing team, flawless execution & on-time delivery.",
  },
  {
    id: 5,
    name: "Pritish Sen",
    project: "Custom Interiors",
    rating: 5,
    review: "Very nice work 👌👌👷👷",
  },
  {
    id: 6,
    name: "Anushree Das",
    project: "Modular Kitchen & Wardrobe",
    rating: 5,
    review: "Loved the quality and finish. They really care about the details.",
  },
  {
    id: 7,
    name: "Akash Seal",
    project: "Complete Home Interior",
    rating: 5,
    review:
      "Professional and creative! Highly recommend for full house interiors.",
  },
];

// YouTube videos data
export const youtubeVideosData = [
  {
    id: 1,
    title: "Apartment Interior Design",
    embedId: "xVrluLbMfq0",
  },
  {
    id: 2,
    title: "Flat Interior Design at Airport Residency",
    embedId: "ZgCC3swp2bA",
  },
  {
    id: 3,
    title: "Apartment Interior Design",
    embedId: "vZAVxdOwljQ",
  },
];

// Company information
export const companyInfo = {
  name: "KET Design",
  tagline: "Best Interior Designers in Kolkata",
  description:
    "Experience the highest level of transparency in interior design, with complete peace of mind. Professional interior design services in Kolkata.",
  phone: "+91 98765 43210",
  email: "info@ketdesign.com",
  address: "123 Design Street, Kolkata, West Bengal 700001",
  whatsapp: "+919876543210",
  social: {
    facebook: "https://facebook.com/ketdesign",
    instagram: "https://instagram.com/ketdesign",
    linkedin: "https://linkedin.com/company/ketdesign",
    youtube: "https://youtube.com/ketdesign",
  },
};

export const services = [
  "Residential Interior Design",
  "Commercial & Office Spaces",
  "Modular Kitchens & Wardrobes",
  "3D Design & Visualization",
  "Turnkey Project Solutions",
  "Space Planning & Consultation",
];

export const futureGoals = [
  "Expand across major Indian cities",
  "Integrate smart & sustainable designs",
  "Enhance turnkey project solutions",
  "Innovate with VR & advanced 3D technology",
  "Create landmark signature projects",
  "Strengthen long-term client relationships",
];
