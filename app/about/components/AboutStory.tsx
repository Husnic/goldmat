export default function AboutStory() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full mb-4">
                <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                From Vision to Reality
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-text-light leading-relaxed">
                <p>
                  Founded in 2008, Goldmat Construction began with a simple yet
                  powerful vision: to transform the construction industry
                  through innovative engineering solutions and uncompromising
                  quality standards.
                </p>
                <p>
                  Over the past 15+ years, we have grown from a small team of
                  dedicated engineers to a comprehensive construction and
                  engineering firm, completing over 200 projects across
                  residential, commercial, and industrial sectors.
                </p>
                <p>
                  Our success is built on three fundamental pillars: technical
                  excellence, client satisfaction, and sustainable building
                  practices. Every project we undertake reflects our commitment
                  to these core values.
                </p>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-8 text-center rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                    22+
                  </div>
                  <div className="text-text-light font-medium">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-gray-50 p-8 text-center rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-text-light font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="bg-gray-50 p-8 text-center rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                    99%
                  </div>
                  <div className="text-text-light font-medium">
                    Client Satisfaction
                  </div>
                </div>
                <div className="bg-gray-50 p-8 text-center rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-text-light font-medium">
                    Team Members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
