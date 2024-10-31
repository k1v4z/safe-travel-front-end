import HereMap from '../../HereMap';
import LocationGrid from './LocationGrid';
import FilterBtn from './FilterBtn';
import NavigationBar from './NavigationBar';
import HeaderSection from './HeaderSection';
import Pagination from '../../Pagination';

const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 p-5">
      {/* Left Content */}
      <div className="flex-1 lg:flex-[1.6]">
        {/* Header Section */}
        <HeaderSection/>

        {/* Navigation Bar */}
        <NavigationBar/>

        {/* Filter Buttons */}
        <FilterBtn/>

        {/* Card Grid */}
        <LocationGrid/>

        {/* Pagination */}
        <Pagination/>
      </div>

      {/* Map Section */}
      <div className="flex-1 hidden lg:block">
        <HereMap latitude={10.845609} longitude={106.664512}/>
      </div>
    </div>
  );
};


export default MainContent;
