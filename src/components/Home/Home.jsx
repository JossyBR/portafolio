import React from "react";
import Nav from "../Nav/Nav";
import Inicio from "../Inicio/Inicio";
import Acerca from "../Acerca/Acerca";

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
      {/* <div>Inicio</div>
      <div>Acerca de mi</div>
      <div>Proyectos</div>
      <div>Habilidades</div>
      <div>Footer</div> */}
    </div>
  );
};

export default Home;
