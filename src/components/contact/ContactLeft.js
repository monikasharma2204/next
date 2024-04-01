import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn ,FaGithubSquare} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
   const githubProfileLink =' https://github.com/monikasharma2204'; // Replace with your GitHub profile URL
  const linkedinProfileLink = " https://www.linkedin.com/in/monika-sharmaa/"
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Monika Sharma</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Open to collaboration on exciting projects . Seeking opportunities to leverage my expertise and 
          interest in MERN development and UI development. Let's connect 
          and discuss your vision!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">919785965800</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">monika779803@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
      
          <a href={githubProfileLink} target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaGithubSquare />
          </span>
        </a>

        <a href={linkedinProfileLink} target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </a>
          
        </div>
      </div>
    </div>
  );
}

export default ContactLeft