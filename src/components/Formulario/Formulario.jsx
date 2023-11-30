import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input, Button, Textarea } from "@material-tailwind/react";
import validarCampos from "./validaciones";
import Swal from "sweetalert2";

export const Formulario = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // setFormData((prevData) => ({ ...prevData, [name]: value }));

    const validationErrors = validarCampos({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validationErrors });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validar antes de enviar el correo
    const validationErrors = validarCampos(formData);
    setErrors(validationErrors);

    // Si hay errores, no enviar el formulario
    if (Object.keys(validationErrors).length === 0) {
      console.log("Datos del formulario:", formData);
      emailjs
        .sendForm(
          "service_08wafrv",
          "template_9y4fetl",
          form.current,
          "Tq34g58qqHkrvE_OZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Mostrar SweetAlert de éxito
            Swal.fire({
              icon: "success",
              title: "Correo enviado con éxito",
              text: "¡Gracias por tu mensaje!",
            });
            // Restablecer el estado del formulario - no me funciona para limpiar el formulario
            setFormData({
              user_name: "",
              user_email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
            // Mostrar SweetAlert de error
            Swal.fire({
              icon: "error",
              title: "Error al enviar el correo",
              text: "Por favor, inténtalo de nuevo.",
            });
          }
        );
    }
  };

  return (
    <div>
      <h4 className="text-[#FF9143] font-bold text-[32px]">
        Trabajemos Juntos
      </h4>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <label variant="h6" color="blue-gray" className="-mb-3">
            Nombre
          </label>
          <Input
            type="text"
            name="user_name"
            size="lg"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
              errors.nombre ? "error" : ""
            }`}
          />
          {/* {errors.nombre && <p className="text-red-500">{errors.nombre}</p>} */}

          {errors.user_name && errors.user_name.length > 0 && (
            <p className="text-red-500">{errors.user_name}</p>
          )}

          <label variant="h6" color="blue-gray" className="-mb-3">
            Correo
          </label>
          <Input
            type="email"
            name="user_email"
            size="lg"
            placeholder="Correo"
            value={formData.correo}
            onChange={handleChange}
            className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
              errors.user_email ? "error" : ""
            }`}
          />
          {/* {errors.correo && <p className="text-red-500">{errors.correo}</p>} */}

          {errors.user_email && errors.user_email.length > 0 && (
            <p className="text-red-500">{errors.user_email}</p>
          )}

          <label variant="h6" color="blue-gray" className="-mb-3">
            Mensaje
          </label>
          <Textarea
            name="message"
            placeholder="Mensaje..."
            value={formData.mensaje}
            onChange={handleChange}
          />

          {errors.message && errors.message.length > 0 && (
            <p className="text-red-500">{errors.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="mt-6 bg-transparent border-2
            border-[#FF9143] text-[#FF9143] font-semibold opacity-70 hover:opacity-100 hover:scale-105"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

// import React from "react";
// import emailjs from "@emailjs/browser";
// import { Button } from "@material-tailwind/react";
// import validationSchema from "./validaciones";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// export const Formulario = () => {
//   const sendEmail = (values, { setSubmitting }) => {
//     emailjs
//       .sendForm(
//         "service_08wafrv",
//         "template_9y4fetl",
//         values,
//         "Tq34g58qqHkrvE_OZ"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       )
//       .finally(() => {
//         setSubmitting(false);
//       });
//   };

//   return (
//     <div>
//       <h4 className="text-[#FF9143] font-bold text-[32px]">
//         Trabajemos Juntos
//       </h4>

//       <Formik
//         initialValues={{
//           nombre: "",
//           correo: "",
//           mensaje: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={sendEmail}
//       >
//         {({ isSubmitting, errors, values, handleChange }) => (
//           <Form>
//             <Field
//               label="Nombre"
//               name="nombre"
//               type="text"
//               error={errors.nombre}
//             />
//             <Field
//               label="Correo"
//               name="correo"
//               type="email"
//               error={errors.correo}
//             />
//             <Field
//               label="Mensaje"
//               name="mensaje"
//               type="text"
//               error={errors.mensaje}
//               as="textarea"
//             />

//             <Button type="submit" disabled={isSubmitting}>
//               Enviar
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Formulario;
