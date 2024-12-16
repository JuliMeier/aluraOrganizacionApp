import './Formulario.css';
import { CampoTexto } from '../CampoTexto/CampoTexto';
import { ListaOpciones } from '../ListaOpciones/ListaOpciones';
import { Boton } from '../Boton/Boton';
import { useState } from 'react';

export const Formulario = (props) => {

    const [nombre, setNombre] = useState('');
    const [puesto, setPuesto] = useState('');
    const [foto, setFoto] = useState('');
    const [equipo, setEquipo] = useState('');
    const { registrarColaborador } = props;
    const { crearEquipo } = props;
    
    const [titulo, setTitulo] = useState('');
    const [color, setColor] = useState('');

    const crearhandler = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        // console.log(datosAEnviar);
        // alert('Envio de form');
        registrarColaborador(datosAEnviar);
    }

    const crearEquipoHandler = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            titulo,
            color
            }
            crearEquipo(datosAEnviar);  
            }

    return (
    <section className='formulario'>
        <form onSubmit={crearhandler}> 
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto label='Nombre' placeholder='Ingresar nombre...' required value={nombre} actualizarInput={setNombre} />
            <CampoTexto label='Puesto' placeholder='Ingresar puesto...' required value={puesto} actualizarInput={setPuesto} />
            <CampoTexto label='Foto' placeholder='Ingresar enlace de foto...' required value={foto} actualizarInput={setFoto} />
            <ListaOpciones value={equipo} actualizarEquipo={setEquipo} equipos={props.equipos} />
            <Boton texto='Crear'  />
        </form>
        <form onSubmit={crearEquipoHandler}> 
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto label='Nombre Equipo' placeholder='Ingresar nombre del equipo...' required value={titulo} actualizarInput={setTitulo} />
            <CampoTexto label='Color' placeholder='Ingresar color en hex...' type='color' value={color} actualizarInput={setColor} />
            <Boton texto='Registrar Equipo' />
        </form>
    </section>

    ) 
}