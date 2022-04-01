import { useState } from "react";
import Button from "../Button";
import Bookmark from "../icons/Bookmark";
import IconError from "../icons/IconError";
import Twitter from "../icons/Twitter";
import Facebook from "../icons/Facebook";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
  };
  return (
    <>
      <footer className="bg-primary p-16">
        <div className="text-center">
          <p className="font-lg  text-white m-auto">35,000+ already joined</p>
          <h2 className="text-3xl mt-4 font-medium text-white whitespace-pre-line">
            Stay up-to-date with what <br /> we’re doing
          </h2>
          <div className="mt-10">
            <form
              onSubmit={submitHandler}
              noValidate
              className="flex flex-col md:flex-row justify-center items-start"
            >
              <div className="flex flex-col items-center w-full md:w-auto">
                <label
                  htmlFor="email"
                  className="relative text-gray-400 focus-within:text-gray-600 block w-full md:w-auto"
                >
                  {error && (
                    <IconError className="pointer-events-none w-8 h-8 absolute top-8 transform -translate-y-2/4 -right-1" />
                  )}
                  <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={`w-full py-4 px-6 rounded text-sm placeholder:text-left focus-visible:outline-none  placeholder:text-slate-400 ${
                      error ? "border-2 border-rose-500" : "border-0"
                    } `}
                  />
                </label>

                {error && (
                  <span className="text-xs text-left pl-2 bg-rose-500 rounded-b-lg w-full text-white">
                    Whoops, make sure its an email
                  </span>
                )}
              </div>
              <Button className="bg-rose-500 w-full md:w-auto mt-4 md:mt-0 border-2 border-rose-500 hover:border-2 hover:border-rose-500  hover:bg-white hover:text-rose-500 shadow-lg text-white py-3 px-4 inline-block rounded-lg tracking-wider">
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </footer>

      <div className="bg-secondary p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 w-5/6">
          <Bookmark color="#fff" />

          <nav>
            <ul className="flex flex-col md:flex-row gap-10 items-center justify-start text-white">
              <li>
                <a href="#features" className="hover:text-rose-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="sm:m-0 md:ml-auto flex gap-5 items-center">
            <Facebook className=" fill-white hover:fill-rose-500 cursor-pointer" />
            <Twitter className=" fill-white hover:fill-rose-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
