import Image from "next/image";
const FeaturesComponent = (props) => {
  return (
    <div className="mt-10 grid p-4 md:p-0 md:grid-cols-2 container mx-auto md:grid-flow-col w-full md:w-5/6 ">
      <div className="relative flex justify-end m-0 md:mr-8">
        <Image
          src={props.icon}
          alt={props.iconAlt}
          className="relative z-20 w-full"
        />
        <div className="absolute rounded-r-full bg-primary bottom-0 right-0  w-screen h-full translate-y-14 md:translate-y-28 -translate-x-32 z-10"></div>
      </div>
      <div className="mt-24 md:m-12 p-4 text-center md:text-left">
        <h2 className={`${props.titleSize} font-bold text-secondary`}>
          {props.title}
        </h2>
        <p className="font-lg mt-4 text-gray-500 w-full md:w-4/6">
          {props.body}
        </p>
        <div className="flex gap-5 mt-4 justify-center md:justify-start">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
