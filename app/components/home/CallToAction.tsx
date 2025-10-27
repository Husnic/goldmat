import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-100">
      <div className="container mx-auto max-w-5xl">
        <div 
          className="relative py-16 lg:py-20 px-8 lg:px-12 text-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Content */}
          <div className="relative z-10 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Partner with Goldmat for seamless execution and superior engineering
              quality on your next major development.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
