import React from 'react';

export function Formulario() {
  return (
    <form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"></input>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Contrasena"></input>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Ingresar</button>
  </div>
  <label for="exampleDataList" class="form-label">Departamento de residencia</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
<datalist id="datalistOptions">
  <option value="San Francisco"></option>
  <option value="New York"></option>
  <option value="Seattle"></option>
  <option value="Los Angeles"></option>
  <option value="Chicago"></option>
</datalist>
  <nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
      Desea recibir ofertas en su correo electronico?
    </span>
  </div>
  </nav>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Si
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label" for="flexRadioDefault2">
    No
  </label>
</div>
</form>

  )
}
