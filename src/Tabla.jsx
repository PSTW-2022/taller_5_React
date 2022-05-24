import React from "react";

export function Tabla() {
  return (
    <table class="table">
      <thead>
        <tr id='headTable'>
          <th scope="col">#</th>
          <th scope="col">Articulo más vendido</th>
          <th scope="col">Categoria</th>
          <th scope="col">Disponible (stock)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>AMD Ryzen 5 3600</td>
          <td>Procesador</td>
          <td>324</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>TEAMGROUP T-Force Vulcan Z DDR4</td>
          <td>Memoria RAM</td>
          <td>532</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>MAXSUN iCraft B550 Gaming M</td>
          <td>Tarjeta base</td>
          <td>32</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>GeForce RTX 2070 Super</td>
          <td>GPU</td>
          <td>375</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Crucial BX500</td>
          <td>SSD</td>
          <td>123</td>
        </tr>
      </tbody>
    </table>
  );
}
