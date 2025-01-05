import './Rodape.css';

 const rodape = () => {
    return (
        <footer className="rodape">            
           <section>
                <ul>
                    <li><a href="https://github.com/dgarauj04" target="_blank" rel="noreferrer"><img src="/imagens/github.png" alt="github"/></a></li>

                    <li><a href="https://www.linkedin.com/in/douglas-araujo-dgprogdev/" target="_blank" rel="noreferrer"><img src="/imagens/linkedin.png" alt="linkedin"/></a></li>

                    <li><a href="https://www.instagram.com/dgaraujoo_/" target="_blank" rel="noreferrer" ><img src="/imagens/ig.png" alt="instagram"/></a></li>
                </ul>
           </section>

            <div className="logo">
            <img src="/imagens/logo.png" alt="logo"/>
           </div>
            
            <div>
            <p>Desenvolvido por Douglas Araujo</p>
           </div>
        </footer>
    );
}

export default rodape;