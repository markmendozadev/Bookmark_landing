import React from "react";
import Hero from "./Hero";
import Button from "./Button";
import HeroIcon from "./icons/illustration-hero.svg";

const MainSection = () => {
  return (
    <Hero
      title="A Simple Bookmark Manager"
      titleSize="text-4xl md:text-5xl"
      body=" A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free."
      icon={HeroIcon}
      iconAlt="HeroIcon"
      style="style_1"
    >
      <Button className="bg-primary border-2 hover:bg-white text-white hover:text-primary hover:border-2 hover:border-primary py-3 px-4 rounded-lg tracking-wider ">
        <span className="text-sm">Get It On Chrome</span>
      </Button>
      <Button className="bg-gray-100 shadow-lg text-black border-2 hover:bg-white hover:border-black py-3 px-4 rounded-lg tracking-wider">
        <span className="text-sm">Get It On Firefox</span>
      </Button>
    </Hero>
  );
};

export default MainSection;
