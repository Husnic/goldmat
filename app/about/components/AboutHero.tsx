export default function AboutHero() {
  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-6 min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="animate-slide-up">
          <div className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-6">
            ABOUT GOLDMAT CONSTRUCTION
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Building Excellence Since 2008
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            We are a leading construction and engineering firm dedicated to delivering 
            exceptional results through innovation, expertise, and unwavering commitment to quality.
          </p>
        </div>
      </div>
    </section>
  );
}
