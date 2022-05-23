import React from "react";

export function Encabezado() {
  return (
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Next generation components</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Hardware interno</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hardware externo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Mantenimiento</a>
        </li>
      </ul>
      <nav class="navbar bg-light">
    <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"></img>
    </a>
    </div>
      </nav>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Busqueda de producto" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  )
}


