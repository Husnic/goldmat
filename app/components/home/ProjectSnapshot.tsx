import Link from "next/link";
import Image from "next/image";
import { FEATURED_PROJECTS } from "@/app/constants";

export default function ProjectSnapshot() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full mb-4">
              <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Explore some of our most impactful work across various sectors
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-heading font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/90">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <p className="text-sm text-text-light mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-light">
                      <span>{project.role}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
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
