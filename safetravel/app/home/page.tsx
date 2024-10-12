import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PlanTimeline from "../../components/PlanTimeline"
import MapSection from "../../components/MapSection"


const HomePage = () => {
  const plans = [
    {
      image: '/pictures/154_hue 1.png',
      title: 'The Imperial City of Hue',
      address: 'Phu Hau, Hue City, Thua Thien Hue',
      hours: 'Open now • Closes at 17:00',
    },
    {
      image: '/pictures/154_hue 4.png',
      title: 'Bun Bo Hue - O Be',
      address: '77 Nguyen Hue, Phu Nhuan, Hue',
      hours: 'Open now • Closes at 12:30',
    },
    {
      image: '/pictures/154_hue 8.png',
      title: 'Thien An Hill',
      address: 'Thuy Bang, Huong Thuy Town, Thua Thien Hue',
      hours: 'Open now',
    },
    {
      image: '/pictures/154_hue 10.png',
      title: 'Aeon Mall',
      address: '08 Vo Nguyen Giap, An Duong Vuong, Hue',
      hours: 'Open now • Closes at 22:00',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="container mx-auto flex">
        <div className="w-3/5 p-6">
          <PlanTimeline plans={plans} />
        </div>
        <div className="w-3/5 p-6">
          <MapSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;