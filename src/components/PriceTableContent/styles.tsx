import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .price-list {
        padding: 16px;
        background: #9C5300;
        border-radius: 16px;
    }

    .price-list thead tr td {
        width: 100%;
        padding: 8px;
        font-size: 24px;

        & {
            border-left: 1px solid #000;
        }
    }
`;

