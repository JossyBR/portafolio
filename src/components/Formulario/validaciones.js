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
  
      let name = /^[a-zA-Z\s]+$/ // Acepta solo letras y espacios
      let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Valida un formato básico de correo electrónico
 

      if(!name.test(data.nombre)){
        errors.e1 = 'Ingresa un nombre valido'
        document.querySelector('#name').classList.add('error');
      }

      if(!data.nombre){
        errors.e2 = 'Ingresa un nombre'
      }

    // const validarNombre = (nombre) => {
    //   return patrones.nombre.test(nombre);
    // };

    // const validarCorreo = (correo) => {
    //   return patrones.correo.test(correo);
    // };

    return {
      validarNombre,
      validarCorreo,
    };
  };

  export default validaciones;
