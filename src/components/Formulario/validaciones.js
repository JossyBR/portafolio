// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   nombre: Yup.string()
//     .required("Por favor, introduce tu nombre")
//     .min(4, "El nombre debe tener al menos 4 caracteres")
//     .max(15, "El nombre no puede tener más de 15 caracteres"),

//   correo: Yup.string()
//     .email("Correo electrónico inválido")
//     .required("Por favor, introduce tu dirección de correo electrónico."),

//   mensaje: Yup.string()
//     .required("Por favor, introduce un mensaje.")
//     .min(5, "El mensaje debe tener al menos 5 caracteres") // Corregido aquí
//     .max(100, "El mensaje no puede tener más de 100 caracteres"),
// });

// export default validationSchema;

const validaciones = (data) => {
  let errors = {};

  // let name = /^[a-zA-Z\s]+$/ // Acepta solo letras y espacios
  // let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Valida un formato básico de correo electrónico

  let nameRegex = /^[a-zA-Z\s]+$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let msjRegex = /^[a-zA-Z\s]+$/;

  if (!data.user_name.trim()) {
    errors.user_name = 'El campo "Nombre" no debe ser vacío';
  } else if (!nameRegex.test(data.user_name)) {
    errors.user_name = "Ingresa un nombre válido";
  }

  if (!data.user_email.trim()) {
    errors.user_email = 'El campo "Correo" no debe ser vacío';
  } else if (!emailRegex.test(data.user_email)) {
    errors.user_email = "Ingresa un correo válido";
  }

  if (!data.message.trim()) {
    errors.message = "Escribe un mensaje";
  } else if (!msjRegex.test(data.message)) {
    errors.message = "Ingresa un mensaje válido";
  }

  return errors;

  // return {
  //   validarNombre,
  //   validarCorreo,
  // };
};

export default validaciones;
