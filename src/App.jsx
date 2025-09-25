import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/navbar/navbar'
import Title from './Components/Title/Title'
import Ongoing from './Components/Ongoing/Ongoing'
import Contact from './Components/Contact/Contact'
import Teacher from './Components/Teacher/Teacher'
import SystemConfig from './Components/SystemConfig/SystemConfig'
import HonorsProgram from './Components/HonorsProgram/HonorsProgram'
import Activities from './Components/Activities/Activities'
import FacultyDevelopment from './Components/FacultyDevelopment/FacultyDevelopment'
import FuturePlans from './Components/FuturePlans/FuturePlans'
// import Slider from './Components/Gallery/Gallery'
// import Carousel from './Components/Gallery/Carousel'
// import { slides } from './Components/data/carouselData.json'
import { Carousel } from "./Components/Gallery/Carousel";
import { Carousel2 } from "./Components/Gall2/Carousel2";
// import Gallery1 from './Components/Gallery/Gallery'
// import Faculty from './Components/Faculty/Faculty'
// import Gallery, { SecondSectionWithImage } from './Components/Gallery/Gallery'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle={'About Us'} title={'Our Mission and Vision'}/>
        <About/>
        <Title subTitle={'Ongoing Projects'} title={'Empowering Innovation Through Technology'}/>
        <Ongoing/>
         <Title subTitle={'Gallery'} title={'Discover Our Captured Moments'}/>
         <Title  title={'MOU-CDAC'}/>
         {/* <Slider images={images} title="Automatic Image Slider" /> */}
         <Carousel/> 
         <Title  title={'Outreach Program'}/>
         <Carousel2/>
        <Title subTitle={'B.Tech. Honors'} title={'GPU-Accelerated Computing Program'}/>
        <HonorsProgram />
        <Title subTitle={'Department'} title={'Activities & Achievements'}/>
        <Activities />
        <Title subTitle={'Faculty'} title={'Development & Research Excellence'}/>
        <FacultyDevelopment />
        <Title subTitle={'Future'} title={'Strategic Plans & Pipeline'}/>
        <FuturePlans />
        <Title subTitle={'System'} title={'Configurations'}/>
        <SystemConfig />
        <Title subTitle={'Faculty'} title={'Know About our Faculty'}/>
        <Teacher />
      <Title subTitle={'Contact Us'} title={'Get in Touch'}/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
