import { Dropdown } from "antd";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import ServiceSection from "./components/ServiceSection";
import SkillSection from "./components/SkillSection";
import { IoMenu } from "react-icons/io5";

const HomePage = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          href="#home"
          className="font-bold cursor-pointer hover:text-red-500 hover:scale-95"
        >
          Home
        </a>
      ),
    },
  ];

  return (
    <>
      {/* header part */}
      <div className="bg-[#1470af]  p-5 text-white" id="home">
        <div className="flex justify-center">
          <div className="md:w-[90%]  md:p-4  flex  w-[90%] justify-between items-center">
            <p className=" font-semibold md:text-[3rem] text-2xl">
              Sabin Thokar
            </p>
            <div className="flex anchor-links md:gap-7   tracking-wider text-lg">
              <a
                href="#home"
                className="font-bold cursor-pointer hover:text-red-500 hover:scale-95"
              >
                Home
              </a>
              <a
                href="#about"
                className="font-bold cursor-pointer hover:text-red-500 hover:scale-95"
              >
                About
              </a>
              <a
                href="#services"
                className="font-bold cursor-pointer hover:text-red-500 hover:scale-95"
              >
                Services
              </a>
              <a
                href="#skills"
                className="font-bold cursor-pointer hover:text-red-500 hover:scale-95"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="font-bold cursor-pointer hover:text-red-500 hover:scale-95"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="font-bold cursor-pointer hover:text-red-500 hover:scale-95"
              >
                Contact
              </a>
              <div className="menuOptions">
                {" "}
                <Dropdown
                  menu={{ items }}
                  className="text-2xl"
                  placement="bottomCenter"
                >
                  <IoMenu />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="flex fade justify-center md:pt-[6rem] ">
          <div className="md:w-[60%] w-[90%]  pt-[4rem]  flex flex-col items-center md:flex-row  md:justify-center md:gap-8 md:p-4">
            <div
              className="md:w-[30%] w-[100%] md:h-[15rem] h-[10rem] shadow-md shadow-blue-300  bg-cover bg-no-repeat bg-center md:rounded-[50%]"
              style={{
                backgroundImage: `url('/photo.jpeg')`,
              }}
            ></div>
            <div className="flex flex-col justify-center pt-9   md:w-[60%] ">
              <p className="text-md tracking-wider font-semibold text-gray-300  italic">
                Hello,
              </p>
              <p className="md:text-3xl text-2xl font-semibold w-[100%] ">
                I am a web developer who loves creating beautiful websites.If
                you want me to build a website, please contact me and we will
                get in touch soon
              </p>
            </div>
          </div>
        </div>

        {/* About me */}
        <div id="about" className="flex flex-col items-center pt-[8rem] pb-9">
          <p className="font-semibold text-3xl"> About me </p>
          <div className="md:w-[70%] w-[100%] md:pt-7 p-5 text-xl font-semibold ">
            A skilled Full Stack Developer with expertise in both front-end and
            back-end technologies. Experienced in creating user interfaces with
            HTML, CSS, and JavaScript, and using React for more dynamic
            features. Specialized in back-end development with Node.js,
            Express.js, and MongoDB, handling server tasks and data management.
            Passionate about crafting engaging and easy-to-use applications,
            committed to continuous learning, and eager to apply problem-solving
            skills and enthusiasm for web development in a professional setting.
          </div>
        </div>
      </div>
      {/* service part */}
      <div id="services">
        <ServiceSection />
      </div>
      {/* skills part */}
      <div id="skills">
        <SkillSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
