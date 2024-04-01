import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact,FaGithubSquare } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  const githubProfileLink =' https://github.com/monikasharma2204'; // Replace with your GitHub profile URL
  const linkedinProfileLink = " https://www.linkedin.com/in/monika-sharmaa/"
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
         
          </div>
        </div>
     
  )
}

export default Media