import React from 'react';
import WeatherWidget from '../components/Planning6/WeatherWidget';
import TripHeader from '../components/Planning6/TripHeader';
import RecommendationCard from '../components/Planning6/RecommendationCard';
import PlanSummary from '../components/Planning6/PlanSummary';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
      <div className='bg-[#D2FBFD] min-h-screen min-w-96'>
        <Header/>
          <WeatherWidget />
          <TripHeader />
          <PlanSummary/>
          <div>
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
          </div>
          <Footer/>
        </div>
      );
    }

export default HomePage;
