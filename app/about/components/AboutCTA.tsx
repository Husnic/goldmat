import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-100">
      <div className="container mx-auto max-w-5xl">
        <div 
          className="relative py-16 lg:py-20 px-8 lg:px-12 text-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Content */}
          <div className="relative z-10 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Let's discuss your next construction project and discover how our expertise 
              can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects" className="btn-secondary bg-white text-[var(--primary)] border-white hover:bg-gray-100 text-lg px-8 py-4">
                View Our Work
              </Link>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
