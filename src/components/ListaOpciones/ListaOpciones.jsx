import './ListaOpciones.css';

export const ListaOpciones = () => {

    const equipos = [ 
        'Programacion',
        'Frontend',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Móvil',
        'Innovación y Gestión'
    ]

    return (
        <div className='lista-opciones'>
            <label>Equipo</label>
            <select name="" id="">
            { equipos.map((equipo, index) => {
                return  <option key={index} > {equipo} </option>
            })}

            </select>
        </div>
    );
}