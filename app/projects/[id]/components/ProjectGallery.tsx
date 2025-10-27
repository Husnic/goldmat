'use client';

import { useState } from 'react';
import { type Project } from '../../../data/projects';

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate additional gallery images based on the project
  const galleryImages = [
    project.image,
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 lg:mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[var(--primary)] mb-6">
              Project Gallery
            </h2>
            <p className="text-lg text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
              Take a closer look at the construction process and final results of this project.
            </p>
          </div>

          {/* Main Featured Image */}
          <div className="mb-8 animate-fade-in">
            <div 
              className="relative h-64 lg:h-96 cursor-pointer overflow-hidden border-r-4 border-b-4 border-[var(--accent)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
              onClick={() => openLightbox(project.image)}
            >
              <img
                src={project.image}
                alt={`${project.title} - Main view`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-sm">
                Click to enlarge
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {galleryImages.slice(1).map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square cursor-pointer overflow-hidden border-r-4 border-b-4 border-[var(--accent)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 w-10 h-10 flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
