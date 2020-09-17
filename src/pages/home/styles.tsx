import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100vw;
    height: 100vh;

    .prices {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;

        a {
            color: #fff; 
            background: #E0665C;
            width: 400px;
            text-align: center;
            border-radius: 8px;
            padding: 16px;
            font-size: 24px;
            text-decoration: none;
            transition: 0.2s;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

            &:hover{
                transform: translateY(-3px);
            }
        }
    }

    @media (min-width: 1100px) {
        .prices {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        a {
            max-width: 300px;
            margin-left: 32px;
        }
    }
`;
