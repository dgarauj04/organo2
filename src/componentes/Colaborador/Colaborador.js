import { IoIosCloseCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import './Colaborador.css';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar,
    }

    return (
    <div className="colaborador"> 
    <IoIosCloseCircle size={23} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
    <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="descricao">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favorito">
                {colaborador.favorito ? <FaStar color="rgb(221, 192, 27)" {...propsfavorito} /> : <CiStar {...propsfavorito} />}
            </div>
        </div>
    </div>
    );  
}

export default Colaborador;