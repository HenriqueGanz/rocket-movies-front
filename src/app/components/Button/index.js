import {Container} from './styles';

export default function Button({title, ...rest}) {
    return(
        <Container
        type='button' {...rest}>
            {title}
        </Container>
    )
}