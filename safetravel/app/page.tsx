import Header from './components/Header/Header'
import Footer from '../app/components/Footer'
import FunctionSection from './components/HomePage/FunctionSection'
import PosterSection from './components/HomePage/PosterSection'
import MainSection from './components/HomePage/MainSection'
import Login from './login/page'
import Trip from './activityLocation/page'

export default function Home() {
  return (
    <div className='bg-[#D2FBFD]'>
      <Trip/>
    </div>
  )
}
