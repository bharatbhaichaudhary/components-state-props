import React from "react";
import Navbar from "../compentes/Navbar";
import Kvt from "../compentes/Kvt";
import Card from "../compentes/Card";
import Section from "../compentes/Section";
import Footer from "../compentes/Footer";



function Home(){
    return(
  <div>
  <Navbar/>
  <Kvt/>
  <Card/>
  <Section/>
  <Footer/>
  </div>
    );
}

export default Home