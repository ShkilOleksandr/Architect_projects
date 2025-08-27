// data.ts (dummy data)
import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "p1",
    name: "Book & Dock",
    description: "Admin panel for bookings",
    imageUrl: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
    href: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
  },
  {
    id: "p2",
    name: "EmotionNet",
    description: "Facial emotion recognition",
    imageUrl: "https://img.freepik.com/free-photo/cityscape-sunset-skyin-bangkok-thailand_1150-10829.jpg?semt=ais_hybrid&w=740&q=80",
    href: "https://img.freepik.com/free-photo/cityscape-sunset-skyin-bangkok-thailand_1150-10829.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "p3",
    name: "Poster Scheduler",
    description: "Timed media rotation",
    imageUrl: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
    href: "https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
  },
];
export const getProjectById = (id) => projects.find(p => p.id === id);