import React, { useState } from 'react';

interface PostProps {
    likes: number;
}

const Post1: React.FC<PostProps> = ({ likes }) => {
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
                    <span className="font-bold">@iluvtravel_22</span>
                    <p>
                        A scenic hike through the lush trails of Bach Ma National Park 🌿✨
                        Surrounded by vibrant greenery, cascading waterfalls, and tranquil
                        forest paths, this adventure is perfect for nature lovers and outdoor
                        enthusiasts.
                    </p>
                </div>
            </div>

            {/* Post Images */}
            <div className="flex mb-4">
                <img
                    src="/pictures/postimg.png"
                    alt="A couple standing on a trail in a lush forest"
                    className="w-1/2 rounded-lg mr-2"
                />
                <img
                    src="/pictures/postimg.png"
                    alt="A serene forest stream with clear water"
                    className="w-1/2 rounded-lg"
                />
            </div>

            {/*Comments */}
            <div className="flex justify-between text-gray-500 mb-4">
                <span className="ml-auto">
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
                        <span className="font-bold">@iluvcat_99</span>{' '}
                        <span className="text-gray-500">30 min</span>
                        <p>Awesome!!! Please share your itinerary 😍</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <img
                        src="/pictures/ava.png"
                        alt="User profile picture"
                        className="rounded-full w-10 h-10 mr-3"
                    />
                    <div>
                        <span className="font-bold">@bybycycleuncle</span>{' '}
                        <span className="text-gray-500">30 min</span>
                        <p>I will definitely come here!!! 😭</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-gray-100 p-1 rounded-lg border border-gray-300 h-[42px] flex-grow">
                <i className="fas fa-image text-gray-500 mr-2"></i>
                <i className="fa-regular fa-face-smile text-gray-500 mr-2"></i>
                <input
                    type="text"
                    placeholder="Type your comment"
                    className="flex-grow w-full p-2 bg-gray-100 outline-none"
                />
            </div>

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
                            <h2 className="text-xl font-bold mx-auto">@iluvtravel_22's Post</h2>
                            <button onClick={handleCloseModal} className="text-gray-500">&times;</button>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src="/pictures/ava.png" alt="User profile picture" className="rounded-full w-12 h-12 mr-3" />
                            <div>
                                <span className="font-bold">@iluvtravel_22</span>
                                <p>A scenic hike through the lush trails of Bach Ma National Park 🌿✨ Surrounded by vibrant greenery, cascading waterfalls, and tranquil forest paths, this adventure is perfect for nature lovers and outdoor enthusiasts.</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <img src="/pictures/postimg.png" alt="A couple standing on a trail in a lush forest" className="w-1/2 rounded-lg mr-2" />
                            <img src="/pictures/postimg2.png" alt="A serene forest stream with clear water" className="w-1/2 rounded-lg" />
                        </div>
                        <div className="flex justify-between text-gray-500 mb-4">
                            <span className="ml-auto"><i className="fas fa-comment"></i> 20 comments</span>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-start mb-2">
                                <img src="/pictures/ava.png" alt="User profile picture" className="rounded-full w-10 h-10 mr-3" />
                                <div>
                                    <span className="font-bold">@iluvcat_99</span> <span className="text-gray-500">30 min</span>
                                    <p>Awesome!!! Please share your itinerary 😍</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <img src="/pictures/ava.png" alt="User profile picture" className="rounded-full w-10 h-10 mr-3" />
                                <div>
                                    <span className="font-bold">@bybycycleuncle</span> <span className="text-gray-500">30 min</span>
                                    <p>I will definitely come here!!! 😭</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                            <i className="fas fa-image text-gray-500 mr-2"></i>
                            <i className="fa-regular fa-face-smile"></i>
                            <input type="text" placeholder="Type your comment" className="flex-grow p-2 rounded-lg border border-gray-300" >

                            </input>
                        </div> */}

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

export default Post1;
