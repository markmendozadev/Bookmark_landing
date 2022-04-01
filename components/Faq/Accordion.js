import React from "react";

const Accordion = (props) => {
  const { title, content, toggle, open } = props;
  return (
    <>
      <div
        className="text-start hover:text-rose-500 p-4 border-y border-gray-200 cursor-pointer flex justify-between items-center"
        onClick={toggle.bind(null, title)}
      >
        <h2 className="text-xl">{title}</h2>
        {open ? (
          <svg
            className="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
          >
            <path
              fill="none"
              stroke="rgb(244, 63, 94)"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="#5267DF"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        )}
      </div>
      <div
        className={`${
          open ? "opacity-100" : "opacity-0"
        } transition duration-1000	ease-out	`}
      >
        {open && <div className={`p-4 text-gray-500`}>{content}</div>}
      </div>
    </>
  );
};

export default Accordion;
