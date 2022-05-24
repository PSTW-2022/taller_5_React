import React from 'react';
import TextField from "@mui/material/TextField";
import  Button from "@mui/material/Button";
import "./"

export function Formulario() {
  return (
    <div>
      <h2>Ingrese sus datos</h2>
      <form class="form-horizontal">
      <div class="form-group">
        <TextField label="Nombre" id="outlined-size-normal" name='Nombre' size="Normal"/>
        <TextField label="Apellido" id="outlined-size-normal" name='Apellido' size='Normal' />
        <Button variant="contained" onClick={()=>alert("La información se envió correctamente")}>Enviar</Button>
      </div>
      </form>
    </div>
  );
}

