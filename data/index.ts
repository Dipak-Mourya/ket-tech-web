export interface Project {
  id: number
  title: string
  image: string
  category: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
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
    image: "/modern-living-room.png",
    category: "Residential",
  },
  {
    id: 2,
    title: "Contemporary Kitchen",
    image: "/contemporary-kitchen.png",
    category: "Residential",
  },
  {
    id: 3,
    title: "Office Space Design",
    image: "/modern-office-interior.png",
    category: "Commercial",
  },
  {
    id: 4,
    title: "Luxury Bedroom",
    image: "/luxury-bedroom.png",
    category: "Residential",
  },
  {
    id: 5,
    title: "Restaurant Interior",
    image: "/restaurant-interior-design.png",
    category: "Commercial",
  },
  {
    id: 6,
    title: "Minimalist Bathroom",
    image: "/minimalist-bathroom.png",
    category: "Residential",
  },
  {
    id: 7,
    title: "Corporate Lobby",
    image: "/corporate-lobby-interior-design.png",
    category: "Commercial",
  },
  {
    id: 8,
    title: "Cozy Study Room",
    image: "/cozy-study-room-interior-design.png",
    category: "Residential",
  },
  {
    id: 9,
    title: "Boutique Store Design",
    image: "/boutique-store-interior-design.png",
    category: "Commercial",
  },
  {
    id: 10,
    title: "Garden Patio",
    image: "/garden-patio.png",
    category: "Outdoor",
  },
  {
    id: 11,
    title: "Hotel Suite",
    image: "/luxury-hotel-suite.png",
    category: "Hospitality",
  },
  {
    id: 12,
    title: "Cafe Interior",
    image: "/modern-cafe-interior-design.png",
    category: "Commercial",
  },
]

// Services data
export const servicesData: Service[] = [
  {
    id: 1,
    title: "Interior Design",
    description: "Complete interior design solutions for residential and commercial spaces",
    icon: "🏠",
  },
  {
    id: 2,
    title: "Architecture",
    description: "Innovative architectural designs that blend functionality with aesthetics",
    icon: "🏗️",
  },
  {
    id: 3,
    title: "Space Planning",
    description: "Optimal space utilization and layout planning for maximum efficiency",
    icon: "📐",
  },
  {
    id: 4,
    title: "3D Visualization",
    description: "Realistic 3D renders and virtual tours of your future space",
    icon: "🎨",
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
      "We offer comprehensive interior design, architecture, space planning, and 3D visualization services for both residential and commercial projects.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. Residential projects typically take 4-8 weeks, while commercial projects may take 8-16 weeks.",
  },
  {
    id: 3,
    question: "Do you provide 3D visualizations?",
    answer:
      "Yes, we provide detailed 3D visualizations and virtual tours to help you visualize your space before implementation.",
  },
  {
    id: 4,
    question: "What is your design process?",
    answer:
      "Our process includes consultation, concept development, design refinement, 3D visualization, and project implementation with regular client updates.",
  },
  {
    id: 5,
    question: "Do you handle project management?",
    answer:
      "Yes, we provide end-to-end project management including coordination with contractors, vendors, and timeline management.",
  },
]

// Statistics data
export const statisticsData: Statistic[] = [
  {
    id: 1,
    number: "500",
    label: "Projects Completed",
    suffix: "+",
  },
  {
    id: 2,
    number: "15",
    label: "Years Experience",
    suffix: "+",
  },
  {
    id: 3,
    number: "98",
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
    title: "Client Testimonial - Modern Home Design",
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Office Space Transformation Review",
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Restaurant Design Success Story",
    embedId: "dQw4w9WgXcQ",
  },
]

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
