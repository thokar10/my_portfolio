const SkillSection = () => {
  return (
    <>
      <div className="bg-gray-600 text-white mt-[7rem]  md:mt-[9rem] md:pt-[5rem] pb-[5rem]">
        <p className="font-bold text-4xl text-center">My Skills</p>
        <div className=" flex justify-center pt-7">
          <div className="w-[50%]  flex flex-col gap-5 ">
            <div className="flex flex-col">
              <p className="font-semibold text-lg pb-4">Html</p>
              <div className="w-[100%] h-[8px] items-center flex bg-gray-400">
                <div className="bg-blue-900 h-[8px] w-[90%]"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold text-lg pb-4">CSS</p>
              <div className="w-[100%] h-[8px] items-center flex bg-gray-400">
                <div className="bg-blue-900 h-[8px] w-[80%]"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold text-lg pb-4">JavaScript</p>
              <div className="w-[100%] h-[8px] items-center flex bg-gray-400">
                <div className="bg-blue-900 h-[8px] w-[70%]"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg pb-4">React Js</p>
              <div className="w-[100%] h-[8px] items-center flex bg-gray-400">
                <div className="bg-blue-900 h-[8px] w-[60%]"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold text-lg pb-4">Node Js</p>
              <div className="w-[100%] h-[8px] items-center flex bg-gray-400">
                <div className="bg-blue-900 h-[8px] w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
