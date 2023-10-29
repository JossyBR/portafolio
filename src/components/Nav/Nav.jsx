import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Nav = () => {
  const border = "hover:border-b-2 border-[#FF9143]";

  return (
    <div className="flex flex-row justify-between mt-11">
      <div>LOGO</div>
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
