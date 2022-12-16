import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WindowIcon from '@mui/icons-material/Window';
import EmailIcon from '@mui/icons-material/Email';

import "./footer.css"
//fb , in , linkdein,twiter , browser , messege
export default function Footer() {
  return (
    <div>
     <footer class="bg-black">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="footerMenu">
                <a href="#" className="footerLinks">
                    צור קשר
                </a>
            </div>
            <div className="footerMenu">
                <a href="#" className="footerLinks">
                    תנאי השימוש
                </a>
            </div>
            <div className="footerMenu">
                <a href="#" className="footerLinks">
                    איכות הסביבה
                </a>
            </div>
            <div className="footerMenu">
                <a href="#" className="footerLinks">
                    פירוט העמוד
                </a>
            </div>
            <div className="footerMenu">
                <a href="#" className="footerLinks">
                    אודותינו
                </a>
            </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
            <a href="#" className="socialMedia">
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
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2022 Multi-Market, Inc. All rights reserved.
        </p>
    </div>
</footer>
      
    </div>
  );
}
