// import React, { useState, useEffect } from "react";
// import { Button } from "@material-tailwind/react";
// import { vector } from "../../assets";
// // import { SidebarWithBurgerMenu } from "./Burger";
// import { MenuDefault } from "./Burguer2";

// const Nav = () => {
//   const [openNav, setOpenNav] = useState(false);
//   const border =
//     "border-b-2 border-transparent hover:border-[#FF9143] text-xs sm:text-sm md:text-base lg:text-lg";

//   return (
//     <div className="mb-0 mt-5 z-50 h-10 p-2 gap-2 fixed top-0 flex flex-row justify-between items-center sm:gap-20 md:h-16 lg:w-[1000px] lg:p-4">
//       <div className="w-10 h-10 z-0 absolute left-0 bottom-0 sm:w-12 sm:h-12 lg:w-24 lg:h-16">
//         <img src={vector} alt="" />
//       </div>
//       <div className="flex justify-center relative">
//         <h5 className={`text-xl text-center lg:ml-3 lg:text-4xl z-10`}>JB</h5>
//       </div>
//       <div className="flex flex-row gap-2 lg:gap-10 sm:gap-5">
//         <a href="#inicio" className={`${border} scroll-smooth scroll-my-0`}>
//           Inicio
//         </a>
//         <a href="#acerca" className={`${border} scroll-smooth scroll-my-0`}>
//           Acerca de Mi
//         </a>
//         <a href="#proyectos" className={`${border} scroll-smooth scroll-my-0`}>
//           Proyectos
//         </a>
//         <a
//           href="#habilidades"
//           className={`${border} scroll-smooth scroll-my-0`}
//         >
//           Habilidades
//         </a>
//         <a href="#contactame" className={`${border} scroll-smooth scroll-my-0`}>
//           Contactame
//         </a>
//       </div>
//       <div>
//         {/* <SidebarWithBurgerMenu /> */}
//         <MenuDefault />
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React, { useState, useEffect } from "react";
import { MenuDefault } from "./menuBurguer";
import { vector } from "../../assets";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-0 mt-5 z-50 h-16 w-80 p-2 gap-2 fixed top-0 flex flex-row justify-between items-center sm:gap-20 md:h-16 lg:w-[1000px] lg:p-4 lg:mx-auto">
      <div className=" absolute left-0 bottom-0 w-12 h-10 sm:w-12 sm:h-12 lg:w-24 lg:h-16">
        <img src={vector} alt="" />
      </div>
      <div className="flex justify-center relative">
        <h5 className={`text-3xl text-center lg:ml-3 lg:text-4xl z-10`}>JB</h5>
      </div>
      <div className="hidden lg:flex justify-center relative">
        {/* Mostrar el otro menú en pantallas más grandes */}
        <div className="flex flex-row gap-2 lg:gap-10 sm:gap-5">
          <a
            href="#inicio"
            className="border-b-2 border-transparent hover:border-[#FF9143] text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Inicio
          </a>
          <a
            href="#acerca"
            className="border-b-2 border-transparent hover:border-[#FF9143] text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Acerca de Mi
          </a>
          <a
            href="#proyectos"
            className="border-b-2 border-transparent hover:border-[#FF9143] text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Proyectos
          </a>
          <a
            href="#habilidades"
            className="border-b-2 border-transparent hover:border-[#FF9143] text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Habilidades
          </a>
          <a
            href="#contactame"
            className="border-b-2 border-transparent hover:border-[#FF9143] text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Contactame
          </a>
        </div>
      </div>
      {/* Mostrar el menú predeterminado en pantallas móviles */}
      <div className={`lg:hidden ${isMobile ? "block" : "hidden"}`}>
        <MenuDefault />
      </div>
    </div>
  );
};

export default Nav;
