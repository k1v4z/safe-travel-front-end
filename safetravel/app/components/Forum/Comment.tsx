import React from 'react';

interface CommentProps {
  user?: {
    username?: string;
  };
  content: string;
  createdAt: string;
}

function Comment({ user, content, createdAt }: CommentProps) {
  return (
    <div className="flex items-start mb-3">
      <img
        src="/pictures/ava.png"
        alt="User profile picture"
        className="rounded-full w-10 h-10 mr-3"
      />
      <div>
        <span className="font-bold mr-3">
          @{user?.username || "Unknown User"}
        </span>
        <span className="text-gray-500">
          {new Date(createdAt).toLocaleTimeString()}
        </span>
        <p className="mt-2">{content}</p>
      </div>
    </div>
  );
}

export default Comment;
