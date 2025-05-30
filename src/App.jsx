import React from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
import ContactMe from "./components/Work/ContactMe";

import Hero from "./components/Hero/Hero";
import Cert from "./components/Cert/Cert";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Cert />
      <ContactMe />
      {/* <Portfolio />
      <People /> */}
      <Footer />
    </div>
  );
};

export default App;
