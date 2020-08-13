import React from 'react';
import { Link } from 'react-router-dom';

import PriceTableContent from '../../components/PriceTableContent';
import { Container } from './styles';

const Home = () => {
    const data = [
        { name: 'origin011Destiny016', origin: '011', destiny: '016', price: 1.90  },
        { name: 'origin016Destiny011', origin: '016', destiny: '011', price: 2.90  },
        { name: 'origin011Destiny017', origin: '011', destiny: '017', price: 1.70  },
        { name: 'origin017Destiny011', origin: '017', destiny: '011', price: 2.70  },
        { name: 'origin011Destiny018', origin: '011', destiny: '018', price: 0.90  },
        { name: 'origin018Destiny011', origin: '018', destiny: '011', price: 1.90  },
    ]

  return (
    <Container>
      <div className="container">
          <PriceTableContent data={data} />
      </div>

      <Link to="calculate">
        Calcular valores de ligação!
      </Link>
    </Container>
  ) 
}

export default Home;
