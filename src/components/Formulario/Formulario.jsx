import './Formulario.css';

export const Formulario = () => {
    return (
    <section className='formulario'>
        <form action="">
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <label >Nombre</label>
            <input type="text" placeholder='Ingresar nombre'/>
            <label >Puesto</label>
            <input type="text" placeholder='Ingresar puesto'/>
            <label >Foto</label>
            <input type="text" placeholder='Ingresar enlace de foto' />
            <label >Equipo</label>
            <input type="text" />
        </form>
    </section>

    ) 
}