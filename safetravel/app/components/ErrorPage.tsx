// ErrorPage.tsx
import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-600">Error</h1>
      <p className="text-lg text-red-500">
        There was an error during the analysis. Please try again.
      </p>
    </div>
  );
};

export default ErrorPage;
