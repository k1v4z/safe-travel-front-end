import React, { useEffect, useState } from 'react';
import Modal from './Modal';

interface CustomComment {
    id: number;
    user: string;
    profilePic: string;
    content: string;
    commentDate: string;
}

interface CommentBoxProps {
    postId: number;
    comments: CustomComment[];
    onClose: () => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ postId, comments, onClose }) => {
    const [commentList, setCommentList] = useState<CustomComment[]>(comments);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3001/comments?postId=${postId}`)
            .then((response) => response.json())
            .then((data: CustomComment[]) => setCommentList(data))
            .catch((error) => console.error('Error fetching comments:', error));
    }, [postId]);

    const handleShowModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                <i className="fas fa-image text-gray-500 mr-2"></i>
                <input
                    type="text"
                    placeholder="Type your comment"
                    className="flex-grow p-2 rounded-lg border border-gray-300"
                />
            </div>
            <div className="mt-4">
                {commentList.slice(0, 2).map((comment) => (
                    <div key={comment.id} className="flex items-center mb-4">
                        <img
                            src={comment.profilePic}
                            alt={`${comment.user}'s profile`}
                            className="rounded-full w-10 h-10 mr-3"
                        />
                        <div>
                            <span className="font-bold">{comment.user}</span>
                            <p>{comment.content}</p>
                            <p className="text-gray-500 text-sm">{comment.commentDate}</p>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <Modal
                    comments={comments}
                    onClose={handleShowModal} 
                    postId={0} 
                    user={''} 
                    profilePic={''} 
                    content={''} 
                    likes={0} 
                    images={[]} 
                />
            )}
        </div>
    );
};

export default CommentBox;