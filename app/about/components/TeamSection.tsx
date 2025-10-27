export default function TeamSection() {
  const team = [
    {
      name: "David Martinez",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "With over 20 years in construction and engineering, David leads our vision for innovative building solutions."
    },
    {
      name: "Sarah Chen",
      position: "Chief Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Sarah brings expertise in structural engineering and sustainable design to every project we undertake."
    },
    {
      name: "Michael Rodriguez",
      position: "Project Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Michael ensures seamless project execution and maintains our high standards of quality and timeline adherence."
    },
    {
      name: "Emily Johnson",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Emily oversees daily operations and coordinates between teams to ensure efficient project delivery."
    }
  ];

  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16 animate-slide-up">
          <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
            OUR TEAM
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-[var(--primary)] mb-6">
            Meet the Experts
          </h2>
          <p className="text-lg text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
            Our experienced team of professionals brings together decades of expertise in construction, 
            engineering, and project management.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 overflow-hidden border-r-4 border-b-4 border-[var(--accent)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-[var(--primary)] mb-2">
                  {member.name}
                </h3>
                <div className="text-[var(--accent)] font-medium mb-3">
                  {member.position}
                </div>
                <p className="text-[var(--secondary)] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
