import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/bg-1.png" alt="Background" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full mb-6">
            <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
              About Goldmat Construction
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Building Excellence Since 2008
          </h1>
          <p className="text-lg lg:text-xl text-text-light leading-relaxed max-w-3xl mx-auto">
            We are a leading construction and engineering firm dedicated to
            delivering exceptional results through innovation, expertise, and
            unwavering commitment to quality.
          </p>
        </div>
      </div>
    </section>
  );
}
