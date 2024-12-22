import React from 'react'

function InputCmtUser() {
  return (
    <div className='w-full -ml-1'>
        <div className='w-full mt-3 pl-5 pr-5'>
            <div className="search-container cursor-pointer w-full">
            <img src="pictures/picture.png" alt="" className="absolute z-50 mt-0.5 ml-3"/>
            <img src="pictures/Smiley-Happy.png" alt="" className="absolute z-50 mt-0.3 ml-10"/>
            <input
                type="text"
                placeholder="Type your comment"
                className="rounded-lg border border-gray-300 w-full p-2 relative pl-16 pr-12 bottom-3"
            />
            <img src="pictures/Sent.png" alt="" className="absolute z-50 -mt-11 right-96"/>
            </div>
        </div>
    </div>
  )
}

export default InputCmtUser