import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { FeaturedArea } from "../../components/FeaturedArea";
import { AboutUs } from "../../components/AboutUs";
import { Services } from "../../components/Services";
import { MyWorkExperience } from "../../components/MyWorkExperience";
import { EducationAndSkills } from "../../components/EducationAndSkills";
import { Portfolio } from "../../components/Portfolio";
import { FreelanceWork } from "../../components/FreelanceWork";
import { ContactUs } from "../../components/ContactUs";
import { BottomBar } from "../../components/BottomBar";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Utsav-Dodiya</title>
      </Helmet>
      {/* <ScrollWrapper> */}
      <Header></Header>
      <FeaturedArea></FeaturedArea>
      <AboutUs></AboutUs>
      <Services></Services>
      <MyWorkExperience></MyWorkExperience>
      <EducationAndSkills></EducationAndSkills>
      <Portfolio></Portfolio>
      <FreelanceWork></FreelanceWork>
  
      <ContactUs></ContactUs>
      <BottomBar></BottomBar>
    </Fragment>
  );
};

export default HomePage;
