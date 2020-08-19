import React from 'react';

import pricesApi from '../../services/pricesApi'
import { Container } from './styles';

const PriceTableContent = () => {

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
                        pricesApi.map(prices => (
                            <tbody key={prices.region}>
                                <tr>
                                    <td>{prices.origin}</td>
                                    <td>{prices.destiny}</td>
                                    <td>{prices.price}</td>
                                </tr>
                            </tbody>
                        ))
                    }
            </table>
        </Container> 
    );
}

export default PriceTableContent;
