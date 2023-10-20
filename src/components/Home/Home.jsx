import React from "react";
import Nav from "../Nav/Nav";
import Inicio from "../Inicio/Inicio";
import Acerca from "../Acerca/Acerca";
import Proyectos from "../Proyectos/Proyectos";
import Habilidades from "../Habilidades/Habilidades";

const Home = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Inicio />
      </div>
      <div>
        <Acerca />
      </div>
      <div>
        <Proyectos />
      </div>
      <div>
        <Habilidades />
      </div>
      {/* <div>Inicio</div>
      <div>Acerca de mi</div>
      <div>Proyectos</div>
      <div>Habilidades</div>
      <div>Footer</div> */}
    </div>
  );
};

export default Home;
