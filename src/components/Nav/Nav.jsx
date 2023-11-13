import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const border = "hover:border-b-2 border-[#FF9143]";

  return (
    <div className="border fixed top-0 flex flex-row justify-between items-center w-[1180px] mt-5 z-10 h-16">
      <div>
        <h1 className="text-2xl">JB</h1>
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
