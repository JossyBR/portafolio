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

// Definir una lista de proyectos
const proyectos = [
  {
    title: "Proyecto 1",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona",
    image: Prueba,
  },
  {
    title: "Proyecto 2",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona",
    image: Prueba,
  },
  {
    title: "Proyecto 3",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona",
    image: Prueba,
  },
  {
    title: "Proyecto 4",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona",
    image: Prueba,
  },
  // Agrega más proyectos según sea necesario
];

const Proyectos = () => {
  return (
    <div className="">
      <h2 className="text-6xl font-bold mb-16">Mis Proyectos</h2>
      <div className="flex flex-wrap justify-center gap-14">
        {proyectos.map((proyecto, index) => (
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
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
