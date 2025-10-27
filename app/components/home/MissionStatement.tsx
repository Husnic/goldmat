export default function MissionStatement() {
  return (
    <section className="relative py-12 lg:py-20 px-4 lg:px-6 min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="backdrop-blur-sm bg-black/20 p-6 lg:p-8 border-r-4 border-b-4 border-white/30">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-white mb-4 lg:mb-6">
                Defined by the Quality of Our People
              </h2>
              <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-6">
                Our people bring technical excellence, ingenuity, drive, creativity, and experience to help our customers achieve their bold visions.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-yellow-400">
                  Get Our Stories Today
                </span>
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - empty space to maintain layout */}
          <div className="animate-slide-in-right">
            {/* This div maintains the grid structure but is visually empty since the image is now the background */}
          </div>
        </div>
      </div>
    </section>
  );
}
