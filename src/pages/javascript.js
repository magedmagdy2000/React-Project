import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";
const Javascript = () => {
  return (
    <>
          <Helmet>
        <title>Javascript page</title>
        <meta
      name="description"
      content="Web site created using create-react-app"/>
      </Helmet>

      <Header/>
      <MainContent pageName="Javascript Page" />
      <Footer/>
    </>   
  );
};

export default Javascript;
