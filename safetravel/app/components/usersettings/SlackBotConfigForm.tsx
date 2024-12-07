"use client";
import React, { useState } from "react";

export default function SlackBotConfigForm() {
  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-4 text-center">Slack Bot Config</h2>
      <img
        src="/pictures/slacklogo.png" 
        alt="Slack Logo"
        className="w-20 mb-6"
      />
      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="channel-id">
          Channel ID
        </label>
        <input
          type="text"
          id="channel-id"
          placeholder="Enter Channel ID"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="access-token">
          Access Token
        </label>
        <input
          type="text"
          id="access-token"
          placeholder="Enter Access Token"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <a
        href="https://api.slack.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline text-sm mb-4"
      >
        Visit here to explore how to add Slack bot docs
      </a>
      <button className="bg-[#00C9C8] text-white px-6 py-2 rounded-lg hover:bg-[#00A6A6] transition duration-200">
        Update
      </button>
    </div>
  );
};


