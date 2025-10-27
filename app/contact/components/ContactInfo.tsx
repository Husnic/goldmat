export default function ContactInfo() {
  const contactDetails = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Office Location",
      details: ["123 Construction Ave", "Building District", "Phoenix, AZ 85001"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Numbers",
      details: ["Main: (555) 123-4567", "Emergency: (555) 987-6543", "Fax: (555) 123-4568"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Addresses",
      details: ["info@goldmatconstruction.com", "projects@goldmatconstruction.com", "support@goldmatconstruction.com"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Business Hours",
      details: ["Monday - Friday: 7:00 AM - 6:00 PM", "Saturday: 8:00 AM - 4:00 PM", "Sunday: Emergency Only"]
    }
  ];

  return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[var(--primary)] mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-[var(--secondary)] leading-relaxed">
            Get in touch with our team through any of the following channels.
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 border-r-4 border-b-4 border-[var(--accent)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-[var(--accent)] mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-[var(--primary)] mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-1">
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-[var(--secondary)]">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-8 animate-fade-in">
          <div className="bg-gray-200 h-64 flex items-center justify-center border-r-4 border-b-4 border-[var(--accent)]">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-500">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
