import React from 'react';
import { Link } from 'react-router-dom';

import PriceTableContent from '../../components/PriceTableContent';
import { Container } from './styles';

import Header from '../../components/Header/';

const Home: React.FC = () => {
  return (
    <Container>
        <Header headerTitle="Preços por região" />
        <div className="prices">

            <PriceTableContent />
            
            <Link to="calculate">
                Calcular valores de ligação!
            </Link>
        </div>
    </Container>
  ) 
}

export default Home;
