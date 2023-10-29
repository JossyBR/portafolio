import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Textarea } from "@material-tailwind/react";

import { Formulario } from "../Formulario/Formulario";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col items-center h-auto mt-20">
      <div className="flex flex-row justify-center items-center gap-28 mt-12">
        <div>
          <h4 className="text-[#FF9143] font-bold text-[32px]">
            Trabajemos Juntos
          </h4>
          <div className="mt-10 flex flex-col">
            <Formulario />
          </div>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <p variant="h6" color="blue-gray" className="-mb-3">
                Nombre
              </p>
              <Input
                size="lg"
                placeholder="Nombre"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <p variant="h6" color="blue-gray" className="-mb-3">
                Correo
              </p>
              <Input
                size="lg"
                placeholder="Correo"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <p variant="h6" color="blue-gray" className="-mb-3">
                Mensaje
              </p>
              <div className="w-96">
                <Textarea placeholder="Mensaje" />
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="mt-6 bg-transparent border-2 border-[#FF9143] text-[#FF9143] font-semibold">
                Enviar
              </Button>
            </div>
          </form>
        </div>
        <div>Logo</div>
        <div className="flex flex-col leading-loose ">
          <h4 className="text-2xl text-[#FF9143] font-bold ">Inicio</h4>

          <Link>Acerca de Mi</Link>
          <Link>Proyectos</Link>
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

      <div className="flex justify-center border-t-2 w-[1074px] mt-9">
        <h4 className="mt-4 font-bold text-2xl">2023. Jossy Benitez</h4>
      </div>
    </div>
  );
};

export default Footer;
