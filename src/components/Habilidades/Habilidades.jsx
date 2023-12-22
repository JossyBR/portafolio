import React from "react";
import Prueba from "../../assets/Foto2.jpg";
import { css, html, react, node, redux, figma } from "../../assets";
import styles from "./habilidades.module.css";
// import { allHabilidades, otrasHabilidades } from "./allHabilidades";
import allHabilidades from "./allHabilidades";

const Habilidades = () => {
  // const repeatedHabilidades = [...allHabilidades, ...allHabilidades];

  // const repeatOtrasHabilidades = [...otrasHabilidades, ...otrasHabilidades];

  return (
    <div className="min-h-screen lg:w-[1000px] lg:mx-auto">
      <div className="h-16"></div>
      <h2 className="text-3xl ml-2 font-bold md:mt-10 lg:mt-14 lg:text-5xl">
        Habilidades
      </h2>
      <div
        className={`mt-10 gap-5 flex flex-col items-center`}
      >
        <div
          className={`w-full flex flex-row flex-wrap justify-center `}
        >
          {allHabilidades.map((habilidad, index) => (
            <div
              key={index}
              className={`w-1/2 mb-5 mt-5 flex flex-col items-center font-bold rounded-2xl transition duration-300 delay-150 hover:scale-110 md:w-1/3 `}
            >
              <img
                src={habilidad.imagen}
                alt=""
                className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
              />
              <h4 className="text-base lg:text-2xl">{habilidad.texto}</h4>
            </div>
          ))}
        </div>
        {/* <div className="border flex flex-row flex-wrap justify-around">
          {otrasHabilidades.map((habilidad, index) => (
            <div
              key={index}
              className="w-1/2 mb-5 mt-5 flex flex-col items-center font-bold rounded-3xl transition duration-300 delay-150 hover:scale-100 hover:shadow-xl md:hover:scale-110 md:hover:shadow-2xl md:w-auto  lg:w-auto"
            >
              <img
                src={habilidad.imagen}
                alt=""
                className="w-20 h-20 md:w-28 md:h-28"
              />
              <h4 className="text-base lg:text-2xl">{habilidad.texto}</h4>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Habilidades;

// Habilidades.js

// import React from "react";
// import allHabilidades from "./allHabilidades";
// import styles from "./habilidades.module.css";

// const Habilidades = () => {
//   return (
//     <div className="min-h-screen">
//       <div className="h-16"></div>
//       <h2 className="text-5xl font-bold mt-14">Habilidades</h2>
//       <div
//         className={`flex flex-row flex-wrap justify-center gap-8 mt-20 group ${styles["animate-loop-scroll"]}`}
//       >
//         {allHabilidades.map((habilidad, index) => (
//           <div
//             key={index}
//             className="flex flex-col w-1/5 items-center font-bold mb-8 group-hover:paused"
//           >
//             <img src={habilidad.imagen} alt="" className="w-44 h-44" />
//             <h4 className="text-2xl">{habilidad.texto}</h4>
//           </div>
//         ))}

//         {allHabilidades.map((habilidad, index) => (
//           <div
//             key={index}
//             className="flex flex-col w-1/5 items-center font-bold mb-8 group-hover:paused"
//             aria-hidden="true"
//           >
//             <img src={habilidad.imagen} alt="" className="w-44 h-44" />
//             <h4 className="text-2xl">{habilidad.texto}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Habilidades;

// Habilidades.js

// import React from "react";
// import allHabilidades from "./allHabilidades";
// import styles from "./habilidades.module.css";

// const Habilidades = () => {
//   return (
//     <div className="min-h-screen">
//       <div className="h-16"></div>
//       <h2 className="text-5xl font-bold mt-14">Habilidades</h2>
//       <div
//         className={`flex justify-center gap-8 mt-20 ${styles["animate-loop-scroll"]}`}
//       >
//         {allHabilidades.map((habilidad, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center font-bold mb-8"
//           >
//             <img src={habilidad.imagen} alt="" className="w-44 h-44" />
//             <h4 className="text-2xl">{habilidad.texto}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Habilidades;

// Habilidades.js

// import React from "react";
// import allHabilidades from "./allHabilidades";
// import styles from "./habilidades.module.css";

// const Habilidades = () => {
//   // Repite las habilidades para que se muestren en el bucle infinito
//   const repeatedHabilidades = [
//     ...allHabilidades,
//     ...allHabilidades,
//     // ...allHabilidades,
//     // ...allHabilidades,
//   ];

//   return (
//     <div className="min-h-screen">
//       <div className="h-16"></div>
//       <h2 className="text-5xl font-bold mt-14">Habilidades</h2>
//       <div
//         className={`flex justify-center gap-8 mt-20 ${styles["animate-loop-scroll"]}`}
//       >
//         {repeatedHabilidades.map((habilidad, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center font-bold mb-8 w-1/5"
//           >
//             <img src={habilidad.imagen} alt="" className="w-44 h-44" />
//             <h4 className="text-2xl">{habilidad.texto}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Habilidades;

// Habilidades.js

// import React from "react";
// import allHabilidades from "./allHabilidades";
// import styles from "./habilidades.module.css";

// const Habilidades = () => {
//   // Repite las habilidades para que se muestren en el bucle infinito
//   const repeatedHabilidades = [...allHabilidades, ...allHabilidades, ...allHabilidades];

//   return (
//     <div className="min-h-screen">
//       <div className="h-16"></div>
//       <h2 className="text-5xl font-bold mt-14">Habilidades</h2>
//       <div className={`flex justify-center ${styles["animate-loop-scroll"]}`}>
//         {repeatedHabilidades.map((habilidad, index) => (
//           <div key={index} className="flex flex-col items-center font-bold mb-8 w-1/4">
//             {/* w-1/4 hace que cada fila tenga 4 elementos */}
//             <img src={habilidad.imagen} alt="" className="w-44 h-44" />
//             <h4 className="text-2xl">{habilidad.texto}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Habilidades;
