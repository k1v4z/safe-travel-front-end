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
        <main className="w-3/4 p-4 ml-1/4 overflow-y-auto bg-[#D2FBFD] mx-auto">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center bg-[#D2FBFD] p-2 rounded-lg shadow-sm" style={{ width: '282px' }}>
                    <input
                        type="text"
                        placeholder="Search in User"
                        className="flex-grow p-1 rounded-lg border border-gray-300 bg-[#D2FBFD]"
                    />
                    <i className="fas fa-search text-gray-500 ml-2"></i>
                </div>
                <i className="fas fa-bell text-gray-500"></i>
            </div>
            <div className="mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                    <img src="/pictures/ava.png" alt="User profile picture" className="rounded-full w-12 h-12 mr-3" />
                    <div className="flex-grow">
                        <textarea placeholder="Share something :D" className="w-full p-2 rounded-lg border border-gray-300 mb-2"
                            //onClick={handleOpenModal}
                            readOnly
                        />
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2">
                                <i className="fas fa-video text-gray-500"></i>
                                <i className="fas fa-image text-gray-500"></i>
                                <i className="fas fa-smile text-gray-500"></i>
                            </div>
                            <button className="bg-[#326D7B] text-white px-4 py-2 rounded-lg mt-2">Post</button>
                        </div>
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
