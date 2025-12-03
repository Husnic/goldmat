import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://goldmat.com";

export const metadata: Metadata = {
  title: {
    default:
      "Goldmat Construction Engineering Services - Civil & Structural Engineering Nigeria",
    template: "%s | Goldmat Engineering",
  },
  description:
    "Leading construction and engineering company in Nigeria. We provide civil engineering, structural engineering, construction services, project management, and multi-disciplinary engineering solutions across Nigeria.",
  keywords: [
    "construction company Nigeria",
    "civil engineering Nigeria",
    "structural engineering",
    "building construction",
    "project management",
    "engineering consultancy",
    "infrastructure development",
    "industrial facilities",
    "commercial construction",
    "residential construction",
    "engineering services Nigeria",
    "construction supervision",
  ],
  authors: [{ name: "Goldmat Engineering Team" }],
  creator: "Goldmat Construction Engineering Services Limited",
  publisher: "Goldmat Construction Engineering Services Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Goldmat Construction Engineering Services",
    title:
      "Goldmat Construction Engineering Services - Civil & Structural Engineering Nigeria",
    description:
      "Leading construction and engineering company in Nigeria. We provide civil engineering, structural engineering, construction services, project management, and multi-disciplinary engineering solutions.",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Goldmat Construction Engineering Services - Civil & Structural Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Goldmat Construction Engineering Services - Civil & Structural Engineering Nigeria",
    description:
      "Leading construction and engineering company in Nigeria. Civil engineering, structural engineering, construction services, and project management.",
    images: ["/cover.png"],
    creator: "@goldmateng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Goldmat Construction Engineering Services Limited",
  alternateName: "Goldmat Engineering",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/cover.png`,
  description:
    "Leading construction and engineering company in Nigeria providing civil engineering, structural engineering, construction services, project management, and multi-disciplinary engineering solutions.",
  foundingDate: "2010",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Km 46, Old Lagos Road, Opp RSP, Alomoja Road",
      addressLocality: "Ibadan",
      addressRegion: "Oyo State",
      addressCountry: "NG",
    },
    {
      "@type": "PostalAddress",
      streetAddress:
        "No 4, Phase 6. Peace Estate, Iyana Tipper, Ilagbeja, Akingbile",
      addressLocality: "Ibadan",
      addressRegion: "Oyo State",
      addressCountry: "NG",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-706-1522-038",
    contactType: "customer service",
    areaServed: "NG",
    availableLanguage: ["English"],
    email: "oyedibumathew@goldmatengineering.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/goldmat-engineering",
    "https://twitter.com/goldmateng",
    "https://www.facebook.com/goldmatengineering",
  ],
  serviceArea: {
    "@type": "Country",
    name: "Nigeria",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction and Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Civil & Structural Engineering",
          description:
            "Structural and architectural designs, new building construction, building renovations, detailed calculations and working drawings",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Infrastructure Engineering",
          description:
            "Road network construction, drainage, flood and erosion control, water treatment plant design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Industrial Engineering",
          description:
            "Process flow establishment, machine specifications, detailed engineering of foundations for machinery, factory sizing & design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Project Management & Consultancy",
          description:
            "Conceptual engineering, detailed design, building consultancy services, project planning & monitoring, cost control",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
