import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import ProjectHero from "./components/ProjectHero";
import ProjectDetails from "./components/ProjectDetails";
import ProjectGallery from "./components/ProjectGallery";
import SimilarProjects from "./components/SimilarProjects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <ProjectGallery project={project} />
      <SimilarProjects currentProject={project} />
    </div>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Goldmat Construction`,
    description: project.description,
  };
}
