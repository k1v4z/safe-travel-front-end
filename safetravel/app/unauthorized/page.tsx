import React from 'react';
import { ShieldX, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8 flex justify-center">
          <ShieldX className="h-24 w-24 text-red-500" />
        </div>
        
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Access Denied</h1>
        
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-2">
            Sorry, you don&apos;t have permission to access this page.
          </p>
          <p className="text-gray-500">
            Please contact your administrator if you believe this is a mistake.
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;