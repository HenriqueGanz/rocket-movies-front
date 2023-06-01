import {Container} from './styles';

export default function Nav() {
    return(
        <Container>
            <div id="itensNav">
                <div id="divLogo"><span>RocketMovies</span></div>
                <div id="divBusca">
                <input type="text" id="txtBusca" placeholder="Buscar pelo título."/>
                </div>
            </div>
        </Container>
    )
}