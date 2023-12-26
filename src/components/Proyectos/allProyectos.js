// Crear archivo de proyectos.js
import { BiLogoReact } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import {
  huellitas,
  food,
  rickmorty,
  clima,
  notas,
  css,
  html,
  react,
  node,
  redux,
  php,
  figma,
} from "../../assets";

const allProyectos = [
  {
    titulo: "Sistema de notas",
    descripcion:
      "Un sistema simple pero funcional para administrar notas de estudiantes, utlizando PHP, HTML y MySQL, puedes registrar, consultar, actualizar y eliminar estudiantes, docentes, notas y materias.",
    image: notas,
    iconos: [php, html],
    link: "https://github.com/JossyBR/sistema_notas",
  },
  {
    titulo: "Huellitas de amor",
    descripcion:
      "Es una aplicación que tiene como objetivo facilitar el proceso de adopción de mascotas, conectando de manera segura y efectiva a personas que desean adoptar con animales en busca de un hogar amoroso.",
    iconos: [react, redux, node],
    image: huellitas,

    link: "https://huellitas-de-amor-64107.web.app/",
  },
  {
    titulo: "Rick and Morty",
    descripcion:
      "La aplicación permite buscar personajes de la serie, marcar a los personajes como favoritos y aprovechar funciones de ordenamiento ascendente y descendente ⬆️⬇️, así como filtrar personajes por género.",
    image: rickmorty,
    iconos: [react, node, css],
    link: "https://github.com/JossyBR/rick-and-Morty",
  },

  {
    titulo: "APP Clima",
    descripcion:
      "Este proyecto es una API del clima que proporciona acceso instantáneo y actualizado a las condiciones meteorológicas de cualquier país en todo el mundo.",
    image: clima,
    iconos: [react, node, css],
    link: "https://github.com/JossyBR/App-Clima",
  },
];

export default allProyectos;
