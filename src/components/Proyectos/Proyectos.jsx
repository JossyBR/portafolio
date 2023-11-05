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

const Proyectos = () => {
  const redirigir = (link) => {
    window.open(link, "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <div id="#proyectos" className="">
      <h2 className="text-6xl font-bold mb-16">Mis Proyectos</h2>
      <div className="flex flex-wrap justify-center gap-14">
        {allProyectos.map((proyecto, index) => (
          <Card
            key={index}
            className="w-[500px] h-[400px] bg-transparent border-none mb-16 transition hover:transition-all hover:scale-105"
          >
            <CardHeader className="w-[500px] h-[250px] ml-0 mt-0 ">
              <img
                src={proyecto.image}
                alt="card-image"
                className="w-[500px] h-[250px]"
              />
            </CardHeader>

            <CardBody className="text-white">
              <h4 color="blue-gray" className="mb-2 font-bold text-2xl">
                {proyecto.titulo}
              </h4>
              <p>{proyecto.descripcion}</p>
            </CardBody>
            <CardFooter className="pt-0 flex flex-row justify-center">
              <Button
                onClick={() => redirigir(proyecto.link)}
                className="bg-transparent border-2 border-[#FF9143] text-[#FF9143] font-semibold hover:scale-105"
              >
                Conoce Más
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
