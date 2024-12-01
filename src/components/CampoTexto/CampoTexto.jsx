import './CampoTexto.css';

export const CampoTexto = (props) => {
    return (
        <div className='campo-texto'>
            <label> {props.label} </label>
            <input type="text" placeholder={props.placeholder} required={props.required} />
        </div>
    );
}