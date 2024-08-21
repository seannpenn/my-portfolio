import photo from "../assets/img/photo.png";
import { SkillBox } from "../components/skillBox";

export const About = () => {
  return (
    <>
      <section
        // className="max-w-full max-h-full h-fit m-5 px-4 sm:px-6 lg:px-8 bg rounded-md shadow-md"
        className="grid gap-8 max-h-full h-[calc(100vh-76px)] md:grid-cols-2 "
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div
          className="p-6 grid justify-items-center content-center"
          // className="container max-w-1xl flex justify-center items-center h-[calc(100vh-135px)] m-0"
        >
          <img
            // className="rounded-full w-8/12"
            className="w-9/12 rounded-full"
            src={photo}
          />
        </div>
        <div className="text-center content-center md:text-left">
          <h1 className="text-8xl">
            I'M <span className="font-extrabold">SEAN PINOTE</span>{" "}
          </h1>
          <p className="text-4xl font-medium italic tracking-widest">
            Full Stack Developer
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mt-6 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contact me
            </span>
          </button>
        </div>
        {/* <div className="flex container max-w-1xl w-full h-[calc(100vh-120px)]">
        <div className="justify-center items-center text-left my-auto mx-auto">
          <p className="text-8xl  justify-start">
            I'M <span className="font-extrabold">SEAN PINOTE</span>{" "}
          </p>
          <p className="text-4xl font-medium italic tracking-widest justify-start">
            Full Stack Developer
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mt-6 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contact me
            </span>
          </button>
        </div>
      </div> */}
      </section>
      <section
        id="about_section"
        className="max-h-full h-[calc(100vh-76px)] p-6"
      >
        <div className="text-start bg-white">
          <h1 className="text-4xl">My Skills</h1>
          <div className="grid justify-evenly grid-cols-2 gap-4 md:grid-cols-9">
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="Java"
            />
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="PHP"
            />
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="Flutter"
            />
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="GIT Source Control"
            />
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="JavaScript"
            />
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="JQuery"
            />
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="HTML"
            />
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="CSS"
            />
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="Java"
            />
            <SkillBox
              imageLink={
                "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-500x313.png"
              }
              title="Java"
            />
          </div>
        </div>
      </section>
    </>
  );
};
