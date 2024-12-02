import './CampoTexto.css';
import { useState } from 'react';

export const CampoTexto = (props) => {

   

    const handlerChange = (event) => {
        props.actualizarInput(event.target.value);
    }

    return (
        <div className='campo-texto'>
            <label> {props.label} </label>
            <input 
            type="text" 
            placeholder={props.placeholder} 
            required={props.required} 
            onChange={handlerChange}
            />
        </div>
    );
}