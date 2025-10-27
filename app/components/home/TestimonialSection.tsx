export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Goldmat Construction delivered exceptional results on our commercial complex. Their attention to detail and commitment to deadlines was outstanding.",
      author: "Sarah Johnson",
      position: "Project Manager",
      company: "Victoria Development Corp",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "The structural engineering expertise they provided for our industrial facility exceeded all expectations. Professional, reliable, and innovative.",
      author: "Michael Chen",
      position: "Operations Director",
      company: "Industrial Solutions Ltd",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "From foundation to completion, Goldmat's team demonstrated unmatched technical excellence and project management skills.",
      author: "Emily Rodriguez",
      position: "Development Lead",
      company: "Urban Properties Inc",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16 animate-slide-up">
          <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-[var(--primary)] mb-4 lg:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
            Hear from the clients who trust us with their most important
            construction and engineering projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8 border-r-4 border-b-4 border-[var(--accent)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-[var(--accent)] mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
                <p className="text-[var(--secondary)] leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 object-cover border-2 border-gray-200"
                />
                <div>
                  <div className="font-semibold text-[var(--primary)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--secondary)]">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-[var(--accent)] font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
