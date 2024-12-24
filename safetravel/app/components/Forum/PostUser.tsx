import React, { useState } from 'react';
import { toast } from "react-toastify";

interface PostUserProps {
  id: string;
  username: string;
  content: string;
  title: string;
  images: string[];
  onDelete: (id: string) => void; // Callback for post deletion
  onUpdate: (updatedPost: { id: string; title: string; content: string; image_urls: string[] }) => void; // Callback for updating post
}

function PostUser({ id, username, content, title, images, onDelete, onUpdate }: PostUserProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const [newTitle, setNewTitle] = useState(title);
  const [newImages, setNewImages] = useState(images);

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setIsMenuOpen(false); // Close menu after choosing Edit
  };

  // Save changes (Update post)
  const handleSave = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTitle,
          content: newContent,
          image_urls: newImages,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error updating post:', errorData);
        throw new Error(errorData.message || 'Failed to update post');
      }

      // Notify parent component about the update
      onUpdate({
        id,
        title: newTitle,
        content: newContent,
        image_urls: newImages,
      });

      toast.success('Post updated successfully!');
      setIsEditing(false); // Close editing mode
    } catch (error) {
      console.error('Error updating post:', error);
      alert('An error occurred while updating the post.');
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setNewContent(content);
    setNewTitle(title);
    setNewImages(images);
    setIsEditing(false);
  };

  // Delete post
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`, {
          method: 'DELETE',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error deleting post:', errorData);
          throw new Error(errorData.message || 'Failed to delete post');
        }

        toast.success('Post deleted successfully!');
        onDelete(id); // Notify parent to remove the post
        setIsMenuOpen(false); // Close menu after deleting
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('An error occurred while deleting the post.');
      }
    }
  };

  return (
    <div className="pr-2 relative">
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-start justify-start">
          <img
            src="/pictures/ava.png"
            className="rounded-full w-12 h-12 mr-3 mb-3"
            alt="User Avatar"
          />
          <div>
            <div className="font-bold text-xl">@{username}</div>
          </div>
        </div>

        {/* Menu Button */}
        <div className="relative -top-4">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-2xl text-black px-2 py-1 rounded-full"
          >
            ...
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white border shadow-md rounded-md w-40">
              <button
                onClick={handleEditToggle}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Edit or View Mode */}
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="font-semibold text-xl mb-2 w-full"
          />
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full mb-2"
          />
          <div className="mb-4">
            {newImages.map((image, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={image}
                  onChange={(e) =>
                    setNewImages(
                      newImages.map((img, idx) =>
                        idx === index ? e.target.value : img
                      )
                    )
                  }
                  className="w-full mb-2"
                  placeholder={`Image URL ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleSave}
              className="bg-[#326D7B] text-white px-4 py-2 rounded-full"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="font-semibold text-xl">{title}</div>
          <p>{content}</p>
          <div className="flex flex-row mb-4">
          {images.length > 0 ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={`object-cover m-2 ${
                  images.length === 1
                    ? "w-full h-auto"  // For 1 image: Full width and auto height
                    : images.length === 2
                    ? "w-1/2 h-48"  // For 2 images: 50% width, fixed height
                    : images.length === 3
                    ? "w-1/3 h-48"  // For 3 images: 33% width, fixed height
                    : "w-1/4 h-48"  // For 4+ images: 25% width, fixed height
                }`}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>

        </div>
      )}

      <div className="flex flex-row pb-5 border-b-2 border-b-slate-200 mb-3">
        <div className="flex flex-row mr-7">
          <img src="/pictures/Hearts.png" alt="" className="mr-2" />
          <p>123 likes</p>
        </div>
        <div className="flex flex-row mr-7">
          <img src="/pictures/Chat.png" alt="" className="mr-2" />
          <p>20 comments</p>
        </div>
      </div>
    </div>
  );
}

export default PostUser;
