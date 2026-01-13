import Link from "next/link";
import Image from "next/image";
import { type Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block h-full">
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover w-full h-full"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Location */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center text-white text-sm">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="font-medium">{project.location}</span>
            </div>
          </div>
        </div>

        <div className="p-6 grow flex flex-col">
          <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-text-light text-sm mb-4 leading-relaxed grow line-clamp-3">
            {project.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm text-text-light">{project.date}</span>
            <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
              View Project
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
          </div>
        </div>
      </div>
    </Link>
  );
}
