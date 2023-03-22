import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet  } from 'react-helmet-async';

const Css = () => {
  return (
    <>
      <Helmet>
        <title>css page</title>
        <meta
      name="description"
      content="Web site created using create-react-app"/>
      </Helmet>

      <Header/>
      <MainContent pageName="Css Page" />
      <Footer/>
    </>   
  );
};

export default Css;
