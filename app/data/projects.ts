export interface Project {
  id: string;
  title: string;
  location: string;
  date: string;
  category: 'commercial' | 'residential' | 'industrial' | 'infrastructure';
  tags: string[];
  image: string;
  description: string;
  details?: {
    client?: string;
    duration?: string;
    value?: string;
    scope?: string[];
    challenges?: string[];
    solutions?: string[];
  };
}

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'residential', label: 'Residential' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'infrastructure', label: 'Infrastructure' }
];

export const projects: Project[] = [
  {
    id: 'horizon-workspaces-1',
    title: 'Horizon Workspaces',
    location: 'Greenville, Phoenix, AZ 85-388',
    date: 'May 2024',
    category: 'commercial',
    tags: ['Office Design', 'Interior Concepts', 'Workspace'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern office complex featuring innovative workspace design and sustainable building practices.',
    details: {
      client: 'Phoenix Development Corp',
      duration: '18 months',
      value: '$2.5M',
      scope: ['Structural Engineering', 'Interior Design', 'Project Management']
    }
  },
  {
    id: 'horizon-workspaces-2',
    title: 'Horizon Workspaces Phase II',
    location: 'Greenville, Phoenix, AZ 85-388',
    date: 'May 2024',
    category: 'commercial',
    tags: ['Office Design', 'Workspace'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Expansion of the successful Horizon Workspaces project with enhanced collaborative spaces.',
    details: {
      client: 'Phoenix Development Corp',
      duration: '12 months',
      value: '$1.8M',
      scope: ['Construction Management', 'Interior Fit-out', 'MEP Systems']
    }
  },
  {
    id: 'pinnacle-corporate-hub',
    title: 'Pinnacle Corporate Hub',
    location: 'Downtown, Miami, FL 33-101',
    date: 'March 2024',
    category: 'commercial',
    tags: ['Corporate Design', 'Architecture'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-rise corporate headquarters with cutting-edge architectural design and smart building technology.',
    details: {
      client: 'Pinnacle Enterprises',
      duration: '24 months',
      value: '$15M',
      scope: ['Structural Engineering', 'Architectural Design', 'Smart Systems Integration']
    }
  },
  {
    id: 'skyline-business-center',
    title: 'Skyline Business Center',
    location: 'Business District, Austin, TX 78-701',
    date: 'February 2024',
    category: 'commercial',
    tags: ['Commercial', 'Modern Design', 'Business'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Multi-tenant business center with flexible office spaces and modern amenities.',
    details: {
      client: 'Austin Business Properties',
      duration: '20 months',
      value: '$8.5M',
      scope: ['Construction Management', 'Tenant Improvements', 'Facility Systems']
    }
  },
  {
    id: 'riverside-residential',
    title: 'Riverside Residential Complex',
    location: 'Riverside, Sacramento, CA 95814',
    date: 'January 2024',
    category: 'residential',
    tags: ['Residential', 'Multi-Family', 'Sustainable'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxury residential complex with 200 units featuring sustainable design and community amenities.',
    details: {
      client: 'Riverside Development LLC',
      duration: '30 months',
      value: '$45M',
      scope: ['Structural Engineering', 'Construction Management', 'Landscape Architecture']
    }
  },
  {
    id: 'industrial-manufacturing',
    title: 'Advanced Manufacturing Facility',
    location: 'Industrial Park, Houston, TX 77001',
    date: 'December 2023',
    category: 'industrial',
    tags: ['Manufacturing', 'Industrial', 'Heavy Construction'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art manufacturing facility with specialized equipment foundations and utility systems.',
    details: {
      client: 'Texas Manufacturing Inc',
      duration: '36 months',
      value: '$25M',
      scope: ['Heavy Construction', 'Specialized Foundations', 'Industrial Systems']
    }
  },
  {
    id: 'metro-bridge-project',
    title: 'Metro Bridge Infrastructure',
    location: 'Downtown, Atlanta, GA 30309',
    date: 'November 2023',
    category: 'infrastructure',
    tags: ['Bridge', 'Infrastructure', 'Public Works'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Major bridge infrastructure project connecting downtown districts with modern engineering solutions.',
    details: {
      client: 'Atlanta Department of Transportation',
      duration: '42 months',
      value: '$35M',
      scope: ['Bridge Engineering', 'Traffic Management', 'Environmental Compliance']
    }
  },
  {
    id: 'luxury-estates',
    title: 'Luxury Estates Development',
    location: 'Beverly Hills, CA 90210',
    date: 'October 2023',
    category: 'residential',
    tags: ['Luxury', 'Custom Homes', 'High-End'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Exclusive luxury estate development with custom architectural design and premium finishes.',
    details: {
      client: 'Beverly Hills Estates',
      duration: '24 months',
      value: '$12M',
      scope: ['Custom Architecture', 'Luxury Finishes', 'Landscape Design']
    }
  }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (for homepage)
export const getFeaturedProjects = (limit: number = 4): Project[] => {
  return projects.slice(0, limit);
};
