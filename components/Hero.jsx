import React from "react";
import Image from "next/image";

const Hero = (props) => {
  return (
    <div className="mt-16 md:mt-10 grid  md:grid-cols-2 container mx-auto md:grid-flow-col w-full md:w-5/6 ">
      <div className=" order-2 md:order-1 text-center md:text-left p-6 mt-8 md:m-auto md:p-0 ">
        <h2 className={`${props.titleSize} font-bold text-secondary`}>
          {props.title}
        </h2>
        <p className="font-lg mt-4 text-gray-500">{props.body}</p>
        <div className="flex gap-5 mt-4 justify-center md:justify-start">
          {props.children}
        </div>
      </div>
      <div className="relative order-1 md:order-2 ">
        <Image src={props.icon} alt={props.iconAlt} className="relative z-20" />
        <div className="absolute rounded-l-full bg-primary bottom-0 left-0 w-screen h-4/6 translate-x-64 z-10"></div>
      </div>
    </div>
  );
};

export default Hero;
