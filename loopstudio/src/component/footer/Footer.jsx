import React from "react";

function Footer() {
  return (
    <footer className="bg-black max-w-6xl mx-auto px-10 py-10 text-white">
      <div className="flex flex-col md:flex-row items-center mb-8 space-y-6 md:space-y-0 md:justify-between md:items-start">
        {/* menu */}

        <div className="flex flex-col  items-center space-y-8 md:items-start md:space-y-4">
          <div className="h-8">
            <img src="/logo.svg"></img>
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

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4  text-gray-500">
            <div className="flex items-center justify-center space-y-4 md:justify-end md:space-x-4 space-x-4">
                <div className="h-8 group">
                <a href="#">
                    <img className="h-6"  src='/icon-facebook.svg'></img>
                </a>
                </div>
                <div className="h-8 group">
                <a href="#">
                    <img className="h-6"  src='/icon-twitter.svg'></img>
                </a>
                </div>
                <div className="h-8 group">
                <a href="#">
                    <img className="h-6"  src='/icon-pinterest.svg'></img>
                </a>
                </div>
                <div  className="h-8 group">
                <a href="#">
                    <img  className="h-6 "  src='/icon-instagram.svg'></img>
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
