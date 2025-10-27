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
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 font-medium transition-all duration-300 border-2 ${
                activeCategory === category.id
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "bg-white text-[var(--primary)] border-gray-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-lg text-[var(--secondary)]">
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
            <p className="text-xl text-[var(--secondary)] mb-4">
              No projects found in this category.
            </p>
            <button
              onClick={() => handleCategoryChange("all")}
              className="btn-primary"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
