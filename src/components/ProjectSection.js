import Link from "antd/es/typography/Link";
import { useRef } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ProjectSection = () => {
  const scrollContainerRef = useRef(null);
  const scrollAmount = 500;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="flex flex-col items-center pt-[5rem]">
        <p className="font-semibold md:text-4xl text-3xl text-gray-500">
          My Projects
        </p>
      </div>

      <div className="flex justify-center relative ">
        <BsFillArrowLeftCircleFill
          className="md:text-5xl  text-2xl hover:cursor-pointer hover:scale-90 absolute md:left-[10%] left-[1%] top-[40%] md:top-[45%]  text-red-600"
          onClick={scrollLeft}
        />
        <BsFillArrowLeftCircleFill
          className="md:text-5xl rotate-180  text-2xl hover:cursor-pointer hover:scale-90 absolute md:right-[10%] right-[7%] top-[40%] md:top-[45%]  text-red-600"
          onClick={scrollRight}
        />
        <div
          className="md:w-[70%] w-[80%] pt-7 text-gray-500  projectGroup   overflow-hidden   flex "
          ref={scrollContainerRef}
        >
          {/* first div of grid  */}
          <div
            className="grid-Container w-[100%] grid md:p-[20px] "
            style={{
              gridTemplateColumns: "auto auto ",
              gridGap: "20px",
              flex: "none",
            }}
          >
            <Link href={"https://github.com/thokar10/E-commerce_Frontend"}>
              <div className=" shadow-lg  hover:cursor-pointer hover:bg-slate-300  shadow-black rounded-3xl w-[100%] md:p-8 md:gap-2 border-gray-500 flex flex-col items-center">
                <div
                  className="h-[200px] w-[200px]  bg-repeat-x  rounded-[50%] bg-center bg-contain"
                  style={{
                    backgroundImage:
                      'url("https://www.shutterstock.com/image-vector/creative-modern-abstract-ecommerce-logo-260nw-2134594701.jpg")',
                  }}
                />
                <p className="text-3xl font-bold">E-Commerce</p>
              </div>
            </Link>

            <Link href={"https://github.com/thokar10/Digital_Wallet_Frontend"}>
              <div className=" shadow-lg  hover:cursor-pointer hover:bg-slate-300   shadow-black rounded-3xl w-[100%] md:p-8 md:gap-2  flex flex-col items-center">
                <div
                  className="h-[200px] w-[200px]  hover:cursor-pointer hover:bg-slate-300     rounded-[50%] border-gray-400 bg-center bg-contain"
                  style={{
                    backgroundImage:
                      'url("https://www.shutterstock.com/image-vector/digital-wallet-logo-design-template-600nw-2098543471.jpg")',
                  }}
                />
                <p className="text-3xl font-bold">Digital Wallet</p>
              </div>
            </Link>
          </div>

          {/* second div of grid */}
          <div
            className=" w-[100%] grid md:p-[20px]"
            style={{
              gridTemplateColumns: "auto auto ",
              gridGap: "20px",
              flex: "none",
            }}
          >
            <Link href={"https://github.com/thokar10/Tour-Travel-Frontend"}>
              <div className=" shadow-lg  border-[1px]  hover:cursor-pointer hover:bg-slate-300   shadow-black rounded-3xl w-[100%] md:p-8 md:gap-2 border-gray-500 flex flex-col items-center">
                <div
                  className="h-[200px] w-[200px]  bg-repeat-x  rounded-[50%]  bg-center bg-contain"
                  style={{
                    backgroundImage:
                      'url("https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722556800&semt=ais_hybrid")',
                  }}
                />
                <p className="text-3xl font-bold">Tour and Travel</p>
              </div>
            </Link>
            <Link href={"https://github.com/thokar10/Drinks_Collection"}>
              <div className=" shadow-lg  hover:cursor-pointer hover:bg-slate-300  border-[1px]  shadow-black rounded-3xl w-[100%] md:p-8 md:gap-2 border-gray-500 flex flex-col items-center">
                <div
                  className="h-[200px] w-[200px]   rounded-[50%] bg-center bg-contain"
                  style={{
                    backgroundImage:
                      'url("https://t4.ftcdn.net/jpg/04/88/34/77/360_F_488347736_Wr8F1VPEvRgqy6i73w2jERNWWYAdRMhw.jpg")',
                  }}
                />
                <p className="text-3xl font-bold">Drink Catalog</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
