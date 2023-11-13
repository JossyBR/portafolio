import React from "react";
import Prueba from "../../assets/Foto2.jpg";
import { css, html, react, node, redux, figma } from "../../assets";
import allHabilidades from "./allHabilidades";

const Habilidades = () => {
  return (
    <div className="min-h-screen border border-orange-800 flex flex-col justify-center ">
      <div className="h-16"></div>
      <h2 className="text-6xl font-bold ">Habilidades</h2>
      <div className="border flex flex-row flex-wrap justify-center gap-44">
        {allHabilidades.map((habilidad, index) => (
          <div
            key={index}
            className="flex flex-col w-1/5 items-center font-bold"
          >
            <img src={habilidad.imagen} alt="" className="w-44 h-44" />
            <h4 className="text-2xl">{habilidad.texto}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
