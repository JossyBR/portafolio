import React from "react";
import Nav from "../Nav/Nav";
import Inicio from "../Inicio/Inicio";
import Acerca from "../Acerca/Acerca";
import Proyectos from "../Proyectos/Proyectos";
import Habilidades from "../Habilidades/Habilidades";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <div
        id="inicio"
        className="border border-black h-[1024px] flex flex-row items-center"
      >
        <Inicio />
      </div>

      <div id="acerca" className="h-[1024px] flex flex-row items-center justify-center">
        <Acerca />
      </div>
      <div id="proyectos" className="border h-[2048px]">
        <Proyectos />
      </div>
      <div id="habilidades" className="h-[1024px]">
        <Habilidades />
      </div>
      <div id="contactame" className="h-[1024px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
