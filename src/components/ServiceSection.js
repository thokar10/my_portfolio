import { FaDraftingCompass } from "react-icons/fa";
import { MdDraw } from "react-icons/md";

const ServiceSection = () => {
  return (
    <>
      <div className="flex flex-col items-center  text-gray-500 md:pt-[7rem] pt-5">
        <p className="font-semibold  md:text-4xl text-3xl text-gray-500">
          My Services
        </p>
        <div className="md:w-[70%] w-auto  md:justify-evenly justify-between md:pt-9 pt-5  flex ">
          <div className="border-2 rounded-3xl hover:bg-slate-300 cursor-pointer w-[45%] shadow-xl shadow-black gap-2  md:p-8 md:gap-2 border-gray-400 flex flex-col items-center">
            <MdDraw className=" text-5xl  text-red-600" />
            <p className="md:text-3xl text-2xl font-bold">Web Design</p>
            <p className="font-semibold text-center">
              I have a talent for web design. I combine creativity and
              practicality to create websites that are both attractive and easy
              to use.
            </p>
          </div>
          <div className="border-2 rounded-3xl hover:bg-slate-300 cursor-pointer w-[45%] shadow-xl shadow-black   md:p-8 md:gap-2 gap-2 p-5 border-gray-400 flex flex-col items-center">
            <FaDraftingCompass className="text-4xl   text-red-600" />
            <p className="md:text-3xl break-words text-xl font-bold">
              Web Development
            </p>
            <p className="font-semibold text-center">
              I am a skilled web developer. I know how to use various coding
              languages and tools to build dynamic and responsive websites that
              are both innovative and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
