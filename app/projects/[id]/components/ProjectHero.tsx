import Link from 'next/link';
import { type Project } from '../../../data/projects';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-6 min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${project.image}')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8 animate-slide-up">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/60">/</span>
            <Link href="/projects" className="text-white/80 hover:text-white transition-colors">
              Projects
            </Link>
            <span className="text-white/60">/</span>
            <span className="text-white">{project.title}</span>
          </nav>
        </div>

        <div className="animate-slide-up">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-[var(--accent)] text-white text-sm font-medium px-4 py-2 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Key Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center md:text-left">
              <div className="text-sm text-white/80 uppercase tracking-wider mb-1">Location</div>
              <div className="text-white font-semibold">{project.location}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-sm text-white/80 uppercase tracking-wider mb-1">Completed</div>
              <div className="text-white font-semibold">{project.date}</div>
            </div>
            {project.details?.value && (
              <div className="text-center md:text-left">
                <div className="text-sm text-white/80 uppercase tracking-wider mb-1">Project Value</div>
                <div className="text-white font-semibold">{project.details.value}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
