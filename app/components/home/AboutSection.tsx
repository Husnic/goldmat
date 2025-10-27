export default function AboutSection() {
  return (
    <section className="py-12 lg:py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header - Full Width */}

        {/* Content with Accent Background */}
        <div className="bg-[var(--accent)] p-8 lg:p-12">
          <div className="mb-12 animate-slide-up">
            <div className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              ABOUT US
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              Building Excellence with Trusted Expertise, Precision, and
              Integrity
            </h2>
          </div>

          <div className="grid lg:flex gap-12 items-center">
            {/* Left Content - Image */}
            <div className="relative animate-slide-in-left order-2 lg:order-1 lg:w-[40%]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Engineering Excellence"
                className="w-full h-[300px] lg:h-[400px] object-cover border-r-4 border-b-4 border-white/30"
              />
            </div>

            {/* Right Content - Text */}
            <div className="animate-slide-in-right order-1 lg:order-2 lg:w-[60%]">
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                With over 15 years of experience, we deliver end-to-end
                construction solutions for residential, commercial, and civil
                projects across the nation — combining skilled craftsmanship
                with modern engineering and a client-first approach.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                    48+
                  </div>
                  <div className="text-sm text-white/80 font-medium">
                    Project Complete
                  </div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                    92%
                  </div>
                  <div className="text-sm text-white/80 font-medium">
                    Client Retention Rate
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <div>
                  <a
                    href="/about"
                    className="inline-block bg-white text-[var(--accent)] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors duration-300"
                  >
                    Learn More About Us
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
