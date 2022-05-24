import React from "react";
import { Encabezado } from "./Encabezado";
import { Formulario } from "./Formulario";
import { Tabla } from "./Tabla";
import { Footer } from "./Footer";

export function Aplicacion() {
  return (
    <React.Fragment>
      <Encabezado />
      <Formulario />
      <Tabla />
      <Tabla/>
      <Footer />
    </React.Fragment>
  );
}
