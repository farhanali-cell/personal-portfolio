import { Code2, Server, Database, Wrench, Palette } from "lucide-react";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Django", level: 85 },
      { name: "Django REST Framework", level: 82 },
      { name: "Python", level: 88 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Auth", level: 78 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "SQLite", level: 85 },
      { name: "Database Design", level: 78 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "Vite", level: 85 },
    ],
  },
  {
    id: "design",
    title: "Design",
    icon: Palette,
    skills: [
      { name: "UI/UX Principles", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Responsive Design", level: 90 },
    ],
  },
];
