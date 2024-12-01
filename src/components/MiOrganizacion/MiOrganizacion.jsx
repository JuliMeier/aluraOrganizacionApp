import './MiOrganizacion.css';

export const MiOrganizacion = (props) => {
    
   
    return (
        <section className='orgSection'>
            <h3 className='orgTitle'>Mi Organizacion</h3>
            <img src="../img/add.png" alt="agregar" onClick={props.cambiarMostrar} />
        </section>
    )
}