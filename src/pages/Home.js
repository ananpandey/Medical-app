import React from "react";
import Paragraph from "../components/Paragraph";
import Image from "../components/Image";
import Card from "../components/Card";
import CardIntro from "../components/CardIntro";
import Doctor from "../components/Doctor";
import Description from "../components/Description";
import MultiCards from "../components/MultiCards";
import LastSection from "../components/LastSection";

const Home = () => {
  return (
    <div>
      <Paragraph />
      <Image />
      <Card />
      <CardIntro />
      <Doctor />
      <Description />
      <MultiCards />
      <LastSection />
    </div>
  );
};
export default Home;
