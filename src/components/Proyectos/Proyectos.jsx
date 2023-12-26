import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import allProyectos from "./allProyectos";
import { vector } from "../../assets";

const Proyectos = () => {
  const redirigir = (link) => {
    window.open(link, "_blank"); // Abre el enlace en una nueva pestaña
  };

  //para lo iconos
  // const renderIcon = (iconName) => {
  //   switch (iconName) {
  //     case "BiLogoReact":
  //       return <BiLogoReact />;
  //     case "DiCss3":
  //       return <DiCss3 />;
  //     default:
  //       return null;
  //   }
  // };

  const renderImage = (imageName) => {
    return <img src={imageName} alt="Icono" className="w-8 h-8" />;
  };

  return (
    <div className="relative">
      <div className="h-16 "></div>
      <div className="absolute left-0 top-0 w-[550px] z-0">
        <img src={vector} alt="" />
      </div>
      <h2 className="text-3xl ml-2 font-bold md:mt-5 lg:mt-[25px] lg:text-5xl">
        Proyectos
      </h2>
      <div className="mt-10 w-screen flex flex-row flex-wrap justify-center items-center p-2 gap-6  lg:gap-4">
        {allProyectos.map((proyecto, index) => (
          <Card
            key={index}
            className="w-72 h-[450px] shadow-none lg:w-[450px] lg:h-[600px] bg-transparent transition duration-300 delay-150 hover:scale-95 hover:shadow-xl z-10"
          >
            <CardHeader className="w-72 h-60 lg:w-[450px] lg:h-[350px] ml-0 mt-0 bg-transparent">
              <img
                src={proyecto.image}
                alt="card-image"
                className="w-72 h-60 lg:w-[450px] lg:h-[350px] opacity-75 hover:opacity-100"
              />
            </CardHeader>

            <div className="flex flex-row ">
              <CardBody className="text-white mt-2 lg:h-52 p-0 lg:mt-6 ml-2">
                <h4
                  color="blue-gray"
                  className="text-base mb-2 font-bold lg:text-2xl"
                >
                  {proyecto.titulo}
                </h4>
                <p className="text-xs text-justify">{proyecto.descripcion}</p>
              </CardBody>
              <div className="w-32 flex flex-col justify-center items-center gap-10 lg:w-[200px]">
                {/* <div className="flex flex-row">
                  {proyecto.iconos.map((iconName, iconIndex) => (
                    <div key={iconIndex} className="w-8 h-8">
                      {renderIcon(iconName)}
                    </div>
                  ))}
                </div> */}

                <div className="flex flex-row">
                  {proyecto.iconos.map((imagen, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="w-5 h-5 gap-2 lg:w-8 lg:h-8"
                    >
                      {renderImage(imagen)}
                    </div>
                  ))}
                </div>
                <div className="mb-0">
                  <CardFooter className="">
                    <Button
                      onClick={() => redirigir(proyecto.link)}
                      className="w-24 h-10 text-xs text-center flex items-center bg-transparent border-2 border-[#FF9143] text-[#FF9143] font-semibold lg:w-36 lg:h-10 rounded-2xl hover:scale-105"
                    >
                      Conoce Más
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </div>
          </Card>
        ))}
        <div className="absolute z-0 lg:bottom-[850px] lg:w-[450px] ">
          <img src={vector} alt="" />
        </div>
        <div className="absolute z-0 lg:bottom-[450px] lg:w-[450px] ">
          <img src={vector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
