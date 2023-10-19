import React from "react";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import Contact from "../components/Contact";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import AboutUs from "../components/AboutUs";
import Solutions from "../components/Solutions";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <Contact />
      <ThirdSection />
      <FourthSection />
      <AboutUs />
      <Solutions /> 
      <Blogs />
    </div>
  );
};
export default Home;
