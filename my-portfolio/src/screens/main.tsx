import React from "react";
import { NavBar } from "../components/navbar";
import { About } from "./about";

export const Main = () => {
  return (
    <div className="min-h-full bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <NavBar />
      {/* <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header> */}
      <main>
        <About />
      </main>
    </div>
  );
};
