import React from "react";
import Image from "next/image";

interface ISectionItemProps{
    imgSrc: string,
    text: string
}

const FunctionItem = (props: ISectionItemProps) => {
  return (
    <div className="flex flex-col items-center z-10">
      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
        <i className="ri-map-pin-line text-5xl"></i>
        <Image
          src={props.imgSrc}
          alt=""
          width={50}
          height={50}
        />
      </div>
      <p className="text-center mt-2 font-maname text-black" dangerouslySetInnerHTML={{__html: props.text}}></p>
    </div>
  );
};

export default FunctionItem;
