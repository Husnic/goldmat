// Site Configuration
export const SITE_CONFIG = {
  name: "Goldmat Construction Engineering Services Limited",
  shortName: "Goldmat Engineering",
  tagline: "Engineering Excellence. Built on Expertise.",
  description:
    "Delivering competent professional construction works and multi-disciplinary engineering solutions.",
  email: "info@goldmatengineeringltd.com",
  phone: "+234 706-1522-038",
  alternatePhone: "+234 807-2832-126",
  addresses: [
    {
      label: "Ibadan HQ",
      street: "Km 46, Old Lagos Road, Opp RSP, Alomoja Road",
      city: "Ibadan",
      state: "Oyo State",
      country: "Nigeria",
    },
    {
      label: "Secondary Office",
      street: "No 4, Phase 6. Peace Estate, Iyana Tipper, Ilagbeja, Akingbile",
      city: "Ibadan",
      state: "Oyo State",
      country: "Nigeria",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/goldmat-engineering",
    twitter: "https://twitter.com/goldmateng",
    facebook: "https://www.facebook.com/goldmatengineering",
  },
};

// Hero Section
export const HERO_CONTENT = {
  headline: "Engineering Excellence.",
  subHeadline: "Built on Expertise.",
  description:
    "Delivering competent professional construction works and multi-disciplinary engineering solutions.",
  cta: {
    primary: {
      text: "View Our Portfolio",
      href: "/projects",
    },
    secondary: {
      text: "Services Overview",
      href: "/services",
    },
  },
  stats: [
    {
      value: "50+",
      label: "Projects Completed",
    },
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
    },
  ],
};

// About Section
export const ABOUT_CONTENT = {
  title: "Your Partner in Civil and Structural Advancement",
  description:
    "GOLDMAT is an independent organization providing high-quality, multi-disciplinary construction, consultancy, and advisory services. We combine civil, structural, environmental engineering, and management skills into dedicated project teams to handle everything from conceptual engineering to final construction and project management.",
  highlights: [
    "Multi-disciplinary engineering expertise",
    "Full project lifecycle management",
    "Registered and experienced engineers",
    "Quality-driven execution",
  ],
};

// Core Competencies
export const CORE_COMPETENCIES = [
  {
    id: "civil-structural",
    title: "Civil & Structural Engineering",
    description:
      "Detailed design, calculations, and execution of complex structures.",
    icon: "building",
    image: "/bg-1.png",
    services: [
      "Structural and Architectural Designs",
      "New Building Construction",
      "Building Renovations",
      "Detailed Calculations and Working Drawings",
      "Reinforcement Bending Schedules",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Road Network",
    description:
      "Expertise in road construction, drainage, flood control, and water treatment plants.",
    icon: "road",
    image: "/bg-2.png",
    services: [
      "Road Network Construction",
      "Drainage Systems",
      "Flood and Erosion Control",
      "Water Treatment Plant Design",
      "Storage Facilities (Reservoirs, Water Tanks)",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Facilities",
    description:
      "Specializing in factory sizing, detailed engineering for machinery foundations, and process flow.",
    icon: "factory",
    image: "/bg-3.png",
    services: [
      "Process Flow Establishment",
      "Machine Specifications & Procurement",
      "Detailed Engineering of Foundations for Machinery",
      "Factory Sizing & Design",
      "Quality Control (QC/QA)",
    ],
  },
  {
    id: "project-management",
    title: "Building Management & Project Oversight",
    description:
      "Full-cycle project monitoring, cost control, and resource management.",
    icon: "management",
    image: "/bg-6.png",
    services: [
      "Conceptual Engineering",
      "Detailed Design",
      "Building Consultancy Services",
      "Project Planning & Monitoring",
      "Cost Control & Procurement Services",
    ],
  },
];

// Project Categories
export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
  { id: "infrastructure", label: "Infrastructure" },
];

// Featured Projects
export const FEATURED_PROJECTS = [
  {
    id: "gtbank-ogun",
    title: "GTBank Developmental Project",
    location: "Ogun State",
    date: "2020",
    category: "commercial" as const,
    tags: ["Commercial", "Banking", "Infrastructure"],
    image: "/projects/gtbank-ogun/main.jpg",
    description: "Construction of Guarantee Trust Bank developmental project.",
    gallery: ["/projects/gtbank-ogun/main.jpg", "/projects/gtbank-ogun/1.jpg"],
    details: {
      client: "Guarantee Trust Bank",
      duration: "12 months",
      value: "₦50M+",
      scope: [
        "Structural Engineering",
        "Foundation Works",
        "Building Construction",
        "Project Management",
      ],
    },
  },
  {
    id: "imperial-garden",
    title: "Imperial Garden Estate",
    location: "Agodi, Ibadan, Oyo State",
    date: "2019",
    category: "residential" as const,
    tags: ["Residential", "Estate", "Housing"],
    image: "/projects/imperial-garden/main.jpg",
    description: "Residential estate development with modern infrastructure.",
    gallery: [
      "/projects/imperial-garden/main.jpg",
      "/projects/imperial-garden/main.jpg",
    ],
    details: {
      client: "Imperial Garden Developers",
      duration: "18 months",
      value: "₦80M+",
      scope: [
        "Estate Planning",
        "Road Construction",
        "Drainage Systems",
        "Residential Buildings",
      ],
    },
  },
  {
    id: "maryland-mall",
    title: "Maryland Mall",
    location: "Maryland, Lagos State",
    date: "2014",
    category: "commercial" as const,
    tags: ["Commercial", "Retail", "Mall"],
    image: "/projects/maryland-mall/main.jpg",
    description:
      "Commercial development and structural execution of a major shopping complex.",
    gallery: [
      "/projects/maryland-mall/main.jpg",
      "/projects/maryland-mall/main.jpg",
    ],
    details: {
      client: "Maryland Properties Ltd",
      duration: "24 months",
      value: "₦150M+",
      scope: [
        "Structural Design",
        "Construction Management",
        "MEP Systems",
        "Interior Fit-out",
      ],
    },
  },
];

// All Projects - Complete list of all Goldmat projects
export const ALL_PROJECTS = [
  ...FEATURED_PROJECTS,
  {
    id: "he-cares-event-center",
    title: "He Cares Event Center",
    location: "Ibadan, Oyo State",
    date: "2021",
    category: "commercial" as const,
    tags: ["Commercial", "Event Center", "Construction"],
    image: "/projects/he-cares-event-center/main.jpg",
    description: "Event center construction and structural design.",
    gallery: [
      "/projects/he-cares-event-center/main.jpg",
      "/projects/he-cares-event-center/1.jpg",
      "/projects/he-cares-event-center/2.jpg",
      "/projects/he-cares-event-center/3.jpg",
    ],
    details: {
      duration: "10 months",
      scope: [
        "Structural Design",
        "Construction Management",
        "Interior Design",
      ],
    },
  },
  {
    id: "he-cares-apartment",
    title: "He Cares Apartment",
    location: "Ibadan, Oyo State",
    date: "2021",
    category: "residential" as const,
    tags: ["Residential", "Apartment", "Housing"],
    image: "/projects/he-cares-apartment/main.jpg",
    description: "Residential apartment complex development.",
    gallery: [
      "/projects/he-cares-apartment/main.jpg",
      "/projects/he-cares-apartment/main.jpg",
      "/projects/he-cares-apartment/main.jpg",
    ],
    details: {
      duration: "14 months",
      scope: [
        "Residential Construction",
        "Plumbing Systems",
        "Electrical Works",
      ],
    },
  },
  {
    id: "olufemi-alao-house",
    title: "Olufemi Alao House",
    location: "Gaa Baale, Kisi, Oyo State",
    date: "2018",
    category: "residential" as const,
    tags: ["Residential", "Private Home", "Custom Build"],
    image: "/projects/olufemi-alao-house/main.jpg",
    description: "Residential building construction and structural design.",
    gallery: [
      "/projects/olufemi-alao-house/main.jpg",
      "/projects/olufemi-alao-house/main.jpg",
      "/projects/olufemi-alao-house/main.jpg",
    ],
    details: {
      duration: "8 months",
      scope: ["Architectural Design", "Structural Engineering", "Construction"],
    },
  },
  {
    id: "lng-gas-station",
    title: "LNG Gas Station",
    location: "ROM Oil, Alomoja, Ibadan",
    date: "2019",
    category: "infrastructure" as const,
    tags: ["Infrastructure", "Gas Station", "Industrial"],
    image: "/projects/rom-oil/main.jpg",
    description:
      "Industrial facility foundations and construction for LNG gas station.",
    gallery: [
      "/projects/rom-oil/main.jpg",
      "/projects/rom-oil/1.jpg",
      "/projects/rom-oil/2.jpg",
      "/projects/rom-oil/3.jpg",
      "/projects/rom-oil/4.jpg",
    ],
    details: {
      client: "ROM Oil",
      duration: "6 months",
      scope: ["Foundation Works", "Industrial Construction", "Safety Systems"],
    },
  },
  {
    id: "west-energy-warehouse",
    title: "West Energy Pipe Warehouse",
    location: "Alomoja, Ibadan",
    date: "2020",
    category: "infrastructure" as const,
    tags: ["Infrastructure", "Warehouse", "Industrial"],
    image: "/projects/west-energy-warehouse/main.jpg",
    description: "Warehouse construction for industrial pipe storage.",
    gallery: [
      "/projects/west-energy-warehouse/main.jpg",
      "/projects/west-energy-warehouse/main.jpg",
    ],
    details: {
      client: "West Energy",
      duration: "8 months",
      scope: [
        "Warehouse Construction",
        "Storage Systems",
        "Loading Facilities",
      ],
    },
  },
  {
    id: "osborne-ikoyi",
    title: "Residential Development at Osborne Road",
    location: "Ikoyi, Lagos",
    date: "2020",
    category: "residential" as const,
    tags: ["Residential", "High-Rise", "Luxury"],
    image: "/projects/osborne/main.jpg",
    description: "High-rise residential development with modern amenities.",
    gallery: ["/projects/osborne/main.jpg"],
    details: {
      duration: "20 months",
      value: "₦200M+",
      scope: ["High-Rise Construction", "Luxury Finishes", "Modern Amenities"],
    },
  },
  {
    id: "tarm-ogbomosho",
    title: "TARM Project",
    location: "Ogbomosho, Oyo State",
    date: "2021",
    category: "commercial" as const,
    tags: ["Commercial", "Development", "Construction"],
    image: "/projects/tarm-ogbomosho/main.jpg",
    description: "Commercial development project in Ogbomosho.",
    gallery: [
      "/projects/tarm-ogbomosho/main.jpg",
      "/projects/tarm-ogbomosho/1.jpg",
      "/projects/tarm-ogbomosho/2.jpg",
    ],
    details: {
      duration: "12 months",
      scope: [
        "Commercial Construction",
        "Project Management",
        "Site Development",
      ],
    },
  },
];

// Mission Statement
export const MISSION_CONTENT = {
  title: "Our Promise: On Time, On Budget.",
  description:
    "Our fulfillment is the realization of the goals of the client at the right cost at the right time. We accept challenges and believe in an innovative world for the advancement of technology.",
  values: [
    {
      title: "Quality",
      description: "Uncompromising standards in every project",
    },
    {
      title: "Timeliness",
      description: "Delivering projects on schedule, every time",
    },
    {
      title: "Innovation",
      description: "Embracing technology for better solutions",
    },
    {
      title: "Integrity",
      description: "Transparent and ethical business practices",
    },
  ],
};

// Team Members
export const TEAM_MEMBERS = [
  {
    name: "Engr. Oyedibu Mathew",
    position: "Principal Partner / Project Manager",
    credentials: "MNSE, MNICE, COREN",
    image: "/team/oyedibu-mathew.jpeg",
    bio: "Principal partner with extensive expertise in civil engineering and project management, leading Goldmat's vision for excellence.",
  },
  {
    name: "Engr. Oyedibu, John Gboyega",
    position: "Structural Engineer",
    credentials: "M.Sc, COREN",
    image: "/team/john-gboyega.jpeg",
    bio: "Specialized in structural engineering with extensive experience in designing safe and innovative structures.",
  },
  {
    name: "Engr. Mobolaji Peter",
    position: "Civil Engineer",
    credentials: "M.Sc, COREN",
    image: "/team/mobolaji-peter.jpeg",
    bio: "Expert civil engineer with comprehensive knowledge in construction and infrastructure development.",
  },
  {
    name: "Abdulbaasit Abdussalaam",
    position: "Graduate Engineer",
    credentials: "",
    image: "/team/abdusalam-abdulbasit.jpeg",
    bio: "Emerging engineering professional bringing fresh perspectives and technical expertise to our projects.",
  },
  {
    name: "Surv. Adeleke Joel Tunde",
    position: "Land Surveyor",
    credentials: "",
    image: "/team/adeleke-joel.jpg",
    bio: "Skilled land surveyor ensuring accurate site measurements and property boundary determinations.",
  },
  {
    name: "Peter Mobolaji",
    position: "Quantity Surveyor",
    credentials: "",
    image: "/team/peter-omobolaji.jpeg",
    bio: "Experienced quantity surveyor managing project costs and ensuring optimal resource allocation.",
  },
];

// Safety & Quality
export const SAFETY_CONTENT = {
  title: "Safety, Health, and Environment (SHE)",
  description:
    "Our SHE policy is an integral part of the Goldmat quality program.",
  objectives: [
    "Prevention of risk to human life and health (our most important asset)",
    "Preservation of the environment",
    "Elimination of lost time and property damage",
  ],
  commitment:
    "We maintain a strict Safety Management System and ensure compliance with all laws, codes, and contractual requirements.",
};

// Call to Action
export const CTA_CONTENT = {
  title: "Ready to Start Building?",
  description:
    "Partner with Goldmat for seamless execution and superior engineering quality on your next major development.",
  cta: {
    text: "Request a Consultation",
    href: "/contact",
  },
};

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Victoria Development Corp",
    role: "Project Manager",
    content:
      "Goldmat delivered exceptional results on our commercial project. Their attention to detail and commitment to quality exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Industrial Solutions Ltd",
    role: "Operations Director",
    content:
      "Professional, reliable, and innovative. Goldmat completed our industrial facility on time and within budget.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Urban Properties Inc",
    role: "Development Lead",
    content:
      "Their engineering expertise and project management skills are unmatched. Highly recommended for any construction project.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Okonkwo",
    company: "Retail Ventures Nigeria",
    role: "CEO",
    content:
      "From concept to completion, Goldmat demonstrated professionalism and technical excellence. Our mall project was delivered ahead of schedule.",
    rating: 5,
  },
  {
    id: 5,
    name: "Aisha Mohammed",
    company: "Infrastructure Development Ltd",
    role: "Project Coordinator",
    content:
      "Outstanding structural engineering services. Their team's expertise in complex infrastructure projects is truly impressive.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Adebayo",
    company: "Estate Developers PLC",
    role: "Managing Director",
    content:
      "Goldmat's commitment to safety and quality is evident in every aspect of their work. A trusted partner for our residential projects.",
    rating: 5,
  },
];

// FAQ
export const FAQ_ITEMS = [
  {
    question: "What types of projects does Goldmat handle?",
    answer:
      "We handle a wide range of projects including commercial buildings, industrial facilities, residential developments, infrastructure projects, and institutional buildings. Our expertise spans from concept design to final construction.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "While our headquarters is in Ibadan, we provide services across Nigeria, with completed projects in Lagos, Kano, Ogun State, Warri, and other locations nationwide.",
  },
  {
    question: "Do you provide consultancy services?",
    answer:
      "Yes, we offer comprehensive consultancy services including conceptual engineering, detailed design, building consultancy, project planning, monitoring, and cost control.",
  },
  {
    question: "What makes Goldmat different from other engineering firms?",
    answer:
      "Our multi-disciplinary approach, experienced registered engineers, commitment to quality and safety, and proven track record of delivering projects on time and within budget set us apart.",
  },
  {
    question: "How can I request a consultation?",
    answer:
      "You can contact us via email at info@goldmatengineeringltd.com or call us at +234 706-1522-038. You can also fill out our contact form and we'll get back to you promptly.",
  },
];
