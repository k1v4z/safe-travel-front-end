import Header from '../components/Planning5/Header';
import Section from '../components/Planning5/Section';
import Card from '../components/Planning5/Card';
import Map from '../components/Planning5/Map';

export default function Page() {
  const mustSeeAttractions = [
    { title: 'The Imperial City of Hue', imageSrc: '/pictures/154_hue 1.png' },
    { title: 'Thien Mu Pagoda', imageSrc: '/pictures/154_hue 2.png' },
    { title: 'Lap An Lagoon', imageSrc: '/pictures/154_hue 3.png' },
  ];

  const greatFood = [
    { title: 'Bun Bo Hue - O Be', address: '77 Nguyen Hue, Phu Nhuan', imageSrc: '/pictures/154_hue 4.png' },
    { title: 'Com Hen - O Cam', address: '33 Tran Phu, Hue', imageSrc: '/pictures/Frame 363.png' },
    { title: 'Banh Ep Cau Hai', address: '15 Hung Vuong, Hue', imageSrc: '/pictures/154_hue 6.png' },
  ];
  

  const luxuryShopping = [
    { title: 'Aeon Mall', imageSrc: '/pictures/154_hue 10.png' },
    { title: 'Vincom Plaza', imageSrc: '/pictures/154_hue 11.png' },
  ];

  const outdoors = [
    { title: 'Bach Ma National Park', imageSrc: '/pictures/154_hue 7.png' },
    { title: 'Thien An Hill', imageSrc: '/pictures/154_hue 8.png' },
    { title: 'Ru Cha mangrove forest', imageSrc: '/pictures/154_hue 9.png' },
  ];

  return (
    <div className="bg-cyan-100 min-h-screen p-8">
      {/* Header at the top of the page */}
      <Header />

      {/* Main Content with two columns */}
      <div className="flex mt-8">
        {/* Left Column */}
        <div className="w-2/3 pr-8">
          <Section title="Must-see Attractions">
            {mustSeeAttractions.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                imageSrc={item.imageSrc}
                isFirst={index === 0}
                isLast={index === mustSeeAttractions.length - 1}
              />
            ))}
          </Section>

          <Section title="Great Food">
            {greatFood.map((item, index) => (
                <Card
                key={index}
                title={item.title}
                imageSrc={item.imageSrc}
                subtitle={item.address}  // Pass the address as subtitle
                isFirst={index === 0}
                isLast={index === greatFood.length - 1}
                />
            ))}
            </Section>


          <Section title="Luxury Shopping">
            {luxuryShopping.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                imageSrc={item.imageSrc}
                isFirst={index === 0}
                isLast={index === luxuryShopping.length - 1}
              />
            ))}
          </Section>

          <Section title="Outdoors">
            {outdoors.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                imageSrc={item.imageSrc}
                isFirst={index === 0}
                isLast={index === outdoors.length - 1}
              />
            ))}
          </Section>
        </div>

        {/* Right Column */}
        <div className="w-1/3">
          <Map />
        </div>
      </div>
    </div>
  );
}
