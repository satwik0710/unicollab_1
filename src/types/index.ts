export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  department: string;
  year: string;
  bio?: string;
  skills: string[];
  portfolio: PortfolioItem[];
  verified: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
    department: string;
  };
  department: string;
  type: "capstone" | "startup" | "research" | "hackathon" | "club" | "other";
  skills: string[];
  openRoles: string[];
  deadline?: string;
  applicants: number;
  createdAt: string;
  status: "open" | "in-progress" | "closed";
}

export interface Application {
  id: string;
  projectId: string;
  userId: string;
  message: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
}
