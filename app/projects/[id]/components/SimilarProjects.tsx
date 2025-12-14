import Link from "next/link";
import { projects, type Project } from "../../../data/projects";
import ProjectCard from "../../components/ProjectCard";

interface SimilarProjectsProps {
  currentProject: Project;
}

export default function SimilarProjects({
  currentProject,
}: SimilarProjectsProps) {
  // Get similar projects from the same category, excluding the current project
  const similarProjects = projects
    .filter(
      (project) =>
        project.category === currentProject.category &&
        project.id !== currentProject.id
    )
    .slice(0, 3);

  // If not enough similar projects in the same category, fill with other projects
  if (similarProjects.length < 3) {
    const additionalProjects = projects
      .filter(
        (project) =>
          project.id !== currentProject.id &&
          !similarProjects.some((sp) => sp.id === project.id)
      )
      .slice(0, 3 - similarProjects.length);

    similarProjects.push(...additionalProjects);
  }

  if (similarProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full mb-4">
              <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
                Related Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Similar Projects
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              Explore more of our {currentProject.category} construction
              projects and see the quality of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {similarProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground font-semibold rounded-full border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              View All Projects
              <span className="ml-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="w-4 h-4 text-white group-hover:text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
