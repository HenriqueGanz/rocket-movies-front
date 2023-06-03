import styled from "styled-components";

export const Container = styled.div `
    width: 1121px;
    height: 222.85px;
    margin: 24px 0;

    border-radius: 16px;
    background-color: rgba(255, 133, 155, 0.05);

    > section {
        margin: 32px;

        .title {
            background-color: rgba(255, 133, 155, 0.05);
            color: white;
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            
        }

        p {
            background-color: rgba(255, 133, 155, 0.05);
            font-size: 16px;
            line-height: 19px;
            color: #999591;
        }
    }
`;