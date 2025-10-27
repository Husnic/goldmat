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
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 lg:mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[var(--primary)] mb-6">
            Similar Projects
          </h2>
          <p className="text-lg text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
            Explore more of our {currentProject.category} construction projects
            and see the quality of our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {similarProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-8 lg:mt-16 animate-slide-up">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
