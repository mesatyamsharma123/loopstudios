import mobileDeepEarth from "../../../public/mobile/image-deep-earth.jpg";
import desktopDeepEarth from "../../../public/desktop/image-deep-earth.jpg";

import mobileCuriosity from "../../../public/mobile/image-curiosity.jpg";
import desktopCuriosity from "../../../public/desktop/image-curiosity.jpg";

import mobileFisheye from "../../../public/mobile/image-fisheye.jpg";
import desktopFisheye from "../../../public/desktop/image-fisheye.jpg";

import mobileFromAbove from "../../../public/mobile/image-from-above.jpg";
import desktopFromAbove from "../../../public/desktop/image-from-above.jpg";

import mobileNightArcade from "../../../public/mobile/image-night-arcade.jpg";
import desktopNightArcade from "../../../public/desktop/image-night-arcade.jpg";

import mobilePocketBorealis from "../../../public/mobile/image-pocket-borealis.jpg";
import desktopPocketBorealis from "../../../public/desktop/image-pocket-borealis.jpg";

import mobileSoccerTeam from "../../../public/mobile/image-soccer-team.jpg";
import desktopSoccerTeam from "../../../public/desktop/image-soccer-team.jpg";

import mobileGrid from "../../../public/mobile/image-grid.jpg";
import desktopGrid from "../../../public/desktop/image-grid.jpg";

function Card() {
  const cards = [
    {
      title: "Deep Earth",
      mobile: mobileDeepEarth,
      desktop: desktopDeepEarth,
    },
    {
      title: "Curiosity",
      mobile: mobileCuriosity,
      desktop: desktopCuriosity,
    },
    {
      title: "Fisheye",
      mobile: mobileFisheye,
      desktop: desktopFisheye,
    },
    {
      title: "From Above",
      mobile: mobileFromAbove,
      desktop: desktopFromAbove,
    },
    {
      title: "Night Arcade",
      mobile: mobileNightArcade,
      desktop: desktopNightArcade,
    },
    {
      title: "Pocket Borealis",
      mobile: mobilePocketBorealis,
      desktop: desktopPocketBorealis,
    },
    {
      title: "Soccer Team",
      mobile: mobileSoccerTeam,
      desktop: desktopSoccerTeam,
    },
    {
      title: "Motto",
      mobile: mobileGrid,
      desktop: desktopGrid,
    },
  ];

  return (
    <section
      id="creations"
      className="container max-w-6xl mx-auto px-6 py-12 md:px-10"
    >
      <div className="flex justify-center mb-20 md:justify-between">
        <h2 className="text-4xl text-center uppercase md:text-5xl">
          Our Creation
        </h2>
        <button className="hidden btn md:block px-10">See</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white uppercase text-2xl">
        {cards.map(({ title, mobile, desktop }, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden w-full md:w-full"
          >
            <img className="md:hidden w-full" src={mobile} alt={title} />
            <img
              className="hidden md:block w-full duration-200 group-hover:scale-110"
              src={desktop}
              alt={title}
            />
            <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110">
              {title}
            </h5>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-8 md:hidden">
        <button className="md:hidden px-20 hover:text-white hover:bg-black text-black font-bold border">
          See
        </button>
      </div>
    </section>
  );
}

export default Card;
