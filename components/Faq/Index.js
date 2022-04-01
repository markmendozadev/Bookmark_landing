import React, { useState } from "react";
import Button from "../Button";
import Accordion from "./Accordion";
const AccordionData = [
  {
    id: 1,
    title: "What is Bookmark?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    title: "How can I request a new browser?",
    content:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    title: "Is there a mobile app?",
    content:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    title: " What about other Chromium browsers?",
    content:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];
const Faq = () => {
  const [openKey, setOpenKey] = useState();

  const handleToggle = (key) => {
    setOpenKey(openKey !== key ? key : null);
  };
  return (
    <div className="mt-40 mb-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          {" "}
          Frequently Asked Questions
        </h2>
        <p className="font-lg mt-4 text-gray-500 w-5/6 md:w-2/6 m-auto">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="mt-10 flex flex-col justify-center m-auto w-11/12 md:w-4/6 lg:w-5/12 ">
        {AccordionData.map((data) => (
          <Accordion
            key={data.id}
            title={data.title}
            content={data.content}
            toggle={handleToggle}
            open={openKey === data.title}
          />
        ))}
      </div>
      <div className="text-center mt-5">
        <Button className="bg-primary hover:bg-white hover:text-primary hover:border hover:border-primary hover shadow-lg text-white py-3 px-4 m-3 inline-block rounded-lg tracking-wider">
          <span className="text-sm">More Info</span>
        </Button>
      </div>
    </div>
  );
};

export default Faq;
