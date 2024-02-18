import React from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div>
      <div>
        <MainCarousel/>
      </div>
      <div>
        <HomeSectionCarousel/>
      </div>
    </div>
  );
};

export default HomePage;
