import React from "react";
import { Button } from "@material-tailwind/react";
import CV from "../../../public/CV_Joselin Benitez.pdf";

const Inicio = () => {
  // //Para descargar el CV
  // const handleDownloadCV = () => {
  //   const link = document.createElement("a"); //se crea un elemento "a"
  //   link.href = CV; //se establece el atirubuto Href, pasandole la URL del documento en este "CV"
  //   link.download = "CV_Joselin_Benitez.pdf"; //Se asigna el atributo download con un nombre personalizado para la descarga en este caso "CV_Joselin_Benitez.pdf"
  //   link.click(); //Se tuiliza el metodo Click
  // };

  //Visualizar en otra ventana
  const abrirPdf = () => {
    window.open(CV, "_blank");
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl">
          Hola <br />{" "}
          <span className="text-7xl leading-loose font-bold">
            Soy <span className="text-[#FF9143]">Jossy Benitez</span>
          </span>
          <br /> y soy FullStack Web Developer{" "}
        </h1>
      </div>

      <div className="ml-40 mt-10">
        <Button
          onClick={abrirPdf}
          className="w-52 bg-[#FF9143] border border-[#FF9143] text-white font-semibold hover:bg-orange-400 hover:scale-105"
        >
          <p className="text-base">Ver CV</p>
        </Button>
      </div>
    </div>
  );
};

export default Inicio;
