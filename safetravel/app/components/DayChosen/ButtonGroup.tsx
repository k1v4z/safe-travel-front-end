import React from 'react';

const ButtonGroup: React.FC = () => {
  return (
    <div className="flex justify-between w-full max-w-4xl mt-5">
      <button className="px-10 py-2 rounded-full bg-[#1CD8D2] text-white font-bold">Back</button>
      <button className="px-10 py-2 rounded-full bg-[#1CD8D2] text-white font-bold">Next</button>
    </div>
  );
}

export default ButtonGroup;