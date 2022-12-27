import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function FooterMobile() {
  return (
    <div className="block sm:hidden">
      <footer className="bg-black  ">
        <div className="flex justify-center w-100">
          <a href="#" className="socialMedia">
            <FacebookIcon />
          </a>
          <a href="#" className="socialMedia pr-2 pl-2">
            <InstagramIcon />
          </a>
          <a href="#" className="socialMedia">
            <EmailIcon />
          </a>
        </div>
        <div className="mt-8 text-base leading-6 text-center text-gray-400">
          <p>© 2022 Multi-Market, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
