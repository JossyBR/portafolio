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
      <div id="inicio">
        <Inicio />
      </div>

      {/* <div
        id="inicio"
        className="border border-black h-[1024px] flex flex-row items-center"
      >
        <Inicio />
      </div> */}

      <div id="acerca">
        <Acerca />
      </div>
      <div id="proyectos">
        <Proyectos />
      </div>
      <div id="habilidades">
        <Habilidades />
      </div>
      <div id="contactame">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
