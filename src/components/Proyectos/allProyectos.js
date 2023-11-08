// Crear archivo de proyectos.js
import Prueba from "../../assets/Foto2.jpg";
import { huellitas, food, rickmorty, clima } from "../../assets";
import { BiLogoReact } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { css, html, react, node, redux, figma } from "../../assets";

const allProyectos = [
  {
    titulo: "Huellitas de amor",
    descripcion:
      "Es una aplicación que tiene como objetivo facilitar el proceso de adopción de mascotas, conectando de manera segura y efectiva a personas que desean adoptar con animales en busca de un hogar amoroso",
    iconos: [react, node],
    image: huellitas,

    link: "https://huellitas-de-amor-64107.web.app/",
  },
  {
    titulo: "Rick and Morty",
    descripcion:
      "Proyecto realizado durante el Bootcamp Henry y es el resultado de aplicar tecnologías modernas como React, Redux, Node.js y express para la base de datos. Su enfoque es simple pero divertido: permitir a los fans de Rick and Morty explorar una base de datos de personajes de la serie.",
    image: rickmorty,
    iconos: [react, node],
    link: "https://github.com/JossyBR/rick-and-Morty",
  },
  {
    titulo: "API Food",
    descripcion:
      "API Food se enfoca en la construcción de una Single Page Application (SPA) utilizando una variedad de tecnologías, como React, Redux, Node, Express y Sequelize. Se utiliza la API de Spoonacular para búsqueda, visualización, filtrado, ordenamiento y creación de recetas.",
    image: food,
    iconos: [react, node],
    link: "https://github.com/JossyBR/PI-Food-main",
  },
  {
    titulo: "APP Clima",
    descripcion:
      "Este proyecto es una API del clima que proporciona acceso instantáneo y actualizado a las condiciones meteorológicas de cualquier país en todo el mundo.",
    image: clima,
    iconos: [react, node],
    link: "https://github.com/JossyBR/App-Clima",
  },
];

export default allProyectos;
