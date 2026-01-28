import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* 3D Icon from Icons8 */}
        <div className="mb-8">
          <img
            src="https://img.icons8.com/3d-fluency/200/error.png"
            alt="404 Error"
            className="mx-auto w-48 h-48"
          />
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-heading font-bold text-[var(--primary)] mb-4">
          404
        </h1>

        <h2 className="text-2xl font-heading font-semibold text-[var(--primary)] mb-4">
          Page Not Found
        </h2>

        <p className="text-[var(--secondary)] mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to building something great.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/" className="btn-primary inline-block w-full">
            Back to Home
          </Link>

          <Link href="/#services" className="btn-secondary inline-block w-full">
            View Our Services
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-heading font-semibold text-[var(--primary)] mb-4 uppercase tracking-wider">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link
              href="/projects"
              className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
            >
              Our Projects
            </Link>
            <Link
              href="/contact"
              className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
            >
              About Goldmat
            </Link>
            <Link
              href="/services"
              className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-[var(--secondary)] mb-2">
            Need immediate assistance?
          </p>
          <div className="space-y-1">
            <a
              href="tel:+2347061522038"
              className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
            >
              +234-706-1522-038
            </a>
            <br />
            <a
              href="mailto:info@goldmatengineeringltd.com"
              className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
            >
              info@goldmatengineeringltd.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
