import React from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Cursor from "./Cursor";
import HeaderBanner from "./Component/Components/HeaderBanner";
import Aboutus from "./Component/Components/About";
import "./../index.css";
import ScrollButton from "./Component/ScrollButton";
const Index = () => {
  return (
    <div className="App">
      <Header />
      <Cursor />
      <HeaderBanner />
      {/* <Aboutus /> */}
      {/* <Service />
      <Experience/>
      <EducationSkills/>
      <MyPortfolio/>
      <CustomerReview/>
      <RecentArtical/> */}
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Index;
