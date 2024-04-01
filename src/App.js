import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import Cookies from 'js-cookie';

const MyComponent = () => {
  const handleClick = () => {
    // Set cookie
    Cookies.set('Akash', 'mahi');
    // Optionally, you can specify additional options like expires, path, etc.
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + 40); // expires in 40 seconds
    Cookies.set('myCookieName', 'cookieValue', { expires: expiryDate });
    // Cookies.set('myCookieName', 'cookieValue', { expires: 7, path: '/' });
  };
  return (
    <div>
      <button onClick={handleClick}>Set Cookie</button>
    </div>
  );
};

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <MyComponent />
        
      </div>
    </div>
  );
}

export default App;
