import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Textarea } from "@material-tailwind/react";

import { Formulario } from "../Formulario/Formulario";

const Footer = () => {
  const border = "hover:border-b-2 border-[#FF9143]";

  return (
    <div className="bg-black min-h-screen">
      <div className="h-16"></div>
      <h2 className="text-6xl font-bold mt-[25px] mb-7 ml-2">Contacto</h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center items-center gap-28 mb-8">
          <div className="mt-10 flex flex-col">
            <Formulario />
          </div>
          <div>Logo</div>
          <div className="flex flex-col leading-loose ">
            <h4 className="text-2xl text-[#FF9143] font-bold ">Inicio</h4>

            <a href="#acerca" className={border}>
              Acerca de Mi
            </a>
            <a href="#proyectos" className={border}>
              Proyectos
            </a>
          </div>
          <div className="flex flex-col leading-loose">
            <h4 className="text-2xl text-[#FF9143] font-bold">Social</h4>
            <div className="flex flex-row gap-6">
              <a
                href="https://www.linkedin.com/in/joselin-benitez-rivas-ab2575189"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin text-2xl"></i>{" "}
              </a>
              <a href="https://github.com/JossyBR" target="_blank">
                <i class="fa-brands fa-github text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/jossybnitez/" target="_blank">
                <i class="fa-brands fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-t-2 w-[1074px] mb-8">
          <h4 className="mt-4 font-bold text-2xl">2023. Jossy Benitez</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
