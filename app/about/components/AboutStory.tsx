export default function AboutStory() {
  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
              OUR STORY
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-[var(--primary)] mb-6">
              From Vision to Reality
            </h2>
            <div className="space-y-6 text-lg text-[var(--secondary)] leading-relaxed">
              <p>
                Founded in 2008, Goldmat Construction began with a simple yet powerful vision: 
                to transform the construction industry through innovative engineering solutions 
                and uncompromising quality standards.
              </p>
              <p>
                Over the past 15+ years, we have grown from a small team of dedicated engineers 
                to a comprehensive construction and engineering firm, completing over 200 projects 
                across residential, commercial, and industrial sectors.
              </p>
              <p>
                Our success is built on three fundamental pillars: technical excellence, 
                client satisfaction, and sustainable building practices. Every project we undertake 
                reflects our commitment to these core values.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 lg:p-8 text-center border-r-4 border-b-4 border-[var(--accent)]">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-[var(--primary)] mb-2">
                  200+
                </div>
                <div className="text-[var(--secondary)] font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="bg-gray-50 p-6 lg:p-8 text-center border-r-4 border-b-4 border-[var(--accent)]">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-[var(--primary)] mb-2">
                  15+
                </div>
                <div className="text-[var(--secondary)] font-medium">
                  Years Experience
                </div>
              </div>
              <div className="bg-gray-50 p-6 lg:p-8 text-center border-r-4 border-b-4 border-[var(--accent)]">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-[var(--primary)] mb-2">
                  95%
                </div>
                <div className="text-[var(--secondary)] font-medium">
                  Client Satisfaction
                </div>
              </div>
              <div className="bg-gray-50 p-6 lg:p-8 text-center border-r-4 border-b-4 border-[var(--accent)]">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-[var(--primary)] mb-2">
                  50+
                </div>
                <div className="text-[var(--secondary)] font-medium">
                  Team Members
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
