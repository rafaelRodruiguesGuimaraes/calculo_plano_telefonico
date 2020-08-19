import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import CalculatePrice from '../../utils/calculatePrice';
import { Container } from './styles';

import pricesApi from '../../services/pricesApi';
import plansApi from '../../services/plansApi';

const CalculateCallPrice = () => {
  const [result, setResult] = useState({});

    const prices = pricesApi;
    const plans = plansApi;

  const handleSubmit = useCallback(({ time, region, plan }) => {
    const calculate = new CalculatePrice();


    const selectedRegion = prices.find((price) => price.region === 'origin011Destiny016');
    const selectedPlan = plans.find((selectPlan) => selectPlan.name === 'faleMais30');

    //const comFaleMais = calculate.comFaleMais(time, selectedPlan.limit, selectedRegion.price);
    //const semFaleMais = calculate(time, plan, );

    const total = {
      origem: selectedRegion?.origin,
      destino: selectedRegion?.destiny,
      tempo: time,
      plano: selectedRegion?.region,
      //valorComFaleMais: calculate(),
      //valorSemFaleMais: calculate(),
    };

    setResult(total);
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="region">Escolha a região:</label>
        <Select name="region" autoFocus>

          <option value="default">---</option>
          {
              prices.map(price => (
              <option key={price.name} value={price.region}>{price.name}</option>
              ))
          }
        </Select>

        <Input name="time" placeholder="Tempo de ligação" />

        <label htmlFor="plan">Escolha o plano:</label>
        <Select name="plan">

          <option value="default">---</option>
          {
              plans.map(plan => (
                <option key={plan.name} value={plan.name}>{plan.name}</option>
              ))
          }

        </Select>

        <button type="submit">Click</button>
      </Form>

      <Link to="/">Voltar</Link>
    </Container>
  );
};

export default CalculateCallPrice;
