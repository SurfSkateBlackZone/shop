import React from "react";
import "./style.scss";
import instagramIcon from 'assets/instagram.svg'
import useGAEventTracker from "hooks/useGAEventTracker";

const Footer = () => {
  const GAEventsTracker = useGAEventTracker("External Links");
  return (
    <div className="footer">
      <div className="footer-social-network">
        <a
          href="https://www.instagram.com/surfskateblackzone/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => GAEventsTracker("Instagram Page Visit","https://www.instagram.com/surfskateblackzone/")}
        >
          <img 
            src={instagramIcon} 
            alt="InstagramIcon" 
            width="100%" 
            height="100%"/>
        </a>
      </div>
      <div className="footer-copyright">
        <span>BlackZone | Copyright 2021</span>
      </div>
    </div>
  );
};

export default Footer;
