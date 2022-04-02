import React from "react";
import Button from "../Button";
const Card = (props) => {
  const { Img } = props;
  return (
    <div
      className={`flex flex-col shadow-xl rounded-lg bg-white p-12 md:p-4 ${props.mt} `}
    >
      <div className="p-8">
        <div className="w-24 m-auto ">{Img}</div>
        <h2 className="text-xl font-bold text-secondary text-center mt-4">
          {props.title}
        </h2>
        <p className="font-lg mt-4 text-gray-400 ">{props.text}</p>
      </div>
      <div className="flex justify-center flex-col">
        <div className="border-2 border-dotted tracking-wider mb-4"></div>
        <Button className="bg-primary  shadow-lg text-white py-3 px-4 m-3 inline-block rounded-lg tracking-wider hover:bg-white hover:text-primary hover:border-primary border hover:border">
          <span className="text-sm">Add & Install Extension</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
