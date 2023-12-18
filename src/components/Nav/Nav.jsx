import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { vector } from "../../assets";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const border =
    "border-b-2 border-transparent hover:border-[#FF9143] text-xs sm:text-sm md:text-base lg:text-lg";

  return (
    <div className="fixed top-0 flex flex-row justify-between items-center w-[300px] mx-2 gap-5 sm:w-[550px] sm:mx-10 lg:w-[1180px] lg:mx-[350px] mt-5 z-20 h-16 p-2 ">
      <div className="lg:w-[100px] lg:h-16 flex justify-center relative">
        <h5 className={`text-2xl text-center lg:text-4xl z-10 my-auto`}>JB</h5>
        <div className="w-10 h-10 z-0 absolute top-0 left-0 bottom-0 lg:w-[100px]">
          <img src={vector} alt="" />
        </div>
      </div>
      <div className="flex flex-row gap-2 lg:gap-10 sm:gap-5">
        <a href="#inicio" className={border}>
          Inicio
        </a>
        <a href="#acerca" className={border}>
          Acerca de Mi
        </a>
        <a href="#proyectos" className={border}>
          Proyectos
        </a>
        <a href="#habilidades" className={border}>
          Habilidades
        </a>
        <a href="#contactame" className={border}>
          Contactame
        </a>
      </div>
    </div>
  );
};

export default Nav;
