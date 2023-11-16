import * as Yup from "yup";

const validationSchema = Yup.object({
  nombre: Yup.string()
    .required("Por favor, introduce tu nombre")
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .max(15, "El nombre no puede tener más de 15 caracteres"),

  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Por favor, introduce tu dirección de correo electrónico."),

    mensaje: Yup.string()
    .required("Por favor, introduce un mensaje.")
    .min(5, "El apellido debe tener al menos 5 caracteres")
    .max(100, "El aellido no puede tener más de 15 caracteres"),

});

export default validationSchema;







// const validaciones = () => {
//     const patrones = {
//       nombre: /^[a-zA-Z\s]+$/, // Acepta solo letras y espacios
//       correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Valida un formato básico de correo electrónico
//     };
  
//     const validarNombre = (nombre) => {
//       return patrones.nombre.test(nombre);
//     };
  
//     const validarCorreo = (correo) => {
//       return patrones.correo.test(correo);
//     };
  
//     return {
//       validarNombre,
//       validarCorreo,
//     };
//   };
  
//   export default validaciones;
  