import Link from "next/link";
import Image from "next/image";
import { type Project } from "../../../data/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative py-20 lg:py-32 min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="text-white/60">/</span>
              <Link
                href="/projects"
                className="text-white/80 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <span className="text-white/60">/</span>
              <span className="text-white font-medium">{project.title}</span>
            </nav>
          </div>

          <div>
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-accent text-white text-sm font-semibold px-6 py-2 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mb-12">
              {project.description}
            </p>

            {/* Key Project Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-sm text-white/70 uppercase tracking-wider mb-2">
                  Location
                </div>
                <div className="text-white font-semibold text-lg">
                  {project.location}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-sm text-white/70 uppercase tracking-wider mb-2">
                  Completed
                </div>
                <div className="text-white font-semibold text-lg">
                  {project.date}
                </div>
              </div>
              {project.details?.value && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-sm text-white/70 uppercase tracking-wider mb-2">
                    Project Value
                  </div>
                  <div className="text-white font-semibold text-lg">
                    {project.details.value}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
