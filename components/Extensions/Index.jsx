import Card from "./Card";
import { GoogleChrome, FireFoxLogo, OperaLogo } from "../icons/ExtensionLogo";

const Extensions = () => {
  const extensionData = [
    {
      id: 1,
      title: "Add to Chrome",
      text: "Minimum Version 62",
      Img: () => {
        return <GoogleChrome />;
      },
      altText: "Google",
      mt: "mt-5 md:mt-0",
    },
    {
      id: 2,
      title: "Add to Firefox",
      text: "Minimum Version 55",
      Img: () => {
        return <FireFoxLogo />;
      },
      altText: "Firefox",
      mt: "mt-5 md:mt-10",
    },
    {
      id: 3,
      title: "Add to Opera",
      text: "Minimum Version 46",
      Img: () => {
        return <OperaLogo />;
      },
      altText: "Opera",
      mt: "mt-5 md:mt-20",
    },
  ];
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
        {extensionData.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            text={data.text}
            Img={data.Img()}
            altText={data.altText}
            mt={data.mt}
          />
        ))}
      </div>
    </div>
  );
};

export default Extensions;
