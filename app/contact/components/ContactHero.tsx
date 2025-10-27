export default function ContactHero() {
  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-6 min-h-[400px] lg:min-h-[500px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="animate-slide-up">
          <div className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-6">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Let's Build Together
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Ready to start your next construction project? Contact our team of experts 
            and let's discuss how we can bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}
