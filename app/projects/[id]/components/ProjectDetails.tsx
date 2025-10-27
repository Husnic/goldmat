import { type Project } from '../../../data/projects';

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[var(--primary)] mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-[var(--secondary)] leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-lg text-[var(--secondary)] leading-relaxed mb-6">
                  This project represents our commitment to delivering exceptional construction and engineering solutions. 
                  Our team worked closely with the client to ensure every aspect of the project met their specific requirements 
                  while maintaining our high standards of quality and safety.
                </p>
                <p className="text-lg text-[var(--secondary)] leading-relaxed">
                  The successful completion of this project demonstrates our expertise in {project.category} construction 
                  and our ability to manage complex projects from conception to completion.
                </p>
              </div>
            </div>

            {/* Project Scope */}
            {project.details?.scope && (
              <div className="mt-12 animate-fade-in">
                <h3 className="text-2xl font-heading font-bold text-[var(--primary)] mb-6">
                  Project Scope
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.details.scope.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gray-50 border-r-4 border-b-4 border-[var(--accent)]"
                    >
                      <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="mt-12 animate-fade-in">
              <h3 className="text-2xl font-heading font-bold text-[var(--primary)] mb-6">
                Project Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-[var(--primary)] px-4 py-2 border border-gray-300 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 lg:p-8 border-r-4 border-b-4 border-[var(--accent)] animate-slide-in-right">
              <h3 className="text-2xl font-heading font-bold text-[var(--primary)] mb-6">
                Project Details
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
                    Location
                  </div>
                  <div className="text-[var(--secondary)]">{project.location}</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
                    Completion Date
                  </div>
                  <div className="text-[var(--secondary)]">{project.date}</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
                    Category
                  </div>
                  <div className="text-[var(--secondary)] capitalize">{project.category}</div>
                </div>

                {project.details?.client && (
                  <div>
                    <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
                      Client
                    </div>
                    <div className="text-[var(--secondary)]">{project.details.client}</div>
                  </div>
                )}

                {project.details?.duration && (
                  <div>
                    <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
                      Duration
                    </div>
                    <div className="text-[var(--secondary)]">{project.details.duration}</div>
                  </div>
                )}

                {project.details?.value && (
                  <div>
                    <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
                      Project Value
                    </div>
                    <div className="text-[var(--secondary)] font-semibold text-lg">{project.details.value}</div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-heading font-semibold text-[var(--primary)] mb-4">
                  Interested in Similar Work?
                </h4>
                <a href="/contact" className="btn-primary w-full text-center">
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
