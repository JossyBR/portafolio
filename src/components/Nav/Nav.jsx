import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Nav = () => {
  const border = "hover:border-b-2 border-[#FF9143]";

  return (
    <div className="flex flex-row justify-between mt-11">
      <div>LOGO</div>
      <div className=" flex flex-row gap-10">
        <Link to="#inicio" className={border}>
          Inicio
        </Link>
        <Link to="#acerca" className={border}>
          Acerca de Mi
        </Link>
        <Link to="#proyectos" className={border}>
          Proyectos
        </Link>
        <Link to="#habilidades" className={border}>
          Habilidades
        </Link>
        <Link to="#contactame" className={border}>
          Contactame
        </Link>
      </div>
    </div>
  );
};

export default Nav;
