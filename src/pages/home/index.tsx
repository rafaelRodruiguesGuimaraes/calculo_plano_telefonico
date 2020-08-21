import React from 'react';
import { Link } from 'react-router-dom';

import { prices } from '../../services/fakeApi';
import PriceTableContent from '../../components/PriceTableContent';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
        <div className="list">
            <PriceTableContent />
        </div>
        <div className="link">
            <Link to="calculate">
                Calcular valores de ligação!
            </Link>
        </div>
    </Container>
  ) 
}

export default Home;
