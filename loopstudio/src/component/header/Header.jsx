import React, { useState } from "react";
import logo from '../../../public/logo.svg'

function Header() {
  const [open,setOpen]=useState(false)
  const handleButton=()=>{
    setOpen((prev)=>(!prev))

  }

  console.log(open)
  return (
    <header
      id="header"
      className=" container max-w-6xl mx-auto px-6 py-12 md:px-10"
    >
      <nav className="flex items-center justify-between font-bold text-white px-6">
        {/* log */}
        <img src={logo}></img>

        {/* menu */}
        <div className="hidden h-10 md:flex md:space-x-8">
          <div className="group">
            <a href="#">About</a>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
            <a href="#">Career</a>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
            <a href="#">Product</a>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
            <a href="#">Support</a>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
        </div>

<div className="md:hidden">
  <button onClick={handleButton} type="button "  className={` ${open ?"open":""} z-40 block hamburger md:hidden focus:outline-none`}>
    <span className="hamburger-top"></span>
    <span className="hamburger-middle"></span>
    <span className="hamburger-bottom"></span>
  </button>
</div>






      </nav>


<div className={`${open?"":"hidden"} items-center absolute top-0 bottom-0 left-0 flex flex-col  self-end w-full min-h-screen py-1 pt-40 space-y-3 uppercase bg-black text-white`}>
  <a href="#" className="hover:text-pink-500">About</a>
  <a href="#" className="hover:text-pink-500">Careers</a>
  <a href="#" className="hover:text-pink-500" >Events</a>
  <a href="#" className="hover:text-pink-500">Product</a>
  <a href="#" className="hover:text-pink-500">Support</a>
</div>



      <div className="max-w-lg mt-32 mb-32 p-4 text-2xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl ">
        Impressive Experiences That Deliver
      </div>
    </header>
  );
}

export default Header;
