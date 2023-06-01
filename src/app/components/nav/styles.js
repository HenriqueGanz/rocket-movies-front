import styled from "styled-components";

export const Container = styled.nav `
    width: 100%;
    height: 116px;
    display: flex;
    justify-content: center;
    align-items: center;

    #itensNav {
        display: flex;
        align-items: center;

        #divLogo {
            width: 164px;
            height: 32px;
        
        span {
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            color: #FF859B;
         }
        }

        #divBusca {
            margin: auto 0;

            input {
                background-color: #262529;
                height: 56px;
                border: none;
                border-radius: 10px;
            }
        }
    }



`;