import photo from "../assets/img/photo.png";
import CustomCard from "../components/customCard";

export const About = () => {
  return (
    <>
      <section
        // className="max-w-full max-h-full h-fit m-5 px-4 sm:px-6 lg:px-8 bg rounded-md shadow-md"
        className="grid max-h-full h-[calc(100vh-76px)] md:grid-cols-2 "
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div
          className="p-4 grid justify-items-center content-center"
          // className="container max-w-1xl flex justify-center items-center h-[calc(100vh-135px)] m-0"
        >
          <img
            // className="rounded-full w-8/12"
            className="w-9/12 rounded-full"
            src={photo}
          />
        </div>
        <div className="text-center content-center md:text-left w-full md:w-10/12 ">
          <h1 className="text-5xl md:text-7xl">
            I'M <span className="font-extrabold">SEAN PINOTE</span>{" "}
          </h1>
          <h3 className="text-2xl md:text-4xl  font-medium italic tracking-widest">
            Full Stack Developer
          </h3>
          <p className="px-6 md:px-0 my-3 font-mono text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            cupiditate reiciendis aliquam, eaque saepe dolores corrupti magnam
            esse sed id iure repellat nostrum error minus aut eveniet ab.
            Debitis, voluptatibus.
          </p>
          <button className="inline-flex items-center justify-center p-0.5 mt-6 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className=" px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contact me
            </span>
          </button>
        </div>
      </section>
      <section
        id="about_section"
        className="max-h-full h-[calc(100vh-76px)] p-6"
      >
        <div className="text-start bg-white">
          <div className="container mx-auto">
            <h1 className="text-4xl">My Skills</h1>
            <div className="my-5">
              <CustomCard />
            </div>
          </div>

          <div className="container mx-auto">
            <h1 className="text-4xl">Projects</h1>
          </div>
        </div>
      </section>
    </>
  );
};
