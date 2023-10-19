import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>LOGO</div>
      <div className=" flex flex-row gap-10">
        <Link to="/inicio">Inicio</Link>
        <Link to="/acercade">Acerca de Mi</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contactame">Contactame</Link>
      </div>
    </div>
  );
};

export default Nav;
