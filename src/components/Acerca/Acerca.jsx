import React from "react";
import { Card, Button } from "@material-tailwind/react";
import prueba from "../../assets/Foto2.jpg";

const Acerca = () => {
  return (
    <div className="mt-[180px] mb-11 flex justify-center ">
      <div className="flex flex-row w-[967px] bg-[#1C1E22] text-white gap-8 rounded-lg ">
        <div className="ml-6 mt-6 mb-6 w-[326px] h-[410px] rounded-lg">
          <img
            src={prueba}
            alt="Acerca de"
            className="w-[326px] h-[405px] rounded-lg "
          />
        </div>
        <div className="w-[560px] mt-6 mr-6">
          <h3 className="text-5xl mb-[32px]">Acerca de Mi</h3>
          <p className="text-base">
            Hola! mi nombre es Jossy Benitez y soy Full Stack Developer con
            sólida formación en tecnologías como HTML, CSS, JavaScript, React,
            Redux, Express y Node.js. Mi interés principal radica en aprender y
            aplicar mis conocimientos para contribuir al desarrollo de
            soluciones web efectivas y seguras. Combino mis habilidades técnicas
            con una sólida formación en administración seguridad y salud en el
            trabajo, con experiencia en diseño e implementación del sistema de
            gestión de seguridad y salud en el trabajo SG-SST.
          </p>
          texto
        </div>
      </div>
    </div>
  );
};

export default Acerca;
