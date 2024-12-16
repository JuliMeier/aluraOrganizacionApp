import './Colaborador.css';
import { IoClose,IoHeartOutline, IoHeartSharp  } from "react-icons/io5";

export const Colaborador = (props) => {
    const {nombre, puesto, equipo, foto, id, fav} = props.datos;
    const {color, eliminarColaborador, colaboradorFavorito} = props;
    return (
        <div className='colaborador'>
            <IoClose className='close-delete' onClick={()=> eliminarColaborador(id)}  />
            <div className="headerCard" style={{backgroundColor:color}} >
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                
                <h4 >{nombre}</h4>
                <h5>{puesto}</h5>
                { fav ? <IoHeartSharp color='red' onClick={()=> colaboradorFavorito(id)} /> : <IoHeartOutline onClick={()=> colaboradorFavorito(id)} />  }
                               
            </div>
        </div>
    );
}