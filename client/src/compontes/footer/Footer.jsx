import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WindowIcon from '@mui/icons-material/Window';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../../assets/atlaslogo.png"

import './footer.css';
//fb , in , linkdein,twiter , browser , messege
export default function Footer() {
  return (
    <div className="hidden sm:block">
      <footer className="bg-black">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="footerMenu">
              <a href="/aboutUs" className="footerLinks">
                אודותינו
              </a>
            </div>
            <div className="footerMenu">
              <a href="/contactUs" className="footerLinks">
               צור קשר
              </a>
            </div>
            <div className="footerMenu">
              <a href="/question" className="footerLinks">
                שאלות נפוצות
              </a>
            </div>
            <div className="footerMenu">
              <a href="/chat" className="footerLinks">
                צ'אט 
              </a>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="socialMedia pl-5">
              <FacebookIcon />
            </a>
            <a href="#" className="socialMedia">
              <InstagramIcon />
            </a>
            <a href="#" className="socialMedia">
              <LinkedInIcon />
            </a>
            <a href="#" className="socialMedia">
              <TwitterIcon />
            </a>
            <a href="#" className="socialMedia">
              <WindowIcon />
            </a>
            <a href="#" className="socialMedia">
              <EmailIcon />
            </a>
          </div>
          <div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2022 Multi-Market, Inc. All rights reserved.
          </p><img className='w-8 h-8' src={logo} alt="logo"/></div>
        </div>
      </footer>
    </div>
  );
}
