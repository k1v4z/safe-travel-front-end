import React from 'react';
import CommentBox from './CommentBox';

interface CustomComment {
    id: number;
    user: string;
    profilePic: string;
    content: string;
    commentDate: string;
}

interface ModalProps {
    postId: number;
    user: string;
    profilePic: string;
    content: string;
    likes: number;
    comments: CustomComment[];
    images: string[];
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ postId, user, profilePic, content, likes, comments, images, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center" onClick={onClose}>
            <div 
                className="bg-white p-6 rounded-lg w-[857px] h-3/4 overflow-y-auto" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{user}'s Post</h2>
                    <button onClick={onClose} className="text-gray-500">&times;</button>
                </div>
                <div className="flex items-center mb-4">
                    <img 
                        src={profilePic} 
                        alt={`${user}'s profile`}  
                        className="rounded-full w-12 h-12 mr-3" 
                    />
                    <div>
                        <span className="font-bold">{user}</span>
                        <p>{content}</p>
                    </div>
                </div>
                <div className="flex mb-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Post image ${index + 1}`}
                            className="w-1/2 rounded-lg mr-2"
                        />
                    ))}
                </div>
                <div className="flex justify-between text-gray-500 mb-4">
                    <span>
                        <i className="fas fa-heart"></i> {likes} likes
                    </span>
                    <span>
                        <i className="fas fa-comment"></i> {comments.length} comments
                    </span>
                </div>
                <CommentBox postId={postId} comments={comments} onClose={onClose}/>
            </div>
        </div>
    );
};

export default Modal;
