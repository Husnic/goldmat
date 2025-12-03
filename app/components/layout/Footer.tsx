import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/about#why-choose-us" },
    { name: "Services", href: "/#services" },
    { name: "Our Team", href: "/about#team" },
    { name: "Solutions", href: "/#services" },
  ];

  const supportLinks = [
    { name: "Support", href: "/contact" },
    { name: "Projects", href: "/projects" },
    { name: "Terms & Conditions", href: "/#" },
    { name: "Privacy Policy", href: "/#" },
    { name: "Contacts", href: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                goldmat
              </h3>
              <p className="text-text-light leading-relaxed mb-6 max-w-sm">
                We are creators of transformative spaces that inspire, innovate,
                and endure.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  {navigationLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-foreground hover:text-accent transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  {supportLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-foreground hover:text-accent transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="space-y-4">
                <div>
                  <a
                    href="tel:+2347061522038"
                    className="text-xl font-semibold text-foreground hover:text-accent transition-colors block"
                  >
                    +(234) 706 152 2038
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:oyedibumathew@goldmatengineering.com"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    oyedibumathew@goldmatengineering.com
                  </a>
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href="#"
                    className="text-text-light hover:text-accent transition-colors text-sm"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-text-light hover:text-accent transition-colors text-sm"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-text-light hover:text-accent transition-colors text-sm"
                  >
                    Youtube
                  </a>
                  <a
                    href="#"
                    className="text-text-light hover:text-accent transition-colors text-sm"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-text-light">
                © {currentYear}{" "}
                <Link href="/" className="font-semibold hover:text-accent">
                  goldmat
                </Link>
                . All Rights Reserved
              </div>
              <div className="text-sm text-text-light">Developed by Jafar</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
