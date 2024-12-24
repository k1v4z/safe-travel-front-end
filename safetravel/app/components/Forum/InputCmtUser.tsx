import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface InputCmtUserProps {
  postId: string; // ID of the post for which the comment is added
  onCommentAdded: (newComment: any) => void; // Callback to update comments in the parent component
}

function InputCmtUser({ postId, onCommentAdded }: InputCmtUserProps) {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async () => {
    if (!comment.trim()) {
      toast.error('Comment cannot be empty.');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/post/${postId}`, {
        method: 'POST',
        credentials: 'include', // For cookies/session handling
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: comment }), // Corrected payload key
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        throw new Error(errorData.message || 'Failed to add comment');
      }

      const newComment = await response.json();
      onCommentAdded(newComment); // Notify parent component
      setComment(''); // Clear input field
      toast.success('Comment added successfully!');
    } catch (error) {
      console.error('Error adding comment:', error);
      toast.error('An error occurred while adding the comment.');
    }
  };

  return (
    <div className="w-full -ml-1">
      <div className="w-full mt-3 pl-5 pr-5">
        <div className="search-container cursor-pointer w-full relative -mt-2">
          <img src="pictures/picture.png" alt="" className="absolute z-50 mt-3.5 ml-3" />
          <img src="pictures/Smiley-Happy.png" alt="" className="absolute z-50 mt-3 ml-10" />
          <input
            type="text"
            placeholder="Type your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="rounded-lg border border-gray-300 w-full p-2 pl-16 pr-12"
          />
          <img
            src="pictures/Sent.png"
            alt=""
            className="absolute z-50 -mt-8 right-3 cursor-pointer"
            onClick={handleCommentSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default InputCmtUser;
