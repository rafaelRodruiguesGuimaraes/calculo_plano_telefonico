import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .price-list {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 1.3em;
        min-width: 400px;
        border-radius: 8px 8px 0 0;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }

    .price-list thead tr {
        background-color: #E39736;
        text-align: left;
        font-weight: bold;
        color: #fff;
    }

    .price-list th,
    .price-list td {
        padding: 12px 15px;
    }

    .price-list tbody tr { 
        border-bottom: 2px solid #666;;
        background-color: #ddd;
        color: #333;
    }
`;

