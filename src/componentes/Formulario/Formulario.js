import CampoInput from "../CampoInput/CampoInput";
import Lista from "../Lista/Lista";
import './Formulario.css';
import Botao from "../Botao/Botao";
import { useState } from 'react';

const Formulario = (props) => {

const [nome, setNome] = useState('');   
const [cargo, setCargo] = useState('');
const [imagem, setImagem] = useState('');
const [time, setTime] = useState('');
const [nomeTime, setNomeTime] = useState('');
const [corTime, setCorTime] = useState('');

const salvarCard = (evento) => {
evento.preventDefault();
props.aoColaboradorCadastrado({
    nome,
    cargo,
    imagem,
    time
}); 

setNome('')
setCargo('')
setImagem('')
setTime('')
}

    return (
        <section className="formulario">
        <form onSubmit={salvarCard}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoInput 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite seu nome" 
            valor={nome} 
            aoAlterado={valor => setNome(valor)}
            />

            <CampoInput 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu cargo" 
            valor={cargo} 
            aoAlterado={valor => setCargo(valor)}
                />

            <CampoInput 
            label="Imagem" 
            placeholder="Digite o endereço da imagem" 
            valor={imagem} 
            aoAlterado={valor => setImagem(valor)}
                />

            <Lista 
            obrigatorio={true} 
            label="Time" 
            itens={props.times} 
            valor={time} 
            aoAlterado={valor => setTime(valor)}
                />

     <Botao texto="Criar card" />
        </form>
        <form onSubmit={evento => {
            evento.preventDefault();
            props.aoCriarTime({
                nome: nomeTime,
                cor: corTime
            });
            setNomeTime('');
            setCorTime('');
        } }>

        <h2>Preencha os dados para criar um novo time</h2>
            <CampoInput 
            obrigatorio 
            label="Nome" 
            placeholder="Digite o nome do time" 
            valor={nomeTime} 
            aoAlterado={valor => setNomeTime(valor)}
            />

            <CampoInput 
            obrigatorio 
            type="color"
            label="Cor" 
            placeholder="Digite a cor do time" 
            valor={corTime} 
            aoAlterado={valor => setCorTime(valor)}
            />

            <Botao texto="Criar um novo time" />
        </form>
        </section>
    );
}

export default Formulario;