import React from 'react';
import { Formulario } from './Formulario';
import { Tabla } from './Tabla';


export function Aplicacion(){
    return(
        <React.Fragment>
            
            <Formulario/>
            <Tabla/>
            
        </React.Fragment>
    )
}