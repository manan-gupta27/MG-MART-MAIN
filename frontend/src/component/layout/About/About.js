import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/manan_gupta.27";
  };
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/manan-gupta27";
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/manan27/image/upload/v1645892393/1620829921788_jutiq2.jpg"
              alt="Founder"
            />
            <Typography>Manan Gupta</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit LinkedIn
            </Button>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a ecom wesbite made by Manan Gupta. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            

            <a href="https://instagram.com/manan_gupta.27" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
