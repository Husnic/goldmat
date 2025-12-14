"use client";

import { useState } from "react";
import Image from "next/image";
import { type Project } from "../../../data/projects";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use gallery from project data or fallback to placeholder images
  const galleryImages = project.gallery || [
    project.image,
    "/filler.png",
    "/filler.png",
    "/filler.png",
    "/filler.png",
    "/filler.png",
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full mb-4">
                <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
                  Gallery
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Project Gallery
              </h2>
              <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                Take a closer look at the construction process and final results
                of this project.
              </p>
            </div>

            {/* Main Featured Image */}
            <div className="mb-8">
              <div
                className="relative h-96 lg:h-[500px] cursor-pointer overflow-hidden rounded-3xl group"
                onClick={() => openLightbox(project.image)}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} - Main view`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  Click to enlarge
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {galleryImages.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl group"
                  onClick={() => openLightbox(image)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Gallery image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full">
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl"
              />
            </div>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
