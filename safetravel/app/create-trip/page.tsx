"use client";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ContainerCreation from "../components/Planning/InitTrip/ContainerCreation";
import MainContent from "../components/Planning/MakeTrip/MainContent";
import DayChosen from "../components/DayChosen/DayChosen";

const CreateTrip = () => {
  const [isNext, setNext] = useState(false)

  return (
    <div className="bg-[#D2FBFD] min-h-screen">
      <Header />
      { isNext ? <DayChosen/> : <ContainerCreation isNext={isNext} setNext={setNext}/> }
      <Footer />
    </div>
  );
};

export default CreateTrip;
