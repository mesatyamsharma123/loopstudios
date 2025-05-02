import React from "react";
import logo from "../../../public/logo.svg";
import facebookIcon from "../../../public/icon-facebook.svg";
import twitterIcon from "../../../public/icon-twitter.svg";
import pinterestIcon from "../../../public/icon-pinterest.svg";
import instagramIcon from "../../../public/icon-instagram.svg";

function Footer() {
  return (
    <footer className="bg-black max-w-6xl mx-auto px-10 py-10 text-white">
      <div className="flex flex-col md:flex-row items-center mb-8 space-y-6 md:space-y-0 md:justify-between md:items-start">
        {/* menu */}
        <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
          <div className="h-8">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col md:flex-row items-center font-bold md:space-x-6 md:ml-3">
            <div className="group h-10">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group h-10">
              <a href="#">Career</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group h-10">
              <a href="#">Product</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group h-10">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 text-gray-500">
          <div className="flex items-center justify-center space-y-4 md:justify-end md:space-x-4 space-x-4">
            <div className="h-8 group">
              <a href="#">
                <img className="h-6" src={facebookIcon} alt="Facebook" />
              </a>
            </div>
            <div className="h-8 group">
              <a href="#">
                <img className="h-6" src={twitterIcon} alt="Twitter" />
              </a>
            </div>
            <div className="h-8 group">
              <a href="#">
                <img className="h-6" src={pinterestIcon} alt="Pinterest" />
              </a>
            </div>
            <div className="h-8 group">
              <a href="#">
                <img className="h-6" src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-500 text-center"> @copy right 2002</p>
      </div>
    </footer>
  );
}

export default Footer;
