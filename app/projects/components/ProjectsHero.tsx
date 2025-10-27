export default function ProjectsHero() {
  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-6 min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="animate-slide-up">
          <div className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-6">
            OUR PORTFOLIO
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Our Construction Projects
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Explore our diverse portfolio of successful construction and engineering projects 
            across residential, commercial, industrial, and infrastructure sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
