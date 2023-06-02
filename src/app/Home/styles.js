import styled from "styled-components";


export const Container = styled.div `
    width: 100%;
    height: 100%vh;

    > main {
        margin: 50px 123px;

        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #FFFFFF;
        }

        button:hover {
        background-color: rgba(255, 120, 140, 1);
        scale: 1.01;
    }
    }
`;