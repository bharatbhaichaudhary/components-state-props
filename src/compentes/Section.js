import React from "react";
import "./Navbar.css";
import car from "../img/car-1.png";

function Section() {
  return (
    <div className="sec-main">
      <div className="sec">
        <img src={car} className="sec-img"/>
      </div>
      <div className="sec">
        <p className="sec-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quia
          quos! Ex, veniam accusantium laudantium pariatur nesciunt, nam aut
          dolorem quod unde reiciendis repudiandae? Veniam aspernatur molestiae
          hic quia ipsam.
        </p>
      </div>
    </div>
  );
}
export default Section;
