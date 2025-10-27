'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[var(--primary)] mb-4">
            Start Your Project
          </h2>
          <p className="text-lg text-[var(--secondary)] leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--primary)] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[var(--accent)] focus:outline-none transition-colors duration-300"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--primary)] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[var(--accent)] focus:outline-none transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[var(--primary)] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[var(--accent)] focus:outline-none transition-colors duration-300"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[var(--primary)] mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[var(--accent)] focus:outline-none transition-colors duration-300"
                placeholder="Your company name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-[var(--primary)] mb-2">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[var(--accent)] focus:outline-none transition-colors duration-300"
            >
              <option value="">Select project type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--primary)] mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[var(--accent)] focus:outline-none transition-colors duration-300 resize-vertical"
              placeholder="Tell us about your project requirements, timeline, and any specific details..."
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary text-lg py-4 hover:transform hover:translateY(-1px) transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
