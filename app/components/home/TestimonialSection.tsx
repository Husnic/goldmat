"use client";

import { useRef } from "react";
import { TESTIMONIALS } from "@/app/constants";

export default function TestimonialSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full mb-4">
                <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
                  Testimonials
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                What Our Clients Say
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 min-w-12 h-12 border border-primary rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-light">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
