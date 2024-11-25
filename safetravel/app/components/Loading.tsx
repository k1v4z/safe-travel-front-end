"use client";
import React from "react";

export default function LoadingPage() {
  return (
    <div className="bg-[#D2FBFD]">
      <div className="flex items-center justify-center h-screen ">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto">
            {/* Hiệu ứng vòng tròn */}
            <div className="absolute w-full h-full rounded-full border-4 border-blue-200 animate-spin"></div>
            <div className="absolute w-full h-full rounded-full border-4 border-blue-500 border-t-transparent animate-spin-fast"></div>

            {/* Biểu tượng */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="pictures/Check.png"
                alt="Loading Icon"
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* Văn bản */}
          <p className="mt-8 text-lg text-sky-600">
            Analyzing weather conditions to suggest the best activities...
          </p>
        </div>
      </div>
    </div>
  );
}
