import React from 'react';

interface CommentProps {
  user?: {
    username?: string;
  };
  content: string;
  createdAt: string;
}

// Hàm tính toán thời gian hiển thị
function timeAgo(createdAt: string): string {
  const createdDate = new Date(createdAt);

  // Kiểm tra nếu thời gian không hợp lệ
  if (isNaN(createdDate.getTime())) {
    return "Invalid date"; // Nếu thời gian không hợp lệ
  }

  const now = new Date();
  const diffInMs = now.getTime() - createdDate.getTime();

  const diffInSeconds = Math.floor(diffInMs / 1000); // Tính số giây
  const diffInMinutes = Math.floor(diffInSeconds / 60); // Chuyển đổi từ giây sang phút

  // Nếu thời gian dưới 60 giây thì hiển thị "1 minute ago"
  if (diffInSeconds < 60) {
    return "1 minute ago";
  }

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  }

  // Nếu lớn hơn 7 ngày, hiển thị ngày cụ thể
  return createdDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function Comment({ user, content, createdAt }: CommentProps) {
  // Log để kiểm tra dữ liệu
  console.log("Rendering comment:", { user, content, createdAt });

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
        <span className="text-gray-500">{timeAgo(createdAt)}</span>
        <p className="mt-2">{content}</p>
      </div>
    </div>
  );
}

export default Comment;
