import Link from "next/link";
import { ABOUT_CONTENT } from "@/app/constants";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content - Text */}
            <div className="space-y-6">
              {/* Section Label */}
              <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full">
                <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
                  About Us
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                Built on trust,
                <br />
                driven by
                <br />
                precision
              </h2>
            </div>

            {/* Right Content - Description & CTA */}
            <div className="space-y-6 lg:pt-12">
              {/* Main Description */}
              <p className="text-base sm:text-lg text-foreground font-semibold leading-relaxed">
                {ABOUT_CONTENT.title}
              </p>

              {/* Secondary Description */}
              <p className="text-base text-text-light leading-relaxed">
                {ABOUT_CONTENT.description}
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-foreground font-semibold rounded-full border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  Meet The Team
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
