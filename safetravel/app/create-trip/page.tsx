"use client";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ContainerCreation from "../components/Planning/InitTrip/ContainerCreation";
import MainContent from "../components/Planning/MakeTrip/MainContent";
import DayChosen from "../components/DayChosen/DayChosen";
import useAuth from "../hooks/useAuth";

const CreateTrip = () => {
  useAuth()
  const [step, setStep] = useState(0);
  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div className="bg-[#D2FBFD] min-h-screen">
      <Header />
        {step === 0 && <ContainerCreation isNext={step > 0} setNext={(isNext) => setStep(isNext ? 1 : 0)} />}
        {step === 1 && <DayChosen onBack={handleBack} onNext={handleNext} />}
        {step === 2 && <MainContent />}
      <Footer />
    </div>
  );
};

export default CreateTrip;
