import usePlanStore from "@/app/stores/planStore";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlanSummary = () => {
  const { plan } = usePlanStore();
  
  const handleCreatePlan = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/create-plan`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ plan }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Plan created successfully:", data);
        toast.success("Plan created successfully!");
        // Optionally, update the state or navigate to another page
      } else {
        console.error("Failed to create plan");
        toast.error("Failed to create plan");
      }
    } catch (error) {
      console.error("Error creating plan:", error);
      toast.error("Failed to create plan");
    }
  };
  return (
    <div className="flex justify-start ml-7 mb-8 space-x-3 font-poppins">
      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center hover:bg-gray-300 active:bg-gray-400">
        <img
          src="/pictures/triangle.png"
          alt="Visit Icon"
          className="w-5 h-5 mr-2"
        />
        Visit
      </button>
      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center hover:bg-gray-300 active:bg-gray-400">
        <img
          src="/pictures/food-icon.png"
          alt="Food Icon"
          className="w-5 h-5 mr-2"
        />
        Food & Drink
      </button>
      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center hover:bg-gray-300 active:bg-gray-400">
        <img
          src="/pictures/Home.png"
          alt="Accommodation Icon"
          className="w-5 h-5 mr-2"
        />
        Accommodation
      </button>
      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center hover:bg-gray-300 active:bg-gray-400">
        <img
          src="/pictures/Board.png"
          alt="Museum Icon"
          className="w-5 h-5 mr-2"
        />
        Museum
      </button>
      <button
        onClick={handleCreatePlan}
        className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center hover:bg-gray-300 active:bg-gray-400"
      >
        <img
          src="/pictures/Board.png"
          alt="Museum Icon"
          className="w-5 h-5 mr-2"
        />
        Create Plan
      </button>
      <ToastContainer />
    </div>
  );
};

export default PlanSummary;
