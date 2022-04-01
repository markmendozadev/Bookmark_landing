import { useState } from "react";
import Button from "./Button";
import Bookmark from "./icons/Bookmark";
import Hambuger from "./icons/Hambuger";
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="container mx-auto mt-5  w-5/6">
      <nav className="grid grid-flow-col">
        <div className="my-auto flex justify-between items-center">
          <Bookmark />
          {!isShowing && (
            <div
              className="px-4 cursor-pointer md:hidden"
              onClick={() => setIsShowing((prevState) => !prevState)}
            >
              <Hambuger />
            </div>
          )}
        </div>
        <ul
          className={` gap-10 items-center justify-end text-gray-500  ${
            isShowing
              ? "fixed inset-0 bg-secondary bg-opacity-80 z-50 p-20"
              : "hidden"
          }  md:flex `}
        >
          {isShowing && (
            <div>
              <div className="absolute left-14 top-7">
                <Bookmark color="#fff" />
              </div>

              <div
                className="absolute right-14 top-5 text-2xl text-white "
                onClick={() => setIsShowing(false)}
              >
                X
              </div>
            </div>
          )}
          <li className="w-full md:w-auto text-center p-12 md:p-0 border-t md:border-0  text-white md:text-gray-500">
            <a href="#features" className="hover:text-rose-500">
              Features
            </a>
          </li>
          <li className="w-full md:w-auto text-center p-12 md:p-0 border-t md:border-0  text-white md:text-gray-500">
            <a href="#" className="hover:text-rose-500">
              Pricing
            </a>
          </li>
          <li className="w-full md:w-auto text-center p-12 md:p-0 border-t md:border-0  text-white md:text-gray-500">
            <a href="#" className="hover:text-rose-500">
              Contact
            </a>
          </li>
          <li className="w-full md:w-auto text-center p-12 md:p-0 border-t md:border-0  text-white md:text-gray-500">
            <Button className="w-full md:w-auto text-white border bg-rose-500 hover:bg-white hover:text-rose-500 hover:border border-rose-500 rounded-lg tracking-wider px-8 py-2 ">
              Login
            </Button>
          </li>
          {isShowing && (
            <div className="m-auto mt-40 md:ml-auto flex gap-5 items-center justify-center">
              <Facebook className=" fill-white hover:fill-rose-500 cursor-pointer" />
              <Twitter className=" fill-white hover:fill-rose-500 cursor-pointer" />
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
