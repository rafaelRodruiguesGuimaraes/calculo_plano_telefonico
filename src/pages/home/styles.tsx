import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;

    a {
        color: #000;
        font-size: 24px;
        text-decoration: none;
        transition: 0.2s;

        &:hover{
            transform: translateY(-3px);
        }
    }
`;
