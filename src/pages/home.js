import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
const Home = () => {
  return (
    <>
      <Header/>
      <MainContent  pageName="Home Page"  designer="Designed By Maged Magdy"/>
      <Footer/>
    </>   
  );
};

export default Home;
