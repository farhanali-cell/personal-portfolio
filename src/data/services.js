import {
  Layers,
  LayoutTemplate,
  Server,
  ShoppingCart,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

export const services = [
  {
    id: "full-stack",
    icon: Layers,
    title: "Full-Stack Web Development",
    description:
      "Complete web applications from database to UI, built end to end with React and Django so you get one developer for the whole product.",
    features: ["React + Django", "Auth & Roles", "Deployment Ready"],
  },
  {
    id: "frontend",
    icon: LayoutTemplate,
    title: "Frontend / UI Development",
    description:
      "Clean, modern interfaces built with React and Tailwind CSS. Pixel-careful layouts that look professional and feel smooth to use.",
    features: ["React", "Tailwind CSS", "Reusable Components"],
  },
  {
    id: "backend-api",
    icon: Server,
    title: "Backend & REST API Development",
    description:
      "Secure, well-structured REST APIs with Django and DRF, including JWT authentication, validation, and database design.",
    features: ["Django + DRF", "JWT Auth", "PostgreSQL"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Online stores with product catalog, cart, checkout, orders, and an admin panel to manage everything, ready for real customers.",
    features: ["Cart & Checkout", "Admin Panel", "Payments"],
  },
  {
    id: "booking",
    icon: CalendarCheck,
    title: "Booking & Reservation Systems",
    description:
      "Booking platforms with availability search, date-overlap checks, multi-role dashboards, and online payments for hotels, rooms, and appointments.",
    features: [
      "Availability Search",
      "Multi-Role Dashboards",
      "Stripe Payments",
    ],
  },
  {
    id: "responsive-animated",
    icon: Sparkles,
    title: "Responsive & Animated Websites",
    description:
      "Websites that work perfectly on mobile, tablet, and desktop, with smooth animations and transitions that make your brand stand out.",
    features: ["Mobile-First", "Framer Motion", "Smooth Transitions"],
  },
];
