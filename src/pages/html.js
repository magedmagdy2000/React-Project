import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";
const Html = () => {
  return (
    <>
          <Helmet>
        <title>Html Page</title>
        <meta
      name="description"
      content="Web site created using create-react-app"/>
      </Helmet>

      <Header/>
      <MainContent pageName="Html Page" />
      <Footer/>
    </>   
  );
};

export default Html;
