import React from "react";
import { Button } from "@material-tailwind/react";

const Inicio = () => {
  // //Para descargar el CV
  // const handleDownloadCV = () => {
  //   const link = document.createElement("a"); //se crea un elemento "a"
  //   link.href = CV; //se establece el atirubuto Href, pasandole la URL del documento en este "CV"
  //   link.download = "CV_Joselin_Benitez.pdf"; //Se asigna el atributo download con un nombre personalizado para la descarga en este caso "CV_Joselin_Benitez.pdf"
  //   link.click(); //Se tuiliza el metodo Click
  // };

  return (
    <div className="border border-black  min-h-screen flex flex-row items-center">
      <div>
        <h1 className="text-4xl">
          Hola <br />{" "}
          <span className="text-7xl leading-loose font-bold">
            Soy <span className="text-[#FF9143]">Jossy Benitez</span>
          </span>
          <br /> y soy FullStack Web Developer{" "}
        </h1>
      </div>
    </div>
  );
};

export default Inicio;
