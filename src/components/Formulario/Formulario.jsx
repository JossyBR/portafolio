// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Input, Button, Textarea } from "@material-tailwind/react";
// import validaciones from "./validaciones";

// export const Formulario = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_08wafrv",
//         "template_9y4fetl",
//         form.current,
//         "Tq34g58qqHkrvE_OZ"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div>
//       <h4 className="text-[#FF9143] font-bold text-[32px]">
//         Trabajemos Juntos
//       </h4>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
//       >
//         <div className="mb-1 flex flex-col gap-6">
//           <label variant="h6" color="blue-gray" className="-mb-3">
//             Nombre
//           </label>
//           <Input
//             type="text"
//             name="user_name"
//             size="lg"
//             placeholder="Nombre"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//           />
//           <label variant="h6" color="blue-gray" className="-mb-3">
//             Correo
//           </label>
//           <Input
//             type="email"
//             name="user_email"
//             size="lg"
//             placeholder="Correo"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//           />

//           <label variant="h6" color="blue-gray" className="-mb-3">
//             Mensaje
//           </label>
//           <Textarea name="message" placeholder="Mensaje..." />
//         </div>
//         <div className="flex justify-center">
//           <Button
//             type="submit"
//             value="Send"
//             className="mt-6 bg-transparent border-2
//             border-[#FF9143] text-[#FF9143] font-semibold hover:scale-105"
//             Enviar
//           >
//             Enviar
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input, Button, Textarea } from "@material-tailwind/react";
import validaciones from "./validaciones";

export const Formulario = () => {
  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { validarNombre, validarCorreo } = validaciones();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validarNombre(nombre)) {
      // Realiza alguna acción si el nombre no es válido
      console.log("Nombre no válido");
      return;
    }

    if (!validarCorreo(correo)) {
      // Realiza alguna acción si el correo no es válido
      console.log("Correo no válido");
      return;
    }

    // Resto del código para enviar el correo
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
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {!validarNombre(nombre) && (
            <p className="text-red-500">Ingresa un nombre válido.</p>
          )}
          <label variant="h6" color="blue-gray" className="-mb-3">
            Correo
          </label>
          <Input
            type="email"
            name="user_email"
            size="lg"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {!validarCorreo(correo) && (
            <p className="text-red-500">Ingresa un correo válido.</p>
          )}
          <label variant="h6" color="blue-gray" className="-mb-3">
            Mensaje
          </label>
          <Textarea
            name="message"
            placeholder="Mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            value="Send"
            onClick={sendEmail}
            className="mt-6 bg-transparent border-2
            border-[#FF9143] text-[#FF9143] font-semibold hover:scale-105"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
