import React, { useState } from 'react';
import Comment from './Comment';
import Modals from './Modals';
import PostUser from './PostUser';
import InputCmt from './InputCmt';

function Posts() {
    const [showModal, setShowModal] = useState(false); // Quản lý trạng thái hiển thị modal

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <PostUser/>
            <Comment/>
            <InputCmt/>
            <div 
                className="flex items-center justify-center text-center mt-2 text-gray-500 cursor-pointer"
                onClick={() => setShowModal(true)} // Hiển thị modal khi nhấn vào
            >
                See all comments
            </div>

            {/* Hiển thị modal nếu showModal là true */}
            {showModal && <Modals onClose={() => setShowModal(false)} />}
        </div>            
    );
}

export default Posts;
