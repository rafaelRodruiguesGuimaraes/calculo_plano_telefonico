import React from 'react';

import { prices } from '../../services/fakeApi'
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
                        prices.map(price => (
                            <tbody key={price.region}>
                                <tr>
                                    <td>{price.origin}</td>
                                    <td>{price.destiny}</td>
                                    <td>{price.price}</td>
                                </tr>
                            </tbody>
                        ))
                    }
            </table>
        </Container> 
    );
}

export default PriceTableContent;
