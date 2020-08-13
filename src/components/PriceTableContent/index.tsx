import React, { useState } from 'react';

import { Container } from './styles';

interface dataProps {
    name: string;
    origin: string;
    destiny: string;
    price: number;
}

interface priceTableContentProps {
    data: Array<dataProps>
}

const PriceTableContent : React.FC<priceTableContentProps> = ({ data }) => {

    const faleMais30 = 30;
    const faleMais60 = 60;
    const faleMais120 = 120;

    return (

        <Container>
            <table className="price-list">
                <thead>
                    <tr>
                        <td id="origin">Origem</td>
                        <td id="destiny">Destino</td>
                        <td id="price">$/hora</td>
                    </tr>
                </thead>
                    {
                        data.map(dataContent => (
                            <tbody key={dataContent.name}>
                                <tr>
                                    <td>{dataContent.origin}</td>
                                    <td>{dataContent.destiny}</td>
                                    <td>{dataContent.price}</td>
                                </tr>
                            </tbody>
                        ))
                    }
            </table>
        </Container>
    )
}

export default PriceTableContent;