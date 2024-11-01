import React from 'react';

interface ButtonGroupProps {
  onBack: () => void;
  onNext: () => void;
}

const ButtonGroup = ({onBack, onNext}: ButtonGroupProps) => {
  return (
    <div className="flex justify-between w-full max-w-4xl mt-5">
      <button onClick={onBack} className="px-10 py-2 rounded-full bg-[#1CD8D2] text-white font-bold">Back</button>
      <button onClick={onNext} className="px-10 py-2 rounded-full bg-[#1CD8D2] text-white font-bold">Next</button>
    </div>
  );
}

export default ButtonGroup;