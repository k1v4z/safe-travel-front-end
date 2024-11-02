"use client";
import React from 'react';
import Image from 'next/image';

// Định nghĩa kiểu cho props
interface FormProps {
    closeForm: () => void;  // closeForm là một hàm không có tham số và không trả giá trị
}

const Form: React.FC<FormProps> = ({ closeForm }) => {  // Sử dụng kiểu cho props
    return (
        <div className="flex items-center justify-center h-screen w-screen" onClick={closeForm}>
            <div className="bg-white rounded-lg w-4/12 p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-semibold text-center mb-4">Edit trip details</h2>
                <form>
                    <label className="block font-bold text-gray-950 mb-1" htmlFor="trip-name">
                        Trip name
                    </label>
                    <input
                        type="text"
                        id="trip-name"
                        placeholder="discover hanoi"
                        className="w-full p-2 mb-4 border-2 border-gray-300 rounded-2xl focus:outline-none"
                    />

                    <label className="block font-bold text-gray-950 mb-1" htmlFor="destination">
                        Destination
                    </label>
                    <div className="flex items-center mb-4 relative">
                        <button type="button" className="w-10 h-10 absolute left-1">
                            <Image
                                src="/pictures/logo-find.png"
                                alt="icon"
                                width={27}
                                height={27}
                            />
                        </button>
                        <input
                            type="text"
                            id="destination"
                            placeholder="Hanoi"
                            className="w-full p-2 pl-10 border-2 border-gray-300 rounded-2xl focus:outline-none"
                        />
                    </div>

                    <label className="block font-bold text-gray-950 mb-1" htmlFor="dates">
                        Dates or trip length
                    </label>
                    <div className="flex items-center mb-4 relative">
                        <button type="button" className="w-10 h-10 absolute left-1">
                            <Image
                                src="/pictures/loge-date.png"
                                alt="dates"
                                width={27}
                                height={27}
                            />
                        </button>
                        <input
                            type="text"
                            id="dates"
                            placeholder="Oct 24 - Oct 25"
                            className="w-full p-2 pl-10 border-2 border-gray-300 rounded-2xl focus:outline-none"
                        />
                    </div>

                    <label className="block font-bold text-gray-950 mb-1" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full p-2 mb-2 border-2 border-gray-300 rounded-2xl focus:outline-none"
                        placeholder="Add a description..."
                    />

                    <div className="flex flex-col gap-1 mb-3">
                        <button type="button" className="flex items-center text-gray-950">
                            <Image
                                src="/pictures/logo-dup.png"
                                alt="remove"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Duplicate Trip
                        </button>
                        <button type="button" className="flex items-center text-red-600">
                            <Image
                                src="/pictures/logo-remove.png"
                                alt="remove"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Delete Trip
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-cyan-700 text-white px-4 py-2 rounded-2xl font-medium text-sm"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
