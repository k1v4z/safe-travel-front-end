"use client"
import React, { useState } from 'react';
import Sidebar from '../components/Forum/Sidebar';
import MainContent from '../components/Forum/MainContent';
import Modal from '../components/Forum/Modal';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Post1 from '../components/Forum/Post1';
import Post2 from '../components/Forum/Post2';

const App: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [likes, setLikes] = useState(0);
    const [modalData, setModalData] = useState({ 
        postId: 0, 
        user: '', 
        profilePic: '', 
        content: '', 
        likes: 0, 
        comments: [], 
        images: []
    });

    const handleShowModal = (postData: any) => { 
        setModalData(postData); 
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    return (

        <div className="min-h-screen flex flex-col bg-[#D2FBFD]">
            {/* Header */}
            <Header />

            {/* Main Content Section */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-grow p-4 bg-[#D2FBFD]">
                    <MainContent
                        // onShowModal={handleShowModal}
                    />
                    
                </main>

                {/* Optional Right Section (if needed) */}
                <aside className="w-1/4 p-4 bg-white"></aside>
            </div>

            {/* Modal */}
            {showModal && <Modal {...modalData} onClose={handleCloseModal} />}

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default App;
