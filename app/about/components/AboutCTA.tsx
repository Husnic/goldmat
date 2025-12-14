import Link from "next/link";
import Image from "next/image";

export default function AboutCTA() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary rounded-[3rem] overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-80">
              <Image
                src="/bg-5.jpeg"
                alt="Background"
                fill
                className="object-cover"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-primary/80"></div>

            {/* Content */}
            <div className="relative z-10 py-16 lg:py-20 px-8 lg:px-12 text-center">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Let's discuss your next construction project and discover how
                our expertise can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Our Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
