export default function ValuesSection() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Excellence",
      description: "We maintain the highest standards in every aspect of our work, from initial planning to final delivery."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to deliver superior construction solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Client Partnership",
      description: "We build lasting relationships with our clients through transparent communication and collaborative approach."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Sustainability",
      description: "We are committed to environmentally responsible construction practices and sustainable building solutions."
    }
  ];

  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16 animate-slide-up">
          <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
            OUR VALUES
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-[var(--primary)] mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-lg text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
            Our core values guide every decision we make and every project we undertake.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 lg:p-8 text-center border-r-4 border-b-4 border-[var(--accent)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[var(--accent)] mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-[var(--primary)] mb-4">
                {value.title}
              </h3>
              <p className="text-[var(--secondary)] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
