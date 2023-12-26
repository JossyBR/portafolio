import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Textarea } from "@material-tailwind/react";

import { Formulario } from "../Formulario/Formulario";

const Footer = () => {
  const border = "border-b-2 border-transparent text-sm hover:border-[#FF9143]";

  return (
    <div className="bg-black min-h-screen ">
      <div className="h-16"></div>
      <h2 className="text-3xl mt-[25px] font-bold lg:text-5xl lg:mb-7 ml-2">
        Contacto
      </h2>
      <div className="flex flex-col items-center">
        <div className="gap-14 flex flex-col lg:flex lg:flex-row justify-center items-center lg:gap-28 lg:mb-8">
          <div className="mt-10 flex flex-col">
            <Formulario />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 sm:flex sm:flex-row sm:gap-20 sm:items-center">
            <div>
              <h5 className="text-4xl">JB</h5>
            </div>
            <div className="flex flex-col leading-loose ">
              <h4 className="text-base md:text-2xl text-center text-[#FF9143] font-bold ">
                Inicio
              </h4>

              <a href="#acerca" className={border}>
                Acerca de Mi
              </a>
              <a href="#proyectos" className={border}>
                Proyectos
              </a>
            </div>
            <div className="flex flex-col leading-loose">
              <h4 className="text-base text-center md:text-2xl text-[#FF9143] font-bold">
                Social
              </h4>
              <div className="flex flex-row gap-6 ">
                <a
                  href="https://www.linkedin.com/in/joselin-benitez-rivas-ab2575189"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin text-2xl hover:scale-110 hover:shadow-2xl"></i>{" "}
                </a>
                <a href="https://github.com/JossyBR" target="_blank">
                  <i className="fa-brands fa-github text-2xl hover:scale-110 hover:shadow-2xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/jossybnitez/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram text-2xl hover:scale-110 hover:shadow-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center border-t-2 lg:w-[650px] lg:mb-0 lg:mt-32">
          <h4 className="mt-1 mb-1 lg:mt-4 font-bold text-2xl">
            &#169; 2023 Jossy Benitez
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
