import Link from "next/link";
import { type Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full self-stretch"
    >
      <div
        className="bg-white overflow-hidden border-r-4 border-b-4 border-[var(--accent)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all duration-300 animate-fade-in h-full flex flex-col h-full"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 lg:h-56 object-cover"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-[var(--accent)] text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          {/* Tags overlay */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-white text-[var(--primary)] text-xs font-medium px-3 py-1 border border-gray-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && (
              <span className="bg-white text-[var(--primary)] text-xs font-medium px-3 py-1 border border-gray-300">
                +{project.tags.length - 2}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-heading font-semibold text-[var(--primary)] mb-2">
            {project.title}
          </h3>
          <p className="text-[var(--secondary)] text-sm mb-4 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="flex items-center justify-between text-sm text-[var(--secondary)]">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>{project.location}</span>
            </div>
            <span>{project.date}</span>
          </div>

          {/* Project Details */}
          {project.details && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {project.details.value && (
                  <div>
                    <div className="text-[var(--secondary)] font-medium">
                      Value
                    </div>
                    <div className="text-[var(--primary)] font-semibold">
                      {project.details.value}
                    </div>
                  </div>
                )}
                {project.details.duration && (
                  <div>
                    <div className="text-[var(--secondary)] font-medium">
                      Duration
                    </div>
                    <div className="text-[var(--primary)] font-semibold">
                      {project.details.duration}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
