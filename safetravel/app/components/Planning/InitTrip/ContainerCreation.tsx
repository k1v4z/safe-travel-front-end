import React from "react";
import HeaderCreation from "./HeaderCreation";
import TripInput from "./TripInput";
import Destination from "./Destination";

interface ContainerCreationProps {
  isNext: boolean,
  setNext(isNext: boolean): void
}

const ContainerCreation = (props: ContainerCreationProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-lg">
        <div className="bg-transparent p-10 rounded-lg text-center">
          <HeaderCreation />
          <TripInput/>
          <Destination/>
        </div>
        <div className="w-full max-w-lg flex justify-end">
            <button onClick={() => props.setNext(!props.isNext)} className="py-2 px-10 bg-[#26DAD1] text-white font-roboto_light rounded-xl font-bold hover:bg-teal-600">
              Next
            </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerCreation;
