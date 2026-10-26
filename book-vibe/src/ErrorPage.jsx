import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        
        {/* Glowing Badge */}
        <span className="badge badge-error badge-outline mb-4 px-4 py-3 text-sm font-semibold uppercase tracking-wider">
          404 Error
        </span>

        {/* Big Bold Header */}
        <h1 className="text-6xl font-ext500 font-bold text-base-content mb-3 tracking-tight">
          Page not found
        </h1>

        {/* Descriptive Subtext */}
        <p className="text-base-content/60 text-base mb-8 leading-relaxed">
          Sorry, we couldn’t find the page you’re looking for. It might have been removed, renamed, or temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link 
            to="/" 
            className="btn btn-primary w-full sm:w-auto px-6 font-medium shadow-md"
          >
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-ghost w-full sm:w-auto px-6 font-medium"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;