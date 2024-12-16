import './Equipo.css';
import { Colaborador } from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

export const Equipo = (props) => {
    
    const {titulo, color, background, id} = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, colaboradorFavorito } = props;

    const estiloBackground = {
        backgroundColor: hexToRgba(color, 0.6)
    }

    return (
        colaboradores.length > 0 &&
        <div className='equipo' style={estiloBackground}  >
            <input type="color"
            className='input-color'
            value={background}
            onChange={(event) => {
                actualizarColor(event.target.value, id);
            }}
            />
            <h3 className='equipoTitle' style={{borderColor: color}} >{titulo} </h3>
            <div className="colaboradores">
              {
                colaboradores.map((colaborador)=> <Colaborador 
                    key={id} 
                    color={color} 
                    background={background} 
                    datos={colaborador}
                    eliminarColaborador={eliminarColaborador} 
                    colaboradorFavorito ={colaboradorFavorito}
                    />)
              }  

            </div>
        </div>
    );
}