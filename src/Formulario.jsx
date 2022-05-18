import React from 'react';

export function Formulario() {
  return (
    <form>
        <div>
            <label for="exampleInputEmail">Correo</label>
            <input type="email" id="exampleInput"/>
            <button type="submit">Enviar</button>
        </div>
    </form>
  )
}
