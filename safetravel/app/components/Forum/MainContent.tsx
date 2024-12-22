import React, { useEffect, useState } from 'react';
import Post from './Post';
import CreatePostModal from './CreatePostModal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from './Modal';
import Post1 from './Post1';
import Post2 from './Post2';

interface PostData {
    id: number;
    user: string;
    profilePic: string;
    content: string;
    likes: number;
    comments: CustomComment[];
    images: string[];
}

interface CustomComment {
    id: number;
    user: string;
    profilePic: string;
    content: string;
    commentDate: string;
}

const MainContent: React.FC = () => {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [modalData, setModalData] = useState<PostData | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);


    const handleOpenModal = (post: PostData) => setModalData(post);
    const handleCloseModal = () => setModalData(null);
    const handlePostContent = (content: string) => {
        console.log('New Post:', content);
    };

    return (
        <main className="w-full ml-5 pr-10 overflow-y-auto bg-[#D2FBFD] mx-auto">
            <div className="flex justify-between items-center mb-4 ">
            <button className="search-container cursor-pointer ">
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
            <div className="mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-start">
                    <div className='flex flex-row w-full border-b-2 border-b-slate-200'>
                    <img src="/pictures/ava.png" alt="User profile picture" className="rounded-full w-12 h-12 mr-3 mb-3" />
                    <textarea placeholder="Share something :D" className="w-full h-full  border-none text-base font-semibold"
                        />
                    </div>
                    <div className="flex flex-row justify-between items-center w-full mt-2">
                            <div className="flex space-x-2 gap-2">
                                <button>
                                <i className="fas fa-video text-gray-500 text-xl"></i>
                                </button>
                                <button>
                                <i className="fas fa-image text-gray-500 text-xl"></i>
                                </button>
                                <button>
                                <i className="fas fa-smile text-gray-500 text-xl"></i>
                                </button>
                            </div>
                            <button className="bg-[#326D7B] text-white px-6 py-2 rounded-full mt-2">Post</button>
                    </div>
                </div>
                
            </div>
            <div className="mb-4">
                    <Post1 likes={0} />
                    <Post2 likes={0} />
                </div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    user={post.user}
                    profilePic={post.profilePic}
                    content={post.content}
                    likes={post.likes}
                    comments={post.comments}
                    images={post.images}
                    onShowModal={() => handleOpenModal(post)}
                />
            ))}
            {modalData && (
                <Modal
                    postId={modalData.id}
                    user={modalData.user}
                    profilePic={modalData.profilePic}
                    content={modalData.content}
                    likes={modalData.likes}
                    comments={modalData.comments}
                    images={modalData.images}
                    onClose={handleCloseModal}
                />
            )}
        </main>
    );
};

export default MainContent;
