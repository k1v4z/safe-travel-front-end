import React from 'react';
import DateRangeSelector from './DateRangeSelector';
import ButtonGroup from './ButtonGroup';
import usePlanStore from '@/app/stores/planStore';

interface DayChosenProps {
  onBack: () => void;
  onNext: () => void;
}

const DayChosen = ({onBack, onNext}: DayChosenProps) => {
  const { plan } = usePlanStore();
  
  const handleNext = () => {
    const selectedDate = new Date(plan.date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set the current date to midnight for comparison

    if (!plan.date || selectedDate < currentDate) {
      alert('Please choose a valid date that is not in the past.');
      return;
    }
    onNext();
  };

  return (
    <div>
      <div className="relative">
        <img className="absolute w-full h-[500px] z-[-1] filter brightness-[100%]" src="/pictures/map.png" alt="Background" />
      </div>

      <div className="flex flex-col items-center justify-center mt-12" id="block1">
        <img src="/pictures/map-Photoroom.png" alt="Map" className="w-20 className" />
        <p className="font-gideonroman font-bold text-3xl mt-5 mb-2">When are you going?</p>
        <p className="font-gideonroman text-lg">Choose a date range, up to 7 days.</p>
        <DateRangeSelector />
        <p className="text-black font-gideonroman underline text-lg font-bold"><a href="#">I don't know my dates yet</a></p>
        <ButtonGroup onBack={onBack} onNext={handleNext} />
      </div>
    </div>
  );
}

export default DayChosen;
