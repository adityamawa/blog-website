import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black rounded-lg shadow m-4 ml-9">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2024 <a href="#" className="hover:underline">Medium</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0 gap-8">
          <li>
            <a href="https://x.com/aditya_mawa_X" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaXTwitter fontSize={26} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adityamawa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin fontSize={26} />
            </a>
          </li>
          <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aditya.05mawa@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
              <BiLogoGmail fontSize={26} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
