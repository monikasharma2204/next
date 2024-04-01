import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive , projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';


const projectsData = [
  {
    title: 'SOCIAL MEDIA website',
    des: 'From user authentication and real-time updates to intuitive UI design, this social media project in MERN, where users can follow, like, comment, share, delete, and update posts!',
    src: projectOne,
    githubLink: 'https://github.com/monikasharma2204/social_media', 
  },
    {
    title: 'E-commerce Website',
    des: 'This MERN-powered e-commerce website where Strapi empowers effortless product management, Stripe ensures secure transactions, and dynamic React interfaces elevate your shopping experience.',
    src: projectTwo,
    githubLink: 'https://github.com/monikasharma2204/E-commerce-website', 
  },

   {
    title: 'Crypto Tracker',
    des: 'this React JS‑based project seamlessly combines two sections : one for searching specific cryptocurrency names and another for displaying an extensive collection of available cryptocurrencies',
     src: projectThree,
       
    githubLink: 'https://github.com/monikasharma2204/Crypto-Tracker', 
  },

   {
    title: 'Movie App',
    des:" This react JS based project combines four section:one forStreamlined Information Retrieval,second for Comprehensive Plot Points,third for User‑Friendly Interface and another for Concise Presentation",
     src: projectFour,
       
    githubLink: 'https://github.com/monikasharma2204/Movie-App', 
  },

   { 
          title:"Zoom Clone ",
          des:"the real-time capabilities of WebRTC and Socket.io in our Zoom clone, delivering video and audio communication while users with screen sharing, chat functionality, and dynamic real-time updates for a truly interactive virtual meeting environment.",
          src: projectFive,
          githubLink:" https://github.com/monikasharma2204/Zoom-clone"

   },
   {
     title:"food website",
          des:"A dynamic and visually enticing food website crafted with HTML, CSS, and JavaScript. Delightful animations,responsive design, and interactive features create an immersive culinary journey!",
          src:projectSix,
          githubLink:"https://github.com/monikasharma2204/FOOD_APPLICATION"
          
   },

]

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
         {projectsData.map((project, index) => (
          <a key={index} href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <ProjectsCard title={project.title} des={project.des} src={project.src} />
          </a>
        ))}
       
        
      </div>
    </section>
  );
}

export default Projects