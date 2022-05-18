import React from "react";

export function Encabezado() {
  return (
<nav class="nav">
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Disabled</a>
      </li>
    </ul>
</nav>
  )
}


