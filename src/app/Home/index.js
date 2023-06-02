'use client'

import {Container} from './styles';
import Nav from '../components/Nav';
import Button from '../components/Button';

export default function Home() {
    return(
        <Container>
            <Nav/>
            <main>
                <div class="title">
                    <h1>Meus filmes</h1>
                    <Button title="+ Adicionar filme"/>
                </div>
            </main>
        </Container>

    )
}