import Image from "next/image";

export default function ProjectsHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/bg-3.png" alt="Background" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full mb-6">
            <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Our Construction Projects
          </h1>
          <p className="text-lg lg:text-xl text-text-light leading-relaxed max-w-3xl mx-auto">
            Explore our diverse portfolio of successful construction and
            engineering projects across residential, commercial, industrial, and
            infrastructure sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
