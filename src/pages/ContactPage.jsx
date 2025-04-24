import { Contact, Navbar, StarsCanvas } from "../components";
import Footer from "../components/Footer";

import { styles } from "../styles";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <StarsCanvas />
      <div className="relative">
        <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
          <div className="mt-10">
            <p className={`${styles.sectionSubText} `}>Contact</p>
            <h2 className={`${styles.sectionHeadText}`}>
              Let&apos;s work toghether.
            </h2>
            <p className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]">
              I am available to create and work on new projects! Leave your
              information
              <br className="hidden sm:block" /> in this form or send me your
              details to
              <span className="font-semibold"> frang.contact@gmail.com</span>
            </p>
          </div>
          <Contact />
        </div>
        <div className={`max-w-7xl mx-auto relative z-0`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
