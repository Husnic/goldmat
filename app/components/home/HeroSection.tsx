"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Redefining What's Possible in Construction",
      subtitle:
        "From concept to completion, our expert team ensures quality, safety, and timely delivery for every project",
      buttonText: "Get Started",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { number: "400+", label: "Happy Clients" },
    },
    {
      title: "Engineering Excellence Built on Expertise",
      subtitle:
        "Multi-disciplinary construction, consultancy, and advisory services delivered by certified professionals",
      buttonText: "View Projects",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { number: "15+", label: "Years Experience" },
    },
    {
      title: "Your Partner in Civil & Structural Advancement",
      subtitle:
        "Combining civil, structural, and environmental engineering skills for comprehensive project solutions",
      buttonText: "Our Services",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { number: "200+", label: "Projects Completed" },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-white overflow-hidden max-md:min-h-screen lg:min-h-[800px] flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Star Rating */}
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[var(--primary)] leading-tight animate-slide-in-left">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-[var(--secondary)] leading-relaxed max-w-lg animate-slide-up">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Button */}
            <div className="animate-slide-up">
              <Link
                href={
                  currentSlide === 0
                    ? "/contact"
                    : currentSlide === 1
                    ? "/projects"
                    : "/services"
                }
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>{slides[currentSlide].buttonText}</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-[var(--accent)] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Image with Stats Card */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden border-r-4 border-b-4 border-gray-400">
              <img
                src={slides[currentSlide].image}
                alt="Construction Excellence"
                className="w-full h-[500px] object-cover transition-all duration-1000"
              />

              {/* Stats Card Overlay */}
              <div className="absolute bottom-6 left-6 bg-white p-6 max-w-xs border-r-2 border-b-2 border-gray-300">
                <div className="text-sm text-[var(--secondary)] mb-2">
                  {slides[currentSlide].stats.label}
                </div>
                <div className="text-3xl font-heading font-bold text-[var(--primary)] mb-3">
                  {slides[currentSlide].stats.number}
                </div>

                {/* Client Avatars */}
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-white font-semibold">
                        JD
                      </span>
                    </div>
                    <div className="w-8 h-8 bg-green-500 border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-white font-semibold">
                        AS
                      </span>
                    </div>
                    <div className="w-8 h-8 bg-purple-500 border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-white font-semibold">
                        MK
                      </span>
                    </div>
                    <div className="w-8 h-8 bg-orange-500 border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-white font-semibold">
                        +
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--secondary)] ml-2">
                    Believe in Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
