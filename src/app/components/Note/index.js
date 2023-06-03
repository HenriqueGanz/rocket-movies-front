import {Container} from "./styles";

export default function Note({title, descriptionPreview, ...rest}) {
    return(
        <Container>
            <section>
                <p className="title">{title}</p>
                <p>{descriptionPreview}</p>
            </section>
        </Container>
    )
}