import { About, Contact3D, Hero, Navbar, Tech, Works, StarsCanvas,} from "../components";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Tech />
    <Works />
    <div className='relative z-0'>
      <Contact3D/>
      <StarsCanvas />
      <Footer />
    </div>
  </div>
  )
}

export default Home