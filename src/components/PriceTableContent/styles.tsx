import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 48px;

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
        background-color: #E0665C;
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

