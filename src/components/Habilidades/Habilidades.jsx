import React from "react";
import Prueba from "../../assets/Foto2.jpg";
import { css, html, react, node, redux, figma } from "../../assets";
import styles from "./habilidades.module.css";
import { allHabilidades, otrasHabilidades } from "./allHabilidades";

const Habilidades = () => {
  // const repeatedHabilidades = [...allHabilidades, ...allHabilidades];

  // const repeatOtrasHabilidades = [...otrasHabilidades, ...otrasHabilidades];

  return (
    <div className="border min-h-screen lg:w-[1180px] lg:mx-[350px]">
      <div className="h-16"></div>
      <h2 className="text-3xl ml-2 lg:text-5xl font-bold lg:mt-14">
        Habilidades
      </h2>
      <div className={`gap-5 mt-10 flex flex-col lg:gap-32 lg:mt-20`}>
        <div className={`flex flex-row justify-around`}>
          {allHabilidades.map((habilidad, index) => (
            <div
              key={index}
              className={`flex flex-col items-center font-bold mb-8 rounded-3xl transition duration-300 delay-150 hover:scale-110 hover:shadow-2xl`}
            >
              <img
                src={habilidad.imagen}
                alt=""
                className="w-20 h-20 lg:w-44 lg:h-44"
              />
              <h4 className="text-base lg:text-2xl">{habilidad.texto}</h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-around ">
          {otrasHabilidades.map((habilidad, index) => (
            <div
              key={index}
              className="flex flex-col items-center font-bold mb-8 rounded-3xl transition duration-300 delay-150 hover:scale-110 hover:shadow-2xl"
            >
              <img
                src={habilidad.imagen}
                alt=""
                className="w-20 h-20 lg:w-44 lg:h-44"
              />
              <h4 className="text-base lg:text-2xl">{habilidad.texto}</h4>
            </div>
          ))}
        </div>
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
