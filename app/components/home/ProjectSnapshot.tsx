import Link from "next/link";
import { getFeaturedProjects } from "../../data/projects";

export default function ProjectSnapshot() {
  const projects = getFeaturedProjects(4);

  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 lg:mb-16 animate-slide-up">
          <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
            PORTFOLIO
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-[var(--primary)] mb-4 lg:mb-6">
            Explore some of our most impactful work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group"
            >
              <div className="bg-white overflow-hidden hover:transform hover:translate-x-1 hover:translate-y-1 transition-all duration-300 animate-fade-in border-r-4 border-b-4 border-[var(--accent)]">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 lg:h-64 object-cover"
                  />
                  {/* Tags overlay */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white text-[var(--primary)] text-xs font-medium px-3 py-1 border border-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-heading font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-[var(--secondary)]">
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-16 animate-slide-up">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
