import {
  About,
  Contact3D,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Experience,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact3D />
        <StarsCanvas />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
