import { _github, linkedin } from "../assets";

const Footer = () => {
    return (
      <div className="flex flex-col gap-3 max-w-7xl mx-auto py-10 px-5 md:px-5">
        <div className="flex justify-between items-end">
            <p className="text-[15px] font-light text-custom-white">
            frang.contact@gmail.com
            </p>
            <div className="flex gap-3">
            <a
              href="https://github.com/thefrang" 
              target="_blank" 
              rel="noreferrer">
              <img src={_github} alt="Github" className="w-[35px]" />
            </a>
            <a
            href="https://www.linkedin.com/in/frang-contact/" 
            target="_blank" 
            rel="noreferrer">
              <img src={linkedin} alt="Linkedin" className="w-[35px]" />
              </a>
            </div>
          </div>
        <div className="w-full border-t-[1px] border-white text-center p-5 ">
          <p className="font-light text-custom-white text-[15px]">
            © 2023 Franco Gomez. <br className="sm:hidden"/>Design by FranG.
          </p>
        </div>
        
      </div>
    );
  };
  
  export default Footer;