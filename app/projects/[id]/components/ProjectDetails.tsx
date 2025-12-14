import { type Project } from "../../../data/projects";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                  Project Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-text-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-lg text-text-light leading-relaxed mb-6">
                    This project represents our commitment to delivering
                    exceptional construction and engineering solutions. Our team
                    worked closely with the client to ensure every aspect of the
                    project met their specific requirements while maintaining
                    our high standards of quality and safety.
                  </p>
                  <p className="text-lg text-text-light leading-relaxed">
                    The successful completion of this project demonstrates our
                    expertise in {project.category} construction and our ability
                    to manage complex projects from conception to completion.
                  </p>
                </div>
              </div>

              {/* Project Scope */}
              {project.details?.scope && (
                <div className="mt-12">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Project Scope
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.details.scope.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-accent"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-text-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mt-12">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Project Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-3xl sticky top-24">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Project Details
                </h3>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200">
                    <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Location
                    </div>
                    <div className="text-text-light">{project.location}</div>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Completion Date
                    </div>
                    <div className="text-text-light">{project.date}</div>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Category
                    </div>
                    <div className="text-text-light capitalize">
                      {project.category}
                    </div>
                  </div>

                  {project.details?.client && (
                    <div className="pb-6 border-b border-gray-200">
                      <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                        Client
                      </div>
                      <div className="text-text-light">
                        {project.details.client}
                      </div>
                    </div>
                  )}

                  {project.details?.duration && (
                    <div className="pb-6 border-b border-gray-200">
                      <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                        Duration
                      </div>
                      <div className="text-text-light">
                        {project.details.duration}
                      </div>
                    </div>
                  )}

                  {project.details?.value && (
                    <div className="pb-6 border-b border-gray-200">
                      <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                        Project Value
                      </div>
                      <div className="text-foreground font-semibold text-lg">
                        {project.details.value}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                    Interested in Similar Work?
                  </h4>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Start Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
