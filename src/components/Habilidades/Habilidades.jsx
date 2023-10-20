import React from "react";
import Prueba from "../../assets/Foto2.jpg";
import { css, html, react, node, redux } from "../../assets";

const habilidades = [
  {
    imagen: css,
  },
  {
    imagen: html,
  },
  {
    imagen: react,
  },
  {
    imagen: node,
  },
  {
    imagen: redux,
  },
];

const Habilidades = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold mb-5">Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-44">
        {habilidades.map((habilidad, index) => (
          <img
            key={index}
            src={habilidad.imagen}
            alt=""
            className="w-[107px h-[175px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
