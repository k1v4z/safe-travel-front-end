"use client"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer"
import PlanTimeline from "../../components/Plan/PlanTimeline"
import dynamic from "next/dynamic";
import useAuth from "@/app/hooks/useAuth";

const HereMap = dynamic(() => import('@/app/components/HereMap'), {
  ssr: false, // Disable ssr for HereMap component
});

const Plan = () => {  
  useAuth()

  return (
    <div className="bg-[#D2FBFD] min-h-screen">
      <Header />
      <div className="container mx-auto p-4 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <div className="w-full">
          <PlanTimeline />
        </div>
        <div className="w-full h-auto">
          <img className="w-full rounded-3xl border object-cover" src="/pictures/image 6.png" alt="Map of Hue" />
          <HereMap/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plan;