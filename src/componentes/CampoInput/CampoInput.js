import './CampoInput.css';

const CampoInput = (props) => {

const placeholderModificado = `${props.placeholder}...`;

const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

return (
    <div className='campo-input'>
     <label>
        {props.label}
        </label>
<input value={props.valor} onChange={aoDigitado} placeholder={placeholderModificado} required={props.obrigatorio}/>
    </div>  
);
}

export default CampoInput;