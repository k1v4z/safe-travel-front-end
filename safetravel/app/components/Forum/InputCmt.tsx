import React from 'react'

function InputCmt() {
  return (
        <div className='w-full mt-3'>
            <div className="search-container cursor-pointer w-full">
            <img src="pictures/picture.png" alt="" className="absolute z-50 mt-3.5 ml-3"/>
            <img src="pictures/Smiley-Happy.png" alt="" className="absolute z-50 mt-3 ml-10"/>
            <input
                type="text"
                placeholder="Type your comment"
                className="rounded-lg border border-gray-300 w-full p-2 relative pl-16"
            />
            </div>
        </div>
  )
}

export default InputCmt