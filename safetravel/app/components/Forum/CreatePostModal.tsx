import React, { useState } from 'react';

interface CreatePostModalProps {
    onClose: () => void;
    onPost: (content: string) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onClose, onPost }) => {
    const [content, setContent] = useState('');

    const handlePost = () => {
        if (content.trim()) {
            onPost(content);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Create Post</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg resize-none mb-4"
                    rows={4}
                    placeholder="How was your trip?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <i className="fas fa-image text-gray-500"></i>
                        <i className="fas fa-video text-gray-500"></i>
                        <i className="fas fa-smile text-gray-500"></i>
                    </div>
                    <button
                        onClick={handlePost}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
