import LocationGrid from './LocationGrid';
import FilterBtn from './FilterBtn';
import NavigationBar from './NavigationBar';
import HeaderSection from './HeaderSection';
import Pagination from '../../Pagination';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const HereMap = dynamic(() => import('@/app/components/HereMap'), {
  ssr: false, // Disable ssr for HereMap component
});

const MainContent = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(Number(process.env.NEXT_PUBLIC_DEFAULT_LIMIT));
  const [totalPages, setTotalPages] = useState(1);
  const [activeType, setActiveType] = useState("thingsToDo");

  return (
    <div className="flex flex-col lg:flex-row gap-5 p-5">
      {/* Left Content */}
      <div className="flex-1 lg:flex-[1.6]">
        {/* Header Section */}
        <HeaderSection/>

        {/* Navigation Bar */}
        <NavigationBar/>

        {/* Filter Buttons */}
        <FilterBtn activeType={activeType} setActiveType={setActiveType}/>  

        {/* Card Grid */}
        <LocationGrid page={page} limit={limit} setTotalPages={setTotalPages} activeType={activeType}/>

        {/* Pagination */}
        <Pagination currentPage={page} setPage={setPage} totalPages={totalPages}/>
      </div>

      {/* Map Section */}
      <div className="flex-1 hidden lg:block">
        <HereMap latitude={10.845609} longitude={106.664512}/>
      </div>
    </div>
  );
};


export default MainContent;
