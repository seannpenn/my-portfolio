interface SkillBoxInterface {
  imageLink: string;
  title: string;
}

export const SkillBox = ({ imageLink, title }: SkillBoxInterface) => {
  return (
    // <div className=" border-4 border-indigo-500/100 shadow-md grid justify-items-center">
    //   <img src={imageLink} />
    // </div>
    <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span className="inline-flex items-center justify-center p-2 rounded-md shadow-sm">
          <img src={imageLink} />
        </span>
      </div>
      <h3 className="text-center text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        {title}
      </h3>
      {/* <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation, including
          upside-down. It even works in outer space.
        </p> */}
    </div>
  );
};
