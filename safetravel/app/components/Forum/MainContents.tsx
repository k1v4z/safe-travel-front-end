import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import AddYourPost from "./AddYourPost";
import { toast } from "react-toastify";
import useAuth from "@/app/hooks/useAuth";

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

function MainContents() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [page, setPage] = useState(1);
  const [newPost, setNewPost] = useState<{
    title: string;
    content: string;
    user_id: string;
    image_urls: string[];
    privacy: string;
  }>({
    title: "",
    content: "",
    user_id: "user_12345", // Default user_id
    image_urls: [], // Start with an empty array for image URLs
    privacy: "Private",
  });

  const [loading, setLoading] = useState(false);
  const [postSubmitting, setPostSubmitting] = useState(false);

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1);
    await fetchPosts(page + 1, 4);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedImages(Array.from(e.target.files));
    }
  };

  

  const uploadImages = async (): Promise<string[]> => {
     let imageUrls = [];

    for (const image of selectedImages) {
      const formData = new FormData();
      formData.append("images", image);
      formData.append("folderName", "posts");

      try {
        const response = await fetch("http://localhost:8080/api/v1/upload", {
          method: "POST",
          credentials: "include",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();

          console.log("Image uploaded:", data);
          
          imageUrls.push(data.imageUrl[0].url); 
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    return imageUrls;
  };

  const fetchPosts = async (page = 1, limit = 4) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}&limit=${limit}`,
        {
          method: "GET", 
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch posts. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data?.posts?.posts) {
        setPostsData((prevPosts) => {
          const newPosts: Post[] = data.posts.posts;
          const filteredPosts = newPosts.filter(
            (newPost: Post) => !prevPosts.some((post) => post.id === newPost.id)
          );
          return [...prevPosts, ...filteredPosts];
        });
      } else {
        console.error("No posts found in the response.");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async () => {
    if (postSubmitting) return;
    setPostSubmitting(true);

    const imageUrls = await uploadImages();
    console.log("Image URLs:", imageUrls);
    
    console.log("New Post Data:", newPost); // Debug post data
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          title: newPost.title || "",
          content: newPost.content || "",
          user_id: newPost.user_id || "user_12345",
          image_urls: imageUrls || [], // Send image URLs
          privacy: newPost.privacy || "Private",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create post");
      }

      const data = await response.json();
      console.log("Post created:", data);
      toast.success("Bài viết đã được đăng!");
      setIsModalOpen(false);
      setNewPost({
        title: "",
        content: "",
        user_id: "user_12345",
        image_urls: [], // Reset the image URLs array after post creation
        privacy: "Private",
      });

      setPostsData((prevPosts) => [data.post, ...prevPosts]); // Prepend the newly created post
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Không thể đăng bài. Vui lòng thử lại.");
    } finally {
      setPostSubmitting(false);
    }
  };

  return (
    <main className="ml-5 mr-5 overflow-y-auto bg-[#D2FBFD] mx-auto">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <button className="search-container cursor-pointer">
          <img
            src="pictures/logo-find.png"
            alt="Search Icon"
            className="absolute z-10 mt-1 ml-0.5"
          />
          <input
            type="text"
            placeholder="Search in User"
            className="border-2 border-gray-300 px-4 py-2 rounded-lg search-input relative pl-10 bg-[#D2FBFD]"
          />
        </button>
      </div>

      {/* Share Something Box */}
      <div className="mb-4">
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-start">
          <div
            className="flex flex-row w-full border-b-2 border-b-slate-200"
            onClick={() => setIsModalOpen(true)} // Open modal
          >
            <img
              src="/pictures/ava.png"
              alt="User profile picture"
              className="rounded-full w-12 h-12 mr-3 mb-3"
            />
            <textarea
              placeholder="Share something :D"
              className="w-full h-full border-none text-base font-medium cursor-pointer"
              readOnly
            />
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-2">
            <div className="flex space-x-2 gap-2">
              <button>
                <img src="pictures/Webcam-Video.png" alt="" />
              </button>
              <button>
                <img src="pictures/picture.png" alt="" />
              </button>
              <button>
                <img src="pictures/Smiley-Happy.png" alt="" />
              </button>
            </div>
            <button
              className="bg-[#326D7B] text-white px-6 py-2 rounded-full mt-2"
              onClick={() => {
                setIsModalOpen(true);
                console.log("Post image URL", newPost.image_urls);
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Display Posts */}
      {loading ? (
        <p>Loading posts...</p>
      ) : postsData.length > 0 ? (
        postsData.map((post) => (
          <Posts key={post.id} post={post} setPostsData={setPostsData} />
        ))
      ) : (
        <p>No posts available.</p>
      )}

      <div className="flex justify-center mt-4">
        <button
          onClick={handleLoadMore}
          className="bg-[#326D7B] text-white px-6 py-2 rounded-full"
        >
          Xem thêm
        </button>
      </div>

      {/* Modal Create Post */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6">
            {/* Header */}
            <div className="flex justify-center items-center border-b pb-2 mb-4 relative">
              <h2 className="text-lg font-bold">Create Post</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 absolute right-2 px-3 py-1 bg-gray-200 rounded-full"
              >
                ✖
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-start mb-4">
              <img
                src="/pictures/ava.png"
                alt="User profile"
                className="rounded-full w-12 h-12 mr-3"
              />
              <div>
                <h3 className="font-bold">Ashley Tran</h3>
              </div>
            </div>

            {/* Input Title */}
            <input
              type="text"
              placeholder="Post Title"
              className="w-full rounded-lg p-2 mb-4"
              value={newPost.title}
              onChange={(e) =>
                setNewPost((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />

            {/* Input Content */}
            <textarea
              placeholder="How was your trip"
              className="w-full h-20 rounded-lg p-2 mb-4"
              value={newPost.content}
              onChange={(e) =>
                setNewPost((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
            ></textarea>

            {/* Add to Post */}
            {/* <AddYourPost
              setImageUrls={(imageUrls: string[]) => {
                setNewPost((prevPost) => ({
                  ...prevPost,
                  image_urls: imageUrls,
                }));
              }}
            /> */}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />

            {/* Post Button */}
            <button
              className="bg-[#326D7B] text-white px-6 py-2 rounded-full mt-4"
              onClick={handleCreatePost}
            >
              Post
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default MainContents;
