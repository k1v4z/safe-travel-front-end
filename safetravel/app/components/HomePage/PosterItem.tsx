import React from "react";
import Image from "next/image";

interface IPosterItemProps{
    title: string,
    background: string,
    content: string,
    buttonText: string,
    buttonImg: string
}

const PosterItem = (props: IPosterItemProps) => {
  return (
    <div className="bg-[#E9FFFF] p-10 rounded z-10">
      <img
        src={props.background}
        alt="Start a Trip"
        className="w-full h-64 md:h-[400px] mb-5 object-cover rounded-[15px]"
      />
      <h2 className="text-2xl md:text-4xl mb-4 font-gideonroman">
        {props.title}
      </h2>
      <p className="text-lg font-gideonroman text-black">
        {props.content}
      </p>
      <div className="flex justify-center items-center">
        <button className="mt-5 font-poppins text-black py-3 px-6 font-normal rounded-lg border-[2px] border-black hover:bg-[#6fdd6f] hover:font-bold">
          <div className="flex flex-row gap-2">
            <Image
              src={props.buttonImg}
              alt=""
              width={25}
              height={25}
            />
            <p>{props.buttonText}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PosterItem;
