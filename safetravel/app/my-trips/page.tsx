import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import TripContainer from "../components/MyTrips/TripContainer";

const Planning = () => {
  return (
    <div className="bg-[#D2FBFD] min-h-screen">
      <Header />
      <TripContainer/>
      <Footer />
    </div>
  );
};

export default Planning;
