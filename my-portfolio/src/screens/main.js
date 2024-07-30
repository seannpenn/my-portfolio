import React, { Fragment } from "react";
import { NavBar } from "../components/navbar";

export const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-screen-xl mt-20 mx-auto bg-gray-100 border-spacing-2 rounded-xl">
        <h1 className="text-9xl">Hello, Testing123</h1>
      </div>
    </div>
  );
};
