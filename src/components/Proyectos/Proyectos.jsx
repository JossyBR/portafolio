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
// import { BiLogoReact } from "react-icons/bi";
// import { DiCss3 } from "react-icons/di";

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
    <div id="#proyectos" className="">
      <div className="h-16"></div>
      <h2 className="text-6xl font-bold mt-[25px] mb-7">Proyecto</h2>
      <div className="flex flex-wrap justify-center gap-14">
        {allProyectos.map((proyecto, index) => (
          <Card
            key={index}
            className="shadow-none w-[500px] h-[700px] bg-transparent mb-16 transition hover:transition-all"
          >
            <CardHeader className="w-[500px] h-[450px] ml-0 mt-0 bg-transparent">
              <img
                src={proyecto.image}
                alt="card-image"
                className="w-[500px] h-[450px]"
              />
            </CardHeader>

            <div className="flex flex-row">
              <CardBody className="text-white h-52 p-0 mt-8">
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
      </div>
    </div>
  );
};

export default Proyectos;
