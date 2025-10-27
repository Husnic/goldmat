export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-[var(--accent)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: "Building Renovation",
      description: "Consectetur Phasellus a odio vel sapien pharetra placerat.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[var(--accent)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Chemical Research",
      description: "Consectetur Phasellus a odio vel sapien pharetra placerat.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[var(--accent)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Best Engineering",
      description: "Consectetur Phasellus a odio vel sapien pharetra placerat.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[var(--accent)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
      title: "Smart Technology",
      description: "Consectetur Phasellus a odio vel sapien pharetra placerat.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="services" className="py-12 lg:py-20 px-4 lg:px-6 bg-blue-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header - Left Aligned */}
        <div className="mb-8 lg:mb-12 animate-slide-up flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
              QUALITY SERVICES
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-[var(--primary)] mb-2 lg:mb-4">
              Offering A Comprehensive
            </h2>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-[var(--primary)]">
              Range Of Solutions.
            </h3>
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden lg:flex space-x-4">
            <button className="w-12 h-12 bg-[var(--accent)] flex items-center justify-center hover:bg-[var(--accent)]/80 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-12 h-12 bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden hover:transform hover:scale-105 transition-all duration-300 animate-fade-in border-r-4 border-b-4 border-[var(--accent)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-40 lg:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Icon Overlay */}
                <div className="absolute top-3 lg:top-4 left-3 lg:left-4 w-10 lg:w-12 h-10 lg:h-12 bg-white flex items-center justify-center border-2 border-[var(--accent)]">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-heading font-semibold text-[var(--primary)] mb-2 lg:mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--secondary)] leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
