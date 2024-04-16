import React from "react";
import Navbar from "../compentes/Navbar";
import Footer from "../compentes/Footer";
import Apitabel from "../compentes/Apitabel";
import Commentdata from "../compentes/Commentdata";
import Posts from "../compentes/Posts";
import Albums from "../compentes/Albums";
import Todos from "../compentes/Todos";


function Userdata() {
  return (
    <>
      <Navbar />
      {/* <Todos/> */}
      <Apitabel />
      {/* <Commentdata /> */}
      {/* <Posts /> */}
      {/* <Albums /> */}
      <Footer />
    </>
  );
}

export default Userdata;
