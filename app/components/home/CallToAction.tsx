import Link from "next/link";
import { CTA_CONTENT } from "@/app/constants";

export default function CallToAction() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary rounded-[3rem] overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-16 lg:py-20 px-8 lg:px-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                {CTA_CONTENT.title}
              </h2>
              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                {CTA_CONTENT.description}
              </p>
              <Link
                href={CTA_CONTENT.cta.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                {CTA_CONTENT.cta.text}
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
    </section>
  );
}
