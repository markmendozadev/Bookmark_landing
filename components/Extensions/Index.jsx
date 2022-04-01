import Card from "./Card";
import googleLogo from "../icons/logo-chrome.svg";
import firefoxLogo from "../icons/logo-firefox.svg";
import operaLogo from "../icons/logo-opera.svg";

const Extensions = () => {
  return (
    <div className="mt-40 mb-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Download the extension</h2>
        <p className="font-lg mt-4 text-gray-500 w-5/6 md:w-2/6 m-auto">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="flex items-start flex-wrap justify-center mt-10 gap-10">
        <Card
          title="Add to Chrome"
          text="Minimum Version 62"
          img={googleLogo}
          altText="Google"
          mt="mt-5 md:mt-0"
        />
        <Card
          title="Add to Firefox"
          text="Minimum Version 55"
          img={firefoxLogo}
          altText="Firefox"
          mt="mt-5 md:mt-10"
        />
        <Card
          title="Add to Opera"
          text="Minimum Version 46"
          img={operaLogo}
          altText="Opera"
          mt="mt-5 md:mt-20"
        />
      </div>
    </div>
  );
};

export default Extensions;
