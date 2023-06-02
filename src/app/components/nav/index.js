import {Container} from './styles';

export default function Nav() {
    return(
        <Container>
            <div id="itensNav">
                <div id="divLogo"><span>RocketMovies</span></div>

                <div id="divSearch">
                <input type="text" id="txtBusca" placeholder="Buscar pelo título."/>
                </div>

                <div id="divProfile">
                    <div id="profileButtons">
                        <a href="#"><span class="username">Henrique Ganz</span></a>
                        <a href="#"><span class="exitpage">Sair</span></a>
                    </div>
                    <div>
                        <img id="imgProfile" src="http://github.com/henriqueganz.png" alt="Imagem de perfil do usuário"/>
                    </div>
                </div>
            </div>
        </Container>
    )
}