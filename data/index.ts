import { Home, Building, Ruler, Paintbrush } from "lucide-react";

export interface Project {
  id: number
  title: string
  image: string
  category: string
}

import type { ReactNode } from "react";
import React from "react";

export interface Service {
  id: number
  title: string
  description: string
  icon: ReactNode
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface Statistic {
  id: number
  number: string
  label: string
  suffix?: string
}

export interface ClientReview {
  id: number
  name: string
  project: string
  rating: number
  review: string
  image: string
}

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
]

// Services data
export const servicesData: Service[] = [
  {
    id: 1,
    title: "Residential Interior Design",
    description: "Elegant, functional homes designed to reflect your lifestyle with comfort and style.",
    icon: React.createElement(Home, { className: "h-8 w-8 " }),
  },
  {
    id: 2,
    title: "Commercial Interior Design",
    description: "Modern, innovative spaces that enhance productivity and create lasting impressions.",
    icon: React.createElement(Building, { className: "h-8 w-8" }),
  },
  {
    id: 3,
    title: "3D Design & Visualization",
    description: "See your dream space come alive with realistic 3D concepts before execution.",
    icon: React.createElement(Ruler, { className: "h-8 w-8 " }),
  },
  {
    id: 4,
    title: "Renovation & Remodeling",
    description: "Transform your old interiors into fresh, timeless, and modern spaces.",
    icon:React.createElement(Paintbrush, { className: "h-8 w-8 " }),
  },
]

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
    content: "The office design exceeded our expectations. It's both modern and conducive to productivity.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Restaurant Owner",
    company: "Fine Dining",
    content: "Our restaurant's interior design has received countless compliments from customers. Excellent work!",
    rating: 5,
    image: "/professional-woman-chef.png",
  },
]

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
]

// Client reviews data for projects page
export const clientReviewsData: ClientReview[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    project: "Luxury Villa Interior",
    rating: 5,
    review:
      "KET Design exceeded our expectations with their innovative approach and attention to detail. Our villa looks absolutely stunning!",
    image: "/indian-man-portrait.png",
  },
  {
    id: 2,
    name: "Priya Sharma",
    project: "Modern Apartment Design",
    rating: 5,
    review:
      "Professional team with excellent communication. They understood our vision perfectly and delivered beyond our dreams.",
    image: "/indian-woman-portrait.png",
  },
  {
    id: 3,
    name: "Amit Patel",
    project: "Office Space Renovation",
    rating: 5,
    review:
      "The office transformation has boosted our team's productivity. KET Design's space planning is exceptional.",
    image: "/indian-businessman-portrait.png",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    project: "Restaurant Interior",
    rating: 5,
    review: "Our restaurant's ambiance has attracted more customers. The design perfectly captures our brand essence.",
    image: "/indian-woman-business-owner-portrait.png",
  },
  {
    id: 5,
    name: "Vikram Singh",
    project: "Penthouse Design",
    rating: 5,
    review: "Luxury redefined! KET Design created a masterpiece that reflects our lifestyle perfectly.",
    image: "/indian-man-executive-portrait.png",
  },
  {
    id: 6,
    name: "Kavya Reddy",
    project: "Boutique Store Design",
    rating: 5,
    review: "The store design has significantly improved our sales. Customers love the aesthetic and functionality.",
    image: "/indian-woman-entrepreneur-portrait.png",
  },
]

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
}
