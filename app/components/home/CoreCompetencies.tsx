export default function CoreCompetencies() {
  const competencies = [
    {
      icon: "https://img.icons8.com/3d-fluency/80/engineering.png",
      title: "Civil & Structural Engineering",
      description:
        "Detailed design, calculations, and execution of complex structures.",
    },
    {
      icon: "https://img.icons8.com/3d-fluency/80/project-management.png",
      title: "Building Management & Project Oversight",
      description:
        "Full-cycle project monitoring, cost control, and resource management.",
    },
    {
      icon: "https://img.icons8.com/3d-fluency/80/road.png",
      title: "Infrastructure & Road Network",
      description:
        "Expertise in road construction, drainage, flood control, and water treatment plants.",
    },
    {
      icon: "https://img.icons8.com/3d-fluency/80/factory.png",
      title: "Industrial Facilities",
      description:
        "Specializing in factory sizing, detailed engineering for machinery foundations, and process flow.",
    },
  ];

  return (
    <section className="py-12 lg:py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[var(--primary)] mb-4">
            What We Build
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
            >
              <div className="mb-6">
                <img
                  src={competency.icon}
                  alt={competency.title}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-[var(--primary)] mb-4">
                {competency.title}
              </h3>
              <p className="text-[var(--secondary)] text-sm leading-relaxed">
                {competency.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
