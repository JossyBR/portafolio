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
  return (
    <div id="#proyectos" className="">
      <h2 className="text-6xl font-bold mb-16">Mis Proyectos</h2>
      <div className="flex flex-wrap justify-center gap-14">
        {allProyectos.map((proyecto, index) => (
          <Card
            key={index}
            className="w-[560px] h-[768px] bg-transparent border-none mb-16"
          >
            <CardHeader className="w-[560px] h-[620px] ml-0 mt-0">
              <img
                src={proyecto.image}
                alt="card-image"
                className="w-[560px] h-[620px]"
              />
            </CardHeader>

            <CardBody className="text-white">
              <h4 color="blue-gray" className="mb-2 font-bold">
                {proyecto.title}
              </h4>
              <p>{proyecto.description}</p>
            </CardBody>
            <CardFooter className="pt-0 flex flex-row justify-center">
              <Button className="bg-transparent border-2 border-[#FF9143] text-[#FF9143] font-semibold">
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
