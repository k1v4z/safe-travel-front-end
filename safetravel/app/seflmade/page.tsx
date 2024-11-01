import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SelfMade1 from "../components/SelfMade/SelfMade1";
const page = () => {
    return (
        <div className="bg-[#D2FBFD] min-h-screen">
          <Header />
          <SelfMade1/>
          <Footer />
        </div>
      );
}

export default page