// import React from "react";
// import { Button, Image } from "@material-tailwind/react";
// import Prueba from "../../assets/habilidades/figma.svg";
// import styles from "./inicio.module.css";
// import { css, html, react, node, redux, figma } from "../../assets";

// const Inicio = () => {
//   // //Para descargar el CV
//   // const handleDownloadCV = () => {
//   //   const link = document.createElement("a"); //se crea un elemento "a"
//   //   link.href = CV; //se establece el atirubuto Href, pasandole la URL del documento en este "CV"
//   //   link.download = "CV_Joselin_Benitez.pdf"; //Se asigna el atributo download con un nombre personalizado para la descarga en este caso "CV_Joselin_Benitez.pdf"
//   //   link.click(); //Se tuiliza el metodo Click
//   // };

//   return (
//     <div className="min-h-screen flex flex-row items-center justify-around border">
//       <div className="border border-black">
//         <h1 className="text-4xl animate__animated animate__slideInLeft">
//           Hola <br />{" "}
//           <span className="text-7xl leading-loose font-bold">
//             Soy <span className="text-[#FF9143] ">Jossy Benitez</span>
//           </span>
//           <br /> y soy FullStack Web Developer{" "}
//         </h1>
//       </div>
//       <div className={`${styles.targetParentElement} border relative`}>
//         <img
//           src={Prueba}
//           className={`${styles.yourAnimation} ${styles.image} w-11 h-11 top-0 absolute`}
//           alt="Imagen 1"
//         />
//         <img
//           src={css}
//           className={`${styles.yourAnimation} ${styles.image} w-11 h-11 top-0 absolute`}
//           alt="Imagen 2"
//         />
//         <img
//           src={html}
//           className={`${styles.yourAnimation} ${styles.image} w-11 h-11 top-0 absolute`}
//           alt="Imagen 3"
//         />
//         <img
//           src={react}
//           className={`${styles.yourAnimation} ${styles.image} w-11 h-11 top-0 `}
//           alt="Imagen 4"
//         />
//       </div>
//     </div>
//   );
// };

// export default Inicio;

import React, { useState, useEffect } from "react";
import { Button, Image } from "@material-tailwind/react";
import Prueba from "../../assets/habilidades/figma.svg";
import styles from "./inicio.module.css";
import { css, html, javascript, react, node, redux, figma } from "../../assets";

const Inicio = () => {
  const tamano = "w-20 h-20 top-0 absolute";
  // Estado para almacenar el número de la imagen actual
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const animationDuration = 3000; // Duración de la animación en milisegundos

    // Función que se ejecuta en cada iteración del intervalo
    const loopAnimation = () => {
      // Incrementa el número de la imagen actual en un bucle entre 1 y 4
      setCurrentImage((prev) => (prev % 7) + 1); // Hace un bucle entre 1 y 4
    };

    // Configura un intervalo para ejecutar la animación
    const intervalId = setInterval(loopAnimation, animationDuration);

    // Limpieza del intervalo para evitar fugas de memoria
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-row items-center justify-around">
      <div>
        <h1 className="text-4xl animate__animated animate__slideInLeft">
          Hola <br />{" "}
          <span className="text-7xl leading-loose font-bold">
            Soy <span className="text-[#FF9143] ">Jossy Benitez</span>
          </span>
          <br /> y soy FullStack Web Developer{" "}
        </h1>
      </div>
      <div className={`${styles.targetParentElement} relative`}>
        <img
          src={css}
          className={`${styles.yourAnimation} ${tamano} ${
            // Si currentImage es 1, no se aplica la clase hideImage, de lo contrario, se aplica
            currentImage === 1 ? "" : styles.hideImage
          }`}
          alt="Imagen 1"
        />
        <img
          src={html}
          className={`${styles.yourAnimation} ${tamano} ${
            currentImage === 2 ? "" : styles.hideImage
          }`}
          alt="Imagen 2"
        />
        <img
          src={javascript}
          className={`${styles.yourAnimation} ${tamano} ${
            currentImage === 3 ? "" : styles.hideImage
          }`}
          alt="Imagen 3"
        />
        <img
          src={react}
          className={`${styles.yourAnimation} ${tamano} ${
            currentImage === 4 ? "" : styles.hideImage
          }`}
          alt="Imagen 4"
        />
        <img
          src={node}
          className={`${styles.yourAnimation} ${tamano} ${
            currentImage === 5 ? "" : styles.hideImage
          }`}
          alt="Imagen 5"
        />
        <img
          src={redux}
          className={`${styles.yourAnimation} ${tamano} ${
            currentImage === 6 ? "" : styles.hideImage
          }`}
          alt="Imagen 6"
        />
        <img
          src={figma}
          className={`${styles.yourAnimation} w-20 h-20 top-0 ${
            currentImage === 7 ? "" : styles.hideImage
          }`}
          alt="Imagen 7"
        />
      </div>
    </div>
  );
};

export default Inicio;
