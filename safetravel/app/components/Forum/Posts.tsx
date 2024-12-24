import React, { useState } from 'react';
import Comment from './Comment';
import Modals from './Modals';
import PostUser from './PostUser';  // Import PostUser
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

function Posts({ post, setPostsData }: { post: Post; setPostsData: React.Dispatch<React.SetStateAction<Post[]>> }) {  // Type the 'post' prop here
    const [showModal, setShowModal] = useState(false); // Manage modal state

    // Handle delete action in Posts component
    const handleDelete = (id: string) => {
        setPostsData((prevPosts) => prevPosts.filter((p) => p.id !== id));
    };
    const handleUpdatePost = (updatedPost: { id: string; title: string; content: string; image_urls: string[] }) => {
        setPostsData((prevPosts) =>
          prevPosts.map((post) =>
            post.id === updatedPost.id ? { ...post, ...updatedPost } : post
          )
        );
      };
      
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            {/* Pass the post data down to PostUser as props, including onDelete */}
            <PostUser
                key={post.id}
                id={post.id}
                username={post.user ? post.user.username : "Unknown"}
                content={post.content}
                title={post.title}
                images={post.post_images?.map((img) => img.image_url) || []} // Map to array of URLs
                onDelete={handleDelete} // Pass onDelete 
                onUpdate={handleUpdatePost}
            />

            <Comment />
            <InputCmt />
            <div 
                className="flex items-center justify-center text-center mt-2 text-gray-500 cursor-pointer"
                onClick={() => setShowModal(true)} // Show modal when clicked
            >
                See all comments
            </div>

            {/* Show modal if showModal is true */}
            {showModal && <Modals onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default Posts;
