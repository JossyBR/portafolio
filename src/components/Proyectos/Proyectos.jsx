import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Prueba from "../../assets/Foto2.jpg";
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
    <div className="min-h-screen relative">
      <div className="h-16 "></div>
      <div className="absolute left-0 top-0 w-[550px] z-0">
        <img src={vector} alt="" />
      </div>
      <h2 className="text-5xl font-bold mt-[25px]  ml-2">Proyectos</h2>
      <div className="flex flex-wrap justify-center items-center p-2 h-[700px] gap-4">
        {allProyectos.map((proyecto, index) => (
          <Card
            key={index}
            className="shadow-none w-[450px] h-[600px] bg-transparent transition duration-300 delay-150 hover:scale-95 hover:shadow-xl z-10"
          >
            <CardHeader className="w-[450px] h-[350px] ml-0 mt-0 bg-transparent">
              <img
                src={proyecto.image}
                alt="card-image"
                className="w-[450px] h-[350px] opacity-75 hover:opacity-100"
              />
            </CardHeader>

            <div className="flex flex-row ">
              <CardBody className="text-white h-52 p-0 mt-6 ml-2">
                <h4 color="blue-gray" className="mb-2 font-bold text-2xl">
                  {proyecto.titulo}
                </h4>
                <p className="text-justify">{proyecto.descripcion}</p>
              </CardBody>
              <div className="flex flex-col justify-center items-center gap-10 w-[200px]">
                {/* <div className="flex flex-row">
                  {proyecto.iconos.map((iconName, iconIndex) => (
                    <div key={iconIndex} className="w-8 h-8">
                      {renderIcon(iconName)}
                    </div>
                  ))}
                </div> */}

                <div className="flex flex-row">
                  {proyecto.iconos.map((imagen, iconIndex) => (
                    <div key={iconIndex} className="w-8 h-8">
                      {renderImage(imagen)}
                    </div>
                  ))}
                </div>
                <div className="mb-0">
                  <CardFooter className="">
                    <Button
                      onClick={() => redirigir(proyecto.link)}
                      className="bg-transparent border-2 border-[#FF9143] text-[#FF9143] font-semibold w-36 h-10 rounded-2xl hover:scale-105"
                    >
                      Conoce Más
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </div>
          </Card>
        ))}
        <div className="absolute bottom-[850px] w-[450px] z-0">
          <img src={vector} alt="" />
        </div>
        <div className="absolute bottom-[450px] w-[450px] z-0">
          <img src={vector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
