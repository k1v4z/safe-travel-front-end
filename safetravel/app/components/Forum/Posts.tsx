import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import Modals from './Modals';
import PostUser from './PostUser';
import InputCmt from './InputCmt';

interface Post {
  id: string;
  user: {
    username: string;
  };
  content: string;
  title: string;
  post_images: {
    id: string;
    post_id: string;
    image_url: string;
  }[];
}

interface CommentType {
  id: string;
  content: string;
  user: {
    username: string;
  };
  createdAt: string; // Include createdAt to pass the timestamp to comment
}

function Posts({
  post,
  setPostsData,
}: {
  post: Post;
  setPostsData: React.Dispatch<React.SetStateAction<Post[]>>;
}) {
  const [showModal, setShowModal] = useState(false); // Manage modal state
  const [comments, setComments] = useState<CommentType[]>([]); // State for comments
  const [page, setPage] = useState(1); // Page state for pagination
  const [hasMore, setHasMore] = useState(true); // State to check if there are more comments to load

  // Fetch comments when the component is mounted or post changes
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/comment/post/${post.id}?limit=3&page=${page}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        
        // Append new comments only if they are not already in the list
        setComments((prevComments) => {
          const newComments = data.comments.map((comment: any) => ({
            id: comment.id,
            content: comment.content,
            user: comment.user,
            createdAt: comment.comment_date, // map the timestamp
          }));
          
          return [...prevComments, ...newComments];
        });

        // If fewer comments are returned, set hasMore to false
        if (data.comments.length < 3) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [post.id, page]); // Run when the post id or page changes

  // Handle delete action in Posts component
  const handleDelete = (id: string) => {
    setPostsData((prevPosts) => prevPosts.filter((p) => p.id !== id));
  };

  // Handle update action for a post
  const handleUpdatePost = (updatedPost: {
    id: string;
    title: string;
    content: string;
    image_urls: string[];
  }) => {
    setPostsData((prevPosts) =>
      prevPosts.map((p) =>
        p.id === updatedPost.id
          ? { ...p, title: updatedPost.title, content: updatedPost.content, post_images: updatedPost.image_urls.map((url) => ({ id: "", post_id: p.id, image_url: url })) }
          : p
      )
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      {/* Post Content */}
      <PostUser
        id={post.id}
        username={post.user?.username || "Unknown"}
        content={post.content}
        title={post.title}
        images={post.post_images?.map((img) => img.image_url) || []}
        onDelete={handleDelete}
        onUpdate={handleUpdatePost}
      />
      
      {/* Render Comments */}
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            user={comment.user}
            content={comment.content}
            createdAt={comment.createdAt} // Display createdAt with each comment
          />
        ))
      ) : (
        <div>No comments yet.</div> // Display message when no comments
      )}

      <InputCmt /> {/* Input to add new comment */}

      {/* View All Comments */}
      <div
        className="flex items-center justify-center text-center mt-2 text-gray-500 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        See all comments
      </div>

      {/* Modal for Detailed View */}
      {showModal && (
        <Modals
          onClose={() => setShowModal(false)}
          post={post} 
        />
      )}

    </div>
  );
}

export default Posts;
