import './ListaOpciones.css';

export const ListaOpciones = (props) => {

    const equipos = [ 
        'Programacion',
        'Frontend',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Móvil',
        'Innovación y Gestión'
    ]

    const handlerSelect = (event) => {
        props.actualizarEquipo(event.target.value);
    }

    return (
        <div className='lista-opciones'>
            <label>Equipo</label>
            
            <select value={props.value} onChange={handlerSelect} >
            <option value='' defaultValue='' disabled hidden>Seleccionar equipo</option>
            { equipos.map((equipo, index) => {
                return  <option key={index} value={equipo} > {equipo} </option>
            })}

            </select>
        </div>
    );
}