import Button from "../Button";
import FeaturesComponent from "./Features";
import Img1 from "../icons/illustration-features-tab-1.svg";
import Img2 from "../icons/illustration-features-tab-2.svg";
import Img3 from "../icons/illustration-features-tab-3.svg";
import { useState } from "react";
const Features = () => {
  const [tabs, setTabs] = useState("Bookmarking");
  return (
    <div className="mt-20 mb-20" id="features">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-secondary">Features</h2>
        <p className="font-lg mt-4 text-gray-500 w-5/6 md:w-2/6 m-auto">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center ">
        <Button
          className={`tracking-wider px-8 py-4 rounded-none border-b-2 hover:text-red-400 ${
            tabs === "Bookmarking" ? "border-red-400" : "border-gray-400"
          }`}
          onClick={() => setTabs("Bookmarking")}
        >
          Simple Bookmarking
        </Button>
        <Button
          className={`tracking-wider px-8 py-4 rounded-none border-b-2 hover:text-red-400 ${
            tabs === "Searching" ? "border-red-400" : "border-gray-400"
          }`}
          onClick={() => setTabs("Searching")}
        >
          Speedy Searching
        </Button>
        <Button
          className={`tracking-wider px-8 py-4 rounded-none border-b-2 hover:text-red-400 ${
            tabs === "Sharing" ? "border-red-400" : "border-gray-400"
          }`}
          onClick={() => setTabs("Sharing")}
        >
          Easy Sharing
        </Button>
      </div>
      <div
        className={`${
          tabs === "Bookmarking" ? "opacity-100" : "opacity-0"
        } transition  duration-1000	ease-out`}
      >
        {tabs === "Bookmarking" && (
          <FeaturesComponent
            title="Bookmark in one click"
            titleSize="text-3xl md:text-5xl"
            body=" Organize your bookmarks however you like. Our simple drag-and-drop interface 
    gives you complete control over how you manage your favourite sites."
            icon={Img1}
            iconAlt="BookMark"
          >
            <Button className="bg-primary text-white py-3 px-4 tracking-wider rounded">
              <span className="text-sm">More Info</span>
            </Button>
          </FeaturesComponent>
        )}
      </div>
      <div
        className={`${
          tabs === "Searching" ? "opacity-100" : "opacity-0"
        } transition  duration-1000	ease-in`}
      >
        {tabs === "Searching" && (
          <FeaturesComponent
            title="Intelligent search"
            titleSize="text-3xl md:text-5xl"
            body="Our powerful search feature will help you find saved sites in no time at all. 
          No need to trawl through all of your bookmarks."
            icon={Img2}
            iconAlt="Search"
          >
            <Button className="bg-primary text-white py-3 px-4 tracking-wider rounded">
              <span className="text-sm">More Info</span>
            </Button>
          </FeaturesComponent>
        )}
      </div>
      <div
        className={`${
          tabs === "Sharing" ? "opacity-100" : "opacity-0"
        } transition  duration-1000	ease-out`}
      >
        {tabs === "Sharing" && (
          <FeaturesComponent
            title="Share your bookmarks"
            titleSize="text-3xl md:text-5xl"
            body="Easily share your bookmarks and collections with others. Create a shareable 
          link that you can send at the click of a button."
            icon={Img3}
            iconAlt="Sharing"
          >
            <Button className="bg-primary text-white py-3 px-4 tracking-wider rounded">
              <span className="text-sm">More Info</span>
            </Button>
          </FeaturesComponent>
        )}
      </div>
    </div>
  );
};

export default Features;
