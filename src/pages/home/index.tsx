import React from 'react';
import { Link } from 'react-router-dom';

import { prices } from '../../services/fakeApi';
import PriceTableContent from '../../components/PriceTableContent';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div className="container">
          <PriceTableContent />
      </div>

      <Link to="calculate">
        Calcular valores de ligação!
      </Link>
    </Container>
  ) 
}

export default Home;
