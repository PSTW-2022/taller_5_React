import React from "react";
import { Encabezado } from "./Encabezado";
import { Formulario } from "./Formulario";
import { Tabla } from "./Tabla";

export function Aplicacion() {
  return (
    <React.Fragment>
      <Encabezado />
      <Formulario />
      <Tabla />
    </React.Fragment>
  );
}
