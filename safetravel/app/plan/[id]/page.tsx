"use client"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer"
import PlanTimeline from "../../components/Plan/PlanTimeline"
import dynamic from "next/dynamic";
import useAuth from "@/app/hooks/useAuth";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PlansResponse } from "@/app/lib/contract/IActivity";


const HereMap = dynamic(() => import('@/app/components/HereMap'), {
  ssr: false, // Disable ssr for HereMap component
});


const Plan = () => {
  const router = usePathname();
  const [planData, setPlanData] = useState<PlansResponse | any>({})
  const [coordinates, setCoordinates] = useState({latitude: 15.932077, longitude: 108.193575})
  const updateMapLocation = (newLatitude: number, newLongitude: number) => {
    setCoordinates({
      latitude: newLatitude,
      longitude: newLongitude
    })
  }

  useAuth()
  useEffect(() => {
    const fetchingData = async () =>{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${router}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const {plans} = await response.json()
      setPlanData(plans[0])
    }

    fetchingData()
  },[])

  
  return (
    <div className="bg-[#D2FBFD] min-h-screen">
      <Header />
      <div className="container mx-auto p-4 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <div className="w-full">
          <PlanTimeline updateMapLocation={updateMapLocation} plan={planData}/>
        </div>
        <div className="w-full h-auto">
          <img className="w-full rounded-3xl border object-cover" src={
            planData.plan_on_province && planData.plan_on_province.map((planOnProvince: any) => {
              return planOnProvince.province.imageUrl
            })
          } alt="Map of Hue" />
          {/* Hard code temporarily */}
          <HereMap latitude={coordinates.latitude} longitude={coordinates.longitude}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plan;