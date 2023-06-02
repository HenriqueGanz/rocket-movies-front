import styled from "styled-components";

export const Container = styled.nav `
    width:100vw;
    height: 116px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #3E3B47;

    #itensNav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 64px;

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

        #divSearch {
            margin: auto 0;
            width: 630px;

            input {
                background-color: #262529;
                width: 100%;
                height: 56px;
                border: none;
                border-radius: 10px;
            }
        }

        #divProfile {
            display: flex;
            gap: 9px;

            #profileButtons {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                

                a {
                    text-decoration: none;
                }

                .username {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 18px;
                    color: white;
                }

                .exitpage {
                    color: #948F99;
                }

            }

            #imgProfile {
                width: 64px;
                height: 64px;
                border-radius: 100px;
                border: 1px solid #3E3B47;
            }
        }
    }



`;