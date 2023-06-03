import styled from "styled-components";


export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    > main {
        margin: 50px 123px;
        max-width: 1137px;

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

        section {
            display: flex;
            flex-direction: column;
            margin-top: 40px; 
        }
    }
`;