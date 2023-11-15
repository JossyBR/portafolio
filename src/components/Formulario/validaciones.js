const validaciones = () => {
    const patrones = {
      nombre: /^[a-zA-Z\s]+$/, // Acepta solo letras y espacios
      correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Valida un formato básico de correo electrónico
    };
  
    const validarNombre = (nombre) => {
      return patrones.nombre.test(nombre);
    };
  
    const validarCorreo = (correo) => {
      return patrones.correo.test(correo);
    };
  
    return {
      validarNombre,
      validarCorreo,
    };
  };
  
  export default validaciones;
  