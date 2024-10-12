import Header from '../app/components/Header'
import Footer from '../app/components/Footer'
import FunctionSection from './components/HomePage/FunctionSection'
import PosterSection from './components/HomePage/PosterSection'
import MainSection from './components/HomePage/MainSection'

export default function Home() {
  return (
    <div className='bg-[#D2FBFD]'>
      <Header />
      <MainSection/>

      {/* Functionalities Section*/}
      <FunctionSection/>
      
      {/* Posters Section */}
      <PosterSection/>
      <Footer />
    </div>
  )
}
