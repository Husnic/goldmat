"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HERO_CONTENT } from "@/app/constants";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const heroImages = ["/bg-1.png", "/bg-2.png", "/bg-3.png"];

  const rotatingTexts = [
    "Shaping the future",
    "Building the future",
    "Innovative solutions",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(textTimer);
  }, [rotatingTexts.length]);

  return (
    <section className="relative bg-gray-50 min-h-[700px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image Slider - Full width on mobile, right side on desktop */}
      <div className="absolute inset-0 lg:left-1/2 lg:right-0">
        <div className="relative w-full h-full rounded-none lg:rounded-l-[3rem] overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Goldmat Project ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Gradient Overlay - stronger on mobile for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 lg:from-transparent lg:via-black/10 lg:to-transparent pointer-events-none"></div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 lg:left-3/4 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="lg:w-1/2">
            {/* Main Headline with rotating text */}
            <div className="space-y-3 mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white lg:text-foreground leading-[1.1]">
                {HERO_CONTENT.headline}
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white lg:text-accent leading-[1.1] min-h-[1.2em]">
                <span className="inline-block transition-all duration-500">
                  {rotatingTexts[currentTextIndex]}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white lg:text-text-light leading-relaxed max-w-lg mb-8">
              {HERO_CONTENT.description}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-foreground font-semibold rounded-full border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                View All Services
                <span className="ml-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                  <svg
                    className="w-4 h-4 text-white group-hover:text-primary"
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
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    15+
                  </span>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white lg:text-foreground">
                    years of
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white lg:text-foreground">
                    experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blue Shape - Desktop only */}
      <div className="hidden lg:block absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
