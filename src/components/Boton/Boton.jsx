import './Boton.css';

export const Boton = (props) => {
    return (
        <div>
            <button className='button' > {props.texto} </button>
        </div>
    );
}