import './Formulario.css';
import { CampoTexto } from '../CampoTexto/CampoTexto';
import { ListaOpciones } from '../ListaOpciones/ListaOpciones';
import { Boton } from '../Boton/Boton';

export const Formulario = () => {

    const crearhandler = (event) => {
        event.preventDefault();
        alert('Envio de form');
    }

    return (
    <section className='formulario'>
        <form onSubmit={crearhandler}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto label='Nombre' placeholder='Ingresar nombre...' required/>
            <CampoTexto label='Puesto' placeholder='Ingresar puesto...' required/>
            <CampoTexto label='Foto' placeholder='Ingresar enlace de foto...' required/>
            <ListaOpciones />
            <Boton texto='Crear' />
        </form>
    </section>

    ) 
}