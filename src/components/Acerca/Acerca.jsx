import React from "react";
import { Card, Button } from "@material-tailwind/react";
import prueba from "../../assets/Foto2.jpg";
import CV from "../../../public/CV_Joselin Benitez.pdf";
import styles from "./acerca.module.css";

const Acerca = () => {
  //Visualizar en otra ventana
  const abrirPdf = () => {
    window.open(CV, "_blank");
  };
  return (
    <div
      id="#acerca"
      className="flex justify-center items-center  min-h-screen "
    >
      <div className="flex flex-row w-[967px] h-[700px] bg-[#1C1E22] text-white gap-8 rounded-lg ">
        <div className="ml-6 mt-32 mb-6 w-[326px] h-[410px] rounded-lg">
          <img
            src={prueba}
            alt="Acerca de"
            className="w-[326px] h-[405px] rounded-lg "
          />
        </div>
        <div className="w-[560px] mt-32 mr-6">
          <h3 className="text-5xl mb-[32px]">Acerca de Mi</h3>
          <p className="text-base leading-10 ">
            Hola! mi nombre es Jossy Benitez y soy Full Stack Developer con
            sólida formación en tecnologías como HTML, CSS, JavaScript, React,
            Redux, Express y Node.js. Mi interés principal radica en aprender y
            aplicar mis conocimientos para contribuir al desarrollo de
            soluciones web efectivas y seguras. Combino mis habilidades técnicas
            con una sólida formación en administración seguridad y salud en el
            trabajo, con experiencia en diseño e implementación del sistema de
            gestión de seguridad y salud en el trabajo SG-SST.
          </p>

          <div className="ml-40 mt-10">
            <Button
              onClick={abrirPdf}
              className="w-52 bg-[#FF9143] border border-[#FF9143] text-white font-semibold hover:scale-105"
            >
              <p className="text-base">Ver CV </p>
            </Button>
          </div>

          {/* <Button className={`${styles.button} ${styles.svg} ${styles.sparkle}`}> PRUEBA </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Acerca;
