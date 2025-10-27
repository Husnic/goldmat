import ProjectsFilter from "./components/ProjectsFilter";
import ProjectsHero from "./components/ProjectsHero";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectsHero />
      <ProjectsFilter />
    </div>
  );
}
