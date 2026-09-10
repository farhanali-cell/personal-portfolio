import voltrixDesktop from "../assets/projects/voltrix-desktop.png";
import voltrixTablet from "../assets/projects/voltrix-tablet.png";
import voltrixMobile from "../assets/projects/voltrix-mobile.png";

import aureliaDesktop from "../assets/projects/aurelia-desktop.png";
import aureliaTablet from "../assets/projects/aurelia-tablet.png";
import aureliaMobile from "../assets/projects/aurelia-mobile.png";

import mapperDesktop from "../assets/projects/mapper-desktop.png";
import mapperTablet from "../assets/projects/mapper-tablet.png";
import mapperMobile from "../assets/projects/mapper-mobile.png";

import truthlensDesktop from "../assets/projects/truthlens-desktop.png";
import truthlensTablet from "../assets/projects/truthlens-tablet.png";
import truthlensMobile from "../assets/projects/truthlens-mobile.png";

export const projects = [
  {
    id: 1,
    title: "Voltrix — Electronics Marketplace",
    description:
      "Full-featured e-commerce platform with customer, seller, and admin roles — product catalog, cart, Stripe checkout, order tracking, reviews, coupons, and seller/admin dashboards.",
    tags: ["React", "Django REST", "PostgreSQL", "Stripe", "Tailwind"],
    github: "https://github.com/farhanali-cell",
    live: "https://voltrix-frontend-eight.vercel.app",
    images: {
      desktop: voltrixDesktop,
      tablet: voltrixTablet,
      mobile: voltrixMobile,
    },
  },
  {
    id: 2,
    title: "Aurelia Stays — Hotel Booking System",
    description:
      "End-to-end hotel booking platform with room browsing, Stripe-powered payments, booking confirmation, and a reviews system tied to verified bookings.",
    tags: ["React", "Django REST", "JWT", "Stripe", "Framer Motion"],
    github: "https://github.com/farhanali-cell",
    live: "ttps://aurelia-stays.vercel.app",
    images: {
      desktop: aureliaDesktop,
      tablet: aureliaTablet,
      mobile: aureliaMobile,
    },
  },
  {
    id: 3,
    title: "Hyperlocal Problem Mapper",
    description:
      "AI-powered civic complaint platform for Pakistani cities — citizens report issues, complaints are clustered with DBSCAN, and admins track resolutions on a live map dashboard.",
    tags: ["React", "Django REST", "PostgreSQL", "Scikit-learn", "Celery"],
    github: "https://github.com/farhanali-cell",
    live: "https://hyperlocal-mapper-frontend.vercel.app",
    images: {
      desktop: mapperDesktop,
      tablet: mapperTablet,
      mobile: mapperMobile,
    },
  },
  {
    id: 4,
    title: "TruthLens — Fake News Detection (FYP)",
    description:
      "Final year project using ML/NLP to classify news as real or fake with confidence scoring — supports English and Urdu, with keyword-based explainability.",
    tags: ["React", "Django REST", "Scikit-learn", "NLP", "PostgreSQL"],
    github: "https://github.com/farhanali-cell",
    live: "https://fake-news-detection-eight-mu.vercel.app",
    images: {
      desktop: truthlensDesktop,
      tablet: truthlensTablet,
      mobile: truthlensMobile,
    },
  },
];
