import React, { useCallback, useEffect, useState } from 'react';
import Modal from './Modal';

interface CustomComment{
    id: number;
    user: string;
    profilePic: string;
    content: string;
    commentDate: string;
}
interface PostProps {
    id: number;
    user: string;
    profilePic: string;
    content: string;
    likes: number;
    comments: CustomComment[];
    images: string[];
    onShowModal: () => void; 
}

const Post: React.FC<PostProps> = ({ id, user, profilePic, content, likes, comments = [], images, onShowModal }) => {
    const [likeCount, setLikeCount] = useState(likes);
    const [liked, setLiked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [commentList, setCommentList] = useState<Comment[]>([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3000/comments?postId=${id}`)
    //         .then((response) => response.json())
    //         .then((data: CustomComment[]) => setCommentList(data))
    //         .catch((error) => console.error('Error fetching comments:', error));
    // }, [id]);
    
    const handleLikeClick = useCallback(() => {
        setLikeCount((prevCount) => liked ? prevCount - 1 : prevCount + 1);
        setLiked((prevLiked) => !prevLiked);
    }, [liked]);

    const handleShowModal = useCallback(() => {
        setIsModalOpen((prevState) => !prevState);
    }, []);

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="flex items-center mb-4">
                <img
                    src={profilePic}
                    alt={`${user}'s profile`}
                    className="rounded-full w-12 h-12 mr-3"
                />
                <div>
                    <p>{user}</p>
                    <span className="font-bold">{user}</span>
                    <p>{content}</p>
                </div>
            </div>
            <div className="flex mb-4">
                {images.length > 0 && (
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
                )}
                <div className="flex justify-between text-gray-500 mb-4">
                    <span onClick={handleLikeClick} className="cursor-pointer">
                        <i className={`fas fa-heart ${liked ? 'text-red-500' : 'text-gray-500'}`}></i> {likeCount} likes
                    </span>
                    <span>
                        <i className="fas fa-comment"></i> {comments.length} comments
                    </span>
                </div>
                {commentList.length > 2 && (
                <div onClick={handleShowModal} className="text-center mt-2 text-blue-500 cursor-pointer">
                    See all comments
                </div>
            )}
                {/* {isModalOpen && (
                    <Modal
                        postId={id}
                        user={user}
                        profilePic={profilePic}
                        content={content}
                        likes={likeCount}
                        comments={commentList}
                        images={images}
                        onClose={handleShowModal}
                    />
                )} */}
            </div>
        </div>            
    );
};

export default Post;
