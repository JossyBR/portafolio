import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { vector } from "../../assets";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const border = "border-b-2 border-transparent hover:border-[#FF9143]";

  return (
    <div className="fixed top-0 flex flex-row justify-between items-center w-[1180px] mt-5 z-10 h-16 p-2">
      <div className="w-[100px] h-16 flex justify-center relative">
        <h5 className={`text-4xl text-center z-10 my-auto`}>JB</h5>
        <div className="absolute top-0 w-[100px] z-0 left-0 bottom-0">
          <img src={vector} alt="" />
        </div>
      </div>
      <div className=" flex flex-row gap-10">
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
