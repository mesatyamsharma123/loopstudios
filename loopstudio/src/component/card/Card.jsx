import React from "react";

function Card() {
  return (
    <section
      id="creations"
      className="container max-w-6xl mx-auto px-6 py-12  md:px-10"
    >
      <div className="flex justify-center mb-20 md:justify-between">
        <h2 className="text-4xl text-center uppercase md:text-5xl">
          Our Creation
        </h2>

        <button className="hidden  btn md:block px-10">See</button>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full space-y-6 text-2xl md:space-x-6 text-white uppercase md:space-y-0">
        
        <div className=" group relative overflow-hidden md:w-1/4">
          <img
            className="md:hidden w-full"
            src="/mobile/image-deep-earth.jpg"
          ></img>

          <img
            src="/desktop/image-deep-earth.jpg"
            className="hidden w-full duration-200 md:block group--hover:scale-110:"
          ></img>
          <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 ">
            Deep Earth
          </h5>
        </div>
        <div className=" group relative overflow-hidden md:w-1/4">
          <img
            className="md:hidden w-full"
            src="/mobile/image-curiosity.jpg"
          ></img>

          <img
            src="/desktop/image-curiosity.jpg"
            className="hidden w-full duration-200 md:block group--hover:scale-110:"
          ></img>
          <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 ">
          Curiosity
          </h5>
        </div>
        <div className=" group relative overflow-hidden md:w-1/4">
          <img
            className="md:hidden w-full"
            src="/mobile/image-fisheye.jpg"
          ></img>

          <img
            src="/desktop/image-fisheye.jpg"
            className="hidden w-full duration-200 md:block group--hover:scale-110:"
          ></img>
          <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 ">
          fisheye
          </h5>
        </div>
        <div className=" group relative overflow-hidden md:w-1/4">
          <img
            className="md:hidden w-full"
            src="/mobile/image-from-above.jpg"
          ></img>

          <img
            src="/desktop/image-from-above.jpg"
            className="hidden w-full duration-200 md:block group--hover:scale-110:"
          ></img>
          <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 ">
          from-above
          </h5>
        </div>
      </div>
      <div className="flex justify-center mb-20 md:justify-between"></div>

      <div className="flex flex-col md:flex-row justify-between w-full space-y-6 text-2xl md:space-x-6 text-white uppercase md:space-y-0">
        <div className=" group relative overflow-hidden md:w-1/4">
          <img
            className="md:hidden w-full"
            src="/mobile/image-night-arcade.jpg"
          ></img>

          <img
            src="/desktop/image-night-arcade.jpg"
            className="hidden w-full duration-200 md:block group--hover:scale-110:"
          ></img>
          <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 ">
          night-arcade
          </h5>
        </div>
        <div className=" group relative overflow-hidden md:w-1/4">
          <img
            className="md:hidden w-full"
            src="/mobile/image-pocket-borealis.jpg"
          ></img>

          <img
            src="/desktop/image-pocket-borealis.jpg"
            className="hidden w-full duration-200 md:block group--hover:scale-110:"
          ></img>
          <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 ">
          Pocket borealis
          </h5>
        </div>
        <div className=" group relative overflow-hidden md:w-1/4">
          <img
            className="md:hidden w-full"
            src="/mobile/image-soccer-team.jpg"
          ></img>

          <img
            src="/desktop/image-soccer-team.jpg"
            className="hidden w-full duration-200 md:block group--hover:scale-110:"
          ></img>
          <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 ">
          soccer team
          </h5>
        </div>
        <div className=" group relative overflow-hidden md:w-1/4">
          <img
            className="md:hidden w-full"
            src="/mobile/image-grid.jpg"
          ></img>

          <img
            src="/desktop/image-grid.jpg"
            className="hidden w-full duration-200 md:block group--hover:scale-110:"
          ></img>
          <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 ">
          Motto
          </h5>
        </div>

      </div>
      <div className="flex flex-col items-center mt-8  md:hidden">
      <button className="md:hidden  px-20 hover:text-white hover:bg-black text-black font-bold border ">see </button>
      </div>
      
    </section>
  );
}

export default Card;
