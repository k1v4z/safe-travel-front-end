import React from 'react'
import InputCmtUser from './InputCmtUser'

function PostUser() {
  return (
    <div>
                    <div className='pr-2'>
                <div className="flex flex-row items-start justify-start mb-4">
                    <img
                        src="/pictures/ava.png" 
                        className="rounded-full w-12 h-12 mr-3 mb-3"
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
                <div className="flex mb-4">
                    <img
                        src='/pictures/postimg.png'
                        className="w-1/2 rounded-lg mr-2"
                    />
                    <img
                        src='/pictures/postimg.png'
                        className="w-1/2 rounded-lg mr-2"
                    />
                </div>
                <div className='flex flex-row pb-5 border-b-2 border-b-slate-200 mb-3'>
                    <div className='flex flex-row mr-7'>
                        <img src="/pictures/Hearts.png" alt="" 
                        className='mr-2'
                        />
                        <p>123 likes</p>
                    </div>
                    <div className='flex flex-row mr-7'>
                        <img src="/pictures/Chat.png" alt="" 
                        className='mr-2'
                        />
                        <p>20 comments</p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default PostUser