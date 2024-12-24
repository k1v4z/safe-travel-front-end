import React, { useState, useEffect } from 'react';
import PostUser from './PostUser';
import InputCmtUser from './InputCmtUser';
import Comment from './Comment';

interface ModalsProps {
  onClose: () => void; // Callback to close the modal
  post: {
    id: string;
    user: {
      username: string;
    };
    content: string;
    title: string;
    post_images: {
      id: string;
      image_url: string;
    }[];
  }; // Post data to display inside the modal
}
interface Comment {
  id: string;
  content: string;
  user: {
    username: string;
  };
  createdAt: string;
}

const Modals: React.FC<ModalsProps> = ({ onClose, post }) => {
  const { title, user, content, post_images } = post;
  const [comments, setComments] = useState<Comment[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 2; // Number of comments per page

const fetchComments = async (pageNumber: number) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/comment/post/${post.id}?page=${pageNumber}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }

    const data = await response.json();

    setComments((prevComments) => {
      // Use a Set to track unique IDs
      const existingIds = new Set(prevComments.map((comment) => comment.id));
      const newComments = data.comments.filter((comment: Comment) => !existingIds.has(comment.id));
      return [...prevComments, ...newComments];
    });
    

    if (data.comments.length < limit) {
      setHasMore(false); // No more comments to load
    }
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};


  useEffect(() => {
    fetchComments(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full md:w-2/3 lg:w-1/2 rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">@{user.username}'s Post</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 px-2 py-1 bg-gray-200 rounded-full"
          >
            ✖
          </button>
        </div>

        {/* Post Details */}
        <div className="p-4 overflow-y-auto max-h-[70vh]">
          <PostUser
            id={post.id}
            username={user.username}
            content={content}
            title={title}
            images={post_images.map((img) => img.image_url)}
            onDelete={() => {}}
            onUpdate={() => {}}
          />

          {/* Render Comments */}
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}

          {/* Load More Button */}
          {hasMore && (
            <button
              onClick={handleLoadMore}
              className="text-blue-500 mt-4 hover:underline"
            >
              See more
            </button>
          )}
        </div>

        {/* Add Comment Section */}
        <div className="flex items-center p-4 border-t">
          <img
            src="/pictures/ava.png"
            alt="User Avatar"
            className="rounded-full w-10 h-10 mr-3"
          />
          <InputCmtUser postId={post.id} onCommentAdded={(newComment) => setComments((prev) => [newComment, ...prev])} />
        </div>
      </div>
    </div>
  );
};

export default Modals;
