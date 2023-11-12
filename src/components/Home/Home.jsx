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
      <div className="h-[1024px]">
        <div className="sticky">
          <Nav className="sticky" />
        </div>
        <div id="inicio" className="my-48">
          <Inicio />
        </div>
      </div>

      <div id="acerca" className="border border-red-800 h-[1024px]">
        <Acerca />
      </div>
      <div id="proyectos" className="h-[2048px]">
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
