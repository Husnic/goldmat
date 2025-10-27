"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of construction projects do you handle?",
      answer:
        "We specialize in residential, commercial, and industrial construction projects. Our expertise includes structural engineering, foundation work, building construction, and project management for developments of all sizes.",
    },
    {
      question: "Do you provide engineering and design services?",
      answer:
        "Yes, we offer comprehensive engineering and design services including structural engineering, architectural planning, and technical consulting. Our team works closely with clients from concept to completion.",
    },
    {
      question: "What is your approach to project management?",
      answer:
        "We follow a systematic approach with dedicated project managers, regular progress updates, quality control checkpoints, and transparent communication throughout the entire construction process.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. We are fully licensed, bonded, and insured. Our team holds all necessary certifications and we maintain comprehensive liability insurance for all our projects.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16 animate-slide-up">
          <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-[var(--primary)] mb-4 lg:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[var(--secondary)] max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our construction and
            engineering services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border-r-4 border-b-4 border-[var(--accent)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 lg:p-8 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-lg lg:text-xl font-heading font-semibold text-[var(--primary)] pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-[var(--secondary)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 lg:mt-16 animate-slide-up">
          <p className="text-lg text-[var(--secondary)] mb-6">
            Still have questions? We're here to help.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
