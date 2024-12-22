import React from 'react';
import Posts from './Posts';
import PostUser from './PostUser';
import InputCmtUser from './InputCmtUser';
import Comment from './Comment';

interface ModalsProps {
    onClose: () => void; // Định nghĩa kiểu cho prop onClose
}

const Modals: React.FC<ModalsProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 p-16">
            <div className="bg-white w-11/12  md:w-2/3 lg:w-1/2 rounded-xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="flex justify-center items-center p-4 border-b relative">
                    <h2 className="text-lg font-bold">@iluvtravel_22's Post</h2>
                    <button
                        onClick={onClose} // Đóng modal khi nhấn
                        className="text-gray-500 hover:text-gray-700 absolute right-3 px-3 py-1 bg-gray-200 rounded-full"
                    >
                        ✖
                    </button>
                </div>
                
                {/* Nội dung Posts */}
                <div className="p-4 overflow-y-auto max-h-[80vh]">
                    <PostUser />
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
                <div className='flex flex-row items-start justify-start '>
                    <img
                        src="/pictures/ava.png" 
                        className="rounded-full w-10 h-10 ml-4 mb-3 "
                    />
                    <InputCmtUser/>
                </div>
            </div>
            </div>
    );
};

export default Modals;
