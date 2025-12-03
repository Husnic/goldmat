import Link from "next/link";
import { MISSION_CONTENT } from "@/app/constants";

export default function MissionStatement() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full">
                <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                {MISSION_CONTENT.title}
              </h2>
              <p className="text-base sm:text-lg text-text-light leading-relaxed">
                {MISSION_CONTENT.description}
              </p>
            </div>

            {/* Right Content - Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {MISSION_CONTENT.values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-light">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
