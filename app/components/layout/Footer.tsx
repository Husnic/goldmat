import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Civil Engineering", href: "/services#civil" },
    { name: "Structural Engineering", href: "/services#structural" },
    { name: "Project Management", href: "/services#management" },
    { name: "Industrial Facilities", href: "/services#industrial" },
  ];

  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 relative h-24 w-[200px] bg-white">
              <Image
                src="/logo.png"
                alt="Goldmat Construction Engineering Services"
                fill
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
              An independent organization providing high-quality,
              multi-disciplinary construction, consultancy, and advisory
              services in civil and structural engineering.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  src="https://img.icons8.com/3d-fluency/24/marker.png"
                  alt="Location"
                  className="w-5 h-5"
                />
                <div className="text-sm text-blue-100">
                  <div>Km 46, Old Lagos Road, Opp RSP, Alomoja Road</div>
                  <div>Ibadan, Oyo State, Nigeria</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src="https://img.icons8.com/3d-fluency/24/phone.png"
                  alt="Phone"
                  className="w-5 h-5"
                />
                <div className="text-sm text-blue-100">
                  <a
                    href="tel:+2347061522038"
                    className="hover:text-white transition-colors"
                  >
                    +234-706-1522-038
                  </a>
                  <span className="mx-2">•</span>
                  <a
                    href="tel:+2348072832126"
                    className="hover:text-white transition-colors"
                  >
                    +234-807-2832-126
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src="https://img.icons8.com/3d-fluency/24/email.png"
                  alt="Email"
                  className="w-5 h-5"
                />
                <a
                  href="mailto:oyedibumathew@goldmatengineering.com"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  oyedibumathew@goldmatengineering.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-200">
              © {currentYear} Goldmat Construction Engineering Services Limited.
              All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-blue-200">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-800 text-center">
            <p className="text-xs text-blue-300">
              Professional Engineering Solutions • Licensed Engineers •
              Registered with CAC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
