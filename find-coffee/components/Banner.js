import Image from "next/image";

import HeroImage from "../public/static/hero_image-1.png";

const Banner = () => {
  return (
    <div className="m-10 sm:m-25 flex items-center justify-between">
      <div>
        <h1 className="text-5xl sm:text-7xl font-bold text-white">
          Find Your <span className="text-secondary">Coffee</span>
        </h1>
        <p className="text-lg mt-3">Discover your local coffee shops!</p>
        <button
          type="button"
          className="bg-secondary text-white p-4 mt-10 cursor-pointer transform duration-200 hover:scale-95 font-semibold"
        >
          View stores nearby
        </button>
      </div>
      <div className="hidden md:block">
        <Image src={HeroImage} alt="Hero Image of Find Your Coffee Site" />
      </div>
    </div>
  );
};

export default Banner;
