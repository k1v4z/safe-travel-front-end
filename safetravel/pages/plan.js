import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlanTimeline from '../components/PlanTimeline';
import MapSection from '../components/MapSection.jsx';

const PlanPage = () => {
  const [currentBlock, setCurrentBlock] = useState(1);
  const totalBlocks = 2;

  const plans = [
    // Plan data
  ];

  const handleEdit = () => {
    let nextBlock = currentBlock + 1;
    if (nextBlock > totalBlocks) nextBlock = 1;
    setCurrentBlock(nextBlock);
  };

  const handleCancel = () => {
    let prevBlock = currentBlock - 1;
    if (prevBlock < 1) prevBlock = totalBlocks;
    setCurrentBlock(prevBlock);
  };

  return (
    <div>
      <Header />
      {currentBlock === 1 ? (
        <div>
          <PlanTimeline plans={plans} />
        </div>
      ) : (
        <div>
          {/* Second block content */}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PlanPage;