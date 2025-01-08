import './CampoInput.css';

const CampoInput = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {

const placeholderModificado = `${placeholder}...`;

const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

return (
    <div className={`campo campo-${type}`}>
     <label>
        {label}
        </label>
<input type={type} value={valor} onChange={aoDigitado} placeholder={placeholderModificado} required={obrigatorio}/>
    </div>  
);
}

export default CampoInput;