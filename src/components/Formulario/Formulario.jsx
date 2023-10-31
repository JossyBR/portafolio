import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input, Button, Textarea } from "@material-tailwind/react";

export const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <label variant="h6" color="blue-gray" className="-mb-3">
            Correo
          </label>
          <Input
            type="email"
            name="user_email"
            size="lg"
            placeholder="Correo"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <label variant="h6" color="blue-gray" className="-mb-3">
            Mensaje
          </label>
          <Textarea name="message" placeholder="Mensaje..." />
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            value="Send"
            className="mt-6 bg-transparent border-2
            border-[#FF9143] text-[#FF9143] font-semibold"
            Enviar
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};
