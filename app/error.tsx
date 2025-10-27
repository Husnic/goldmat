'use client';

import { useEffect } from 'react';
import { Metadata } from 'next';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* 3D Icon from Icons8 */}
        <div className="mb-8">
          <img 
            src="https://img.icons8.com/3d-fluency/200/warning-shield.png" 
            alt="Server Error" 
            className="mx-auto w-48 h-48"
          />
        </div>
        
        {/* Error Message */}
        <h1 className="text-6xl font-heading font-bold text-[var(--accent)] mb-4">
          500
        </h1>
        
        <h2 className="text-2xl font-heading font-semibold text-[var(--primary)] mb-4">
          Something Went Wrong
        </h2>
        
        <p className="text-[var(--secondary)] mb-8 leading-relaxed">
          We're experiencing technical difficulties. Our engineering team is working to resolve this issue. 
          Please try again in a few moments.
        </p>
        
        {/* Error Details (Development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <h3 className="text-sm font-semibold text-red-800 mb-2">Error Details:</h3>
            <p className="text-xs text-red-600 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-500 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <button 
            onClick={reset}
            className="btn-primary w-full"
          >
            Try Again
          </button>
          
          <a 
            href="/" 
            className="btn-secondary inline-block w-full"
          >
            Back to Home
          </a>
        </div>
        
        {/* Support Information */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-heading font-semibold text-[var(--primary)] mb-4 uppercase tracking-wider">
            Need Help?
          </h3>
          <p className="text-sm text-[var(--secondary)] mb-4">
            If this problem persists, please contact our technical support team.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <img 
                src="https://img.icons8.com/3d-fluency/24/phone.png" 
                alt="Phone" 
                className="w-5 h-5"
              />
              <a 
                href="tel:+2347061522038" 
                className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
              >
                +234-706-1522-038
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <img 
                src="https://img.icons8.com/3d-fluency/24/email.png" 
                alt="Email" 
                className="w-5 h-5"
              />
              <a 
                href="mailto:oyedibumathew@goldmatengineering.com" 
                className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
              >
                Technical Support
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-[var(--secondary)]">
              Goldmat Construction Engineering Services Limited
              <br />
              Professional Engineering Solutions Since 2010
            </p>
          </div>
        </div>
        
        {/* Status Indicator */}
        <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-[var(--secondary)]">
          <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></div>
          <span>Our team has been notified</span>
        </div>
      </div>
    </div>
  );
}
