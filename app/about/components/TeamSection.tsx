import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "Adeleke Joel Tunde",
      position: "Land Surveyor",
      image:"/team/adeleke.jpg",
      bio: "With over 20 years in construction and engineering, David leads our vision for innovative building solutions.",
    },
    {
      name: "Engr. Mobolagi Peter",
      position: "Chief Engineer",
      image: "/team/mobolaji.jpg",
      bio: "Engr Mobolaji Peter (Msc, COREN) is a civil engineer with expertise in structural engineering and sustainable design to every project we undertake.",
    },
    {
      name: "Michael Rodriguez",
      position: "Project Director",
      image: "/team/michael.jpg",
      bio: "Michael ensures seamless project execution and maintains our high standards of quality and timeline adherence.",
    },
    {
      name: "Emily Johnson",
      position: "Operations Manager",
      image: "/team/emily.jpg",
      bio: "Emily oversees daily operations and coordinates between teams to ensure efficient project delivery.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full mb-4">
              <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Meet the Experts
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              Our experienced team of professionals brings together decades of
              expertise in construction, engineering, and project management.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-text-light text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
