"use client";
import React, { useState } from "react";
export default function SlackBotConfigForm() {
  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Slack Bot Config
      </h2>
      <img
        src="https://thumbs.bfldr.com/at/pl546j-7le8zk-btwjnu/v/2925183?expiry=1735012213&fit=bounds&height=400&sig=ODZkZWRjMzFhZjg0NjZiZTk5MTIyNjY3NGEyMDMwNDc3YTVjYzhlZg%3D%3D&width=550"
        alt="Slack Logo"
        className="w-44 h-20 mb-6"
      />
      <div className="w-full mb-4">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="channel-id"
        >
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
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="access-token"
        >
          Access Token
        </label>
        <input
          type="text"
          id="access-token"
          placeholder="Enter Access Token"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>Click Button add to slack to get access token</div>
      <a href="https://slack.com/oauth/v2/authorize?client_id=8003790323031.8015557166773&scope=channels:join,chat:write&user_scope=">
        <img
          alt="Add to Slack"
          height="40"
          width="139"
          src="https://platform.slack-edge.com/img/add_to_slack.png"
          srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
        />
      </a>
      <button className="bg-[#00C9C8] mt-5 text-white px-6 py-2 rounded-lg hover:bg-[#00A6A6] transition duration-200">
        Update
      </button>
    </div>
  );
}
