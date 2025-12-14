"use client";

import { useState } from "react";
import {
  projects,
  projectCategories,
  getProjectsByCategory,
  type Project,
} from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setFilteredProjects(getProjectsByCategory(categoryId));
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-foreground border-2 border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <div className="text-center mb-8">
            <p className="text-lg text-text-light">
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-text-light mb-6">
                No projects found in this category.
              </p>
              <button
                onClick={() => handleCategoryChange("all")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground font-semibold rounded-full border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
