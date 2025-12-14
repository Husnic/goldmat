// Re-export projects from constants
export {
  ALL_PROJECTS as projects,
  PROJECT_CATEGORIES as projectCategories,
  FEATURED_PROJECTS,
} from "../constants";

export interface Project {
  id: string;
  title: string;
  location: string;
  date: string;
  category: "commercial" | "residential" | "industrial" | "infrastructure";
  tags: string[];
  image: string;
  description: string;
  gallery?: string[];
  details?: {
    client?: string;
    duration?: string;
    value?: string;
    scope?: string[];
    challenges?: string[];
    solutions?: string[];
  };
}

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
  const { ALL_PROJECTS } = require("../constants");
  if (category === "all") return ALL_PROJECTS;
  return ALL_PROJECTS.filter(
    (project: Project) => project.category === category
  );
};

// Helper function to get featured projects (for homepage)
export const getFeaturedProjects = (limit: number = 4) => {
  const { FEATURED_PROJECTS } = require("../constants");
  return FEATURED_PROJECTS.slice(0, limit);
};
