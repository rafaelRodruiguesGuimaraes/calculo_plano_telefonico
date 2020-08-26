import styled, { css } from 'styled-components';

import { darken } from 'polished';

interface ContainerProps {
    error: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100vw;
    height: 100vh;

    .input-form {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        margin-top: 48px;

        .form-select {
            margin-bottom: 16px;
            width: 400px;
            
            ${(props)=>
                props.error && css`border: 2px solid #A90000; border-radius: 8px;`
            }
        }

        #time-input {
            width: 400px;
            height: 37px;
            border: none;
            text-align: center;
            padding: 8px;
            border-radius: 4px;

            ${(props)=>
                props.error && css`border: 2px solid #A90000; border-radius: 8px;`
            }
        }

        button {
            margin-top: 16px;
            width: 400px;
            height: 40px;
            border: none;
            background: #E39736;
            border-radius: 8px;
            color: #fff;
            font-weight: bold;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.06, '#E39736')}
            }
        }
    }

    .result {
        display: flex;
        width: 100vw;
        align-items: center;
        justify-content: center;
        padding-bottom: 32px;

        .result-list {
            width: 1000px;
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 1em;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .result-list thead tr {
            background-color: #E39736;
            text-align: left;
            font-weight: bold;
            color: #fff;
        }

        .result-list th,
        .result-list td {
            padding: 12px 15px;
            text-align: center;
        }

        .result-list tbody tr { 
            border-bottom: 2px solid #666;;
            background-color: #ddd;
            color: #333;
        }
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 25px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 35px;
        right: 30px;
        padding: 8px;
        font: 18px;
        font-weight: bold;
        background: #E39736;
        border-radius: 50%;
        opacity: 95%;

        text-decoration: none;
        color: #fff;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        margin-top: 16px;

        color: #A90000;
    }

    @media (min-width: 1100px) {
        .input-form {
            flex-direction: row;
            align-items: stretch;

            .form-select {
                width: 300px;
                margin-right: 20px;
            }

            #time-input {
                width: 300px;
            }

            button {
                width: 100px;
                margin-left: 50px;
                margin-top: -3px;
            }
        }

        a {
            width: 300px;
            height: 50px;
            border-radius: 8px;

            transition: background-image 0.4s;

            &:hover {
                background: ${darken(0.08, '#E39736')};
            }
        }
    }
`;