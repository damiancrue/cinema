import React from "react";
import "./SocialMedia.css";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";


function SocialMedia() {

  return (
    <div className="socialmedia--container">
      <a href="" target="_blank">
        <WhatsAppIcon className='socialmedia--logo' fontSize='large' />
      </a>
      <a href="https://instagram.com/cinema_time_g7?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
        <InstagramIcon className='socialmedia--logo' fontSize='large' />
      </a>
      <a href="https://twitter.com/CinemaTimeG7" target="_blank" rel="noreferrer">
        <TwitterIcon className='socialmedia--logo' fontSize='large' />
      </a>
      {/* {icons.map((icon) => {
        return (
          <a href={icon.url} target="blank" key={(icon.id += 10)}>
            <img
              key={icon.id}
              className="socialMedia--logo"
              src={icon.image}
              alt={icon.alt}
            ></img>
          </a>
        );
      })} */}

    </div>
  );
}

export default SocialMedia;
