import React, { useState } from 'react';

interface PostProps {
    likes: number;
}

const Post2: React.FC<PostProps> = ({ likes }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            {/* User Profile and Post Content */}
            <div className="flex items-center mb-4">
                <img
                    src="/pictures/ava.png"
                    alt="User profile picture"
                    className="rounded-full w-12 h-12 mr-3"
                />
                <div>
                    <span className="font-bold">@travellover_88</span>
                    <p>
                        Discovering the hidden gems of the world 🌍✨ From the serene beaches
                        of Bali to the majestic mountains of Nepal, every corner offers a
                        new adventure waiting to be explored. #TravelGoals
                    </p>
                </div>
            </div>

            {/* Post Images */}
            <div className="flex mb-4">
                <img
                    src="/pictures/postimg.png"
                    alt="A beautiful beach view with clear water"
                    className="w-1/2 rounded-lg mr-2"
                />
                <img
                    src="/pictures/postimg2.png"
                    alt="A view of the mountains covered in snow"
                    className="w-1/2 rounded-lg"
                />
            </div>

            {/* Likes and Comments */}
            <div className="flex justify-between text-gray-500 mb-4">
                <span>
                    <i className="fas fa-comment"></i> 2 comments
                </span>
            </div>

            {/* Comments Section */}
            <div className="mb-4">
                <div className="flex items-start mb-2">
                    <img
                        src="/pictures/ava.png"
                        alt="User profile picture"
                        className="rounded-full w-10 h-10 mr-3"
                    />
                    <div>
                        <span className="font-bold">@explorer_123</span>{' '}
                        <span className="text-gray-500">10 min</span>
                        <p>Looks incredible! Definitely adding this to my bucket list 😍</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <img
                        src="/pictures/ava.png"
                        alt="User profile picture"
                        className="rounded-full w-10 h-10 mr-3"
                    />
                    <div>
                        <span className="font-bold">@themountainking</span>{' '}
                        <span className="text-gray-500">5 min</span>
                        <p>Wow, I need to go there one day! 🏔️</p>
                    </div>
                </div>
            </div>

            {/* Comment Input */}
            <div className="flex items-center bg-gray-100 p-1 rounded-lg border border-gray-300 h-[42px] flex-grow">
                <i className="fas fa-image text-gray-500 mr-2"></i>
                <i className="fa-regular fa-face-smile text-gray-500 mr-2"></i>
                <input
                    type="text"
                    placeholder="Type your comment"
                    className="flex-grow w-full p-2 bg-gray-100 outline-none"
                />
            </div>

            {/* See All Comments */}
            <div
                onClick={handleShowModal}
                className="text-center mt-2 text-gray-500 cursor-pointer"
            >
                See all comments
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center h-300" onClick={handleCloseModal}>
                    <div className="bg-white p-6 rounded-lg w-[857px] h-3/4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold mx-auto">@travellover_88's Post</h2>
                            <button onClick={handleCloseModal} className="text-gray-500">&times;</button>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src="/pictures/ava.png" alt="User profile picture" className="rounded-full w-12 h-12 mr-3" />
                            <div>
                                <span className="font-bold">@travellover_88</span>
                                <p>Discovering the hidden gems of the world 🌍✨ From the serene beaches
                                    of Bali to the majestic mountains of Nepal, every corner offers a
                                    new adventure waiting to be explored. #TravelGoals</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <img src="/pictures/postimg.png" alt="A couple standing on a trail in a lush forest" className="w-1/2 rounded-lg mr-2" />
                            <img src="/pictures/postimg2.png" alt="A serene forest stream with clear water" className="w-1/2 rounded-lg" />
                        </div>
                        <div className="flex justify-between text-gray-500 mb-4">
                            <span><i className="fas fa-heart"></i> {likes} likes</span>
                            <span><i className="fas fa-comment"></i> 2 comments</span>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-start mb-2">
                                <img src="/pictures/ava.png" alt="User profile picture" className="rounded-full w-10 h-10 mr-3" />
                                <div>
                                    <span className="font-bold">@themountainking</span> <span className="text-gray-500">5 min</span>
                                    <p>Wow, I need to go there one day! 🏔️</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <img src="/pictures/ava.png" alt="User profile picture" className="rounded-full w-10 h-10 mr-3" />
                                <div>
                                    <span className="font-bold">@explorer_123</span> <span className="text-gray-500">10 min</span>
                                    <p>Looks incredible! Definitely adding this to my bucket list 😍</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <img src="/pictures/ava.png" alt="User profile picture" className="rounded-full w-10 h-10" />
                            <div className="flex items-center bg-gray-100 p-1 rounded-lg border border-gray-300 h-[42px] flex-grow">
                                <i className="fas fa-image text-gray-500 mr-2"></i>
                                <i className="fa-regular fa-face-smile text-gray-500 mr-2"></i>
                                <input
                                    type="text"
                                    placeholder="Type your comment"
                                    className="flex-grow w-full p-2 bg-gray-100 outline-none"
                                />
                                <button
                                    className="ml-2 px-3 py-1 rounded-lg text-[#326D7B] hover:bg-[#326D7B] hover:text-white transition duration-300"
                                >
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Post2;
