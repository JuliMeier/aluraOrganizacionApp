import './Formulario.css';
import { CampoTexto } from '../CampoTexto/CampoTexto';
import { ListaOpciones } from '../ListaOpciones/ListaOpciones';
import { Boton } from '../Boton/Boton';
import { useState } from 'react';

export const Formulario = () => {

    const crearhandler = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar);
        alert('Envio de form');
    }

    const [nombre, setNombre] = useState('');
    const [puesto, setPuesto] = useState('');
    const [foto, setFoto] = useState('');
    const [equipo, setEquipo] = useState('');

    return (
    <section className='formulario'>
        <form onSubmit={crearhandler}> 
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto label='Nombre' placeholder='Ingresar nombre...' required value={nombre} actualizarInput={setNombre} />
            <CampoTexto label='Puesto' placeholder='Ingresar puesto...' required value={puesto} actualizarInput={setPuesto} />
            <CampoTexto label='Foto' placeholder='Ingresar enlace de foto...' required value={foto} actualizarInput={setFoto} />
            <ListaOpciones value={equipo} actualizarEquipo={setEquipo} />
            <Boton texto='Crear' />
        </form>
    </section>

    ) 
}