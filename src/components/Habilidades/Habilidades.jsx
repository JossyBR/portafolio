import React from "react";
import Prueba from "../../assets/Foto2.jpg";
import { css, html, react, node, redux, figma } from "../../assets";
import styles from "./habilidades.module.css";
import { allHabilidades, otrasHabilidades } from "./allHabilidades";

const Habilidades = () => {
  // const repeatedHabilidades = [...allHabilidades, ...allHabilidades];

  // const repeatOtrasHabilidades = [...otrasHabilidades, ...otrasHabilidades];

  return (
    <div className="min-h-screen">
      <div className="h-16"></div>
      <h2 className="text-5xl font-bold mt-14">Habilidades</h2>
      <div className={`flex flex-wrap justify-center gap-8 mt-20 border }`}>
        {allHabilidades.map((habilidad, index) => (
          
          <div
            key={index}
            className={`${styles["animate-loop-scroll"]}flex flex-col items-center font-bold mb-8 w-1/5 border border-black`}
          >
            <img src={habilidad.imagen} alt="" className="w-44 h-44" />
            <h4 className="text-2xl">{habilidad.texto}</h4>
          </div>
        ))}
        {otrasHabilidades.map((habilidad, index) => (
          <div
            key={index}
            className="flex flex-col items-center font-bold mb-8 border"
          >
            <img src={habilidad.imagen} alt="" className="w-44 h-44" />
            <h4 className="text-2xl">{habilidad.texto}</h4>
          </div>
        ))}
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
