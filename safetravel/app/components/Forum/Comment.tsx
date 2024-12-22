import React from 'react'

function Comment() {
    return (
        <div className="flex flex-col  w-full rounded-lg">
            <div className="flex items-start mb-3 mt-3">
                    <img
                        src="/pictures/ava.png"
                        alt="User profile picture"
                        className="rounded-full w-10 h-10 mr-3"
                    />
                    <div>
                        <span className="font-bold mr-3">@iluvcat_99</span>{' '}
                        <span className="text-gray-500">30 min</span>
                        <p className='mt-2'>Awesome!!! Please share your itinerary 😍</p>
                    </div>
            </div>
            <div className="flex items-start mb-3 mt-3">
                    <img
                        src="/pictures/ava.png"
                        alt="User profile picture"
                        className="rounded-full w-10 h-10 mr-3"
                    />
                    <div>
                        <span className="font-bold mr-3">@iluvcat_99</span>{' '}
                        <span className="text-gray-500">30 min</span>
                        <p className='mt-2'>Awesome!!! Please share your itinerary 😍</p>
                    </div>
            </div>

        </div>
    );
}

export default Comment