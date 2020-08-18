import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import CalculatePrice from '../../utils/calculatePrice';
import { Container } from './styles';

interface PriceProps {
    region: string;
    origin: string;
    destiny: string;
    price: number;
}
interface PricesProps extends Array<PriceProps>{}

interface PlanProps {
    name: string,
    limit: number;
}
interface PlansProps extends Array<PlanProps>{}

const CalculateCallPrice = () => {
  const [result, setResult] = useState({});

  const prices: PricesProps = [
    {
      region: 'origin011Destiny016', origin: '011', destiny: '016', price: 1.90,
    },
    {
      region: 'origin016Destiny011', origin: '016', destiny: '011', price: 2.90,
    },
    {
      region: 'origin011Destiny017', origin: '011', destiny: '017', price: 1.70,
    },
    {
      region: 'origin017Destiny011', origin: '017', destiny: '011', price: 2.70,
    },
    {
      region: 'origin011Destiny018', origin: '011', destiny: '018', price: 0.90,
    },
    {
      region: 'origin018Destiny011', origin: '018', destiny: '011', price: 1.90,
    },
  ];

  const plans: PlansProps = [
    { name: 'faleMais30', limit: 30 },
    { name: 'faleMais60', limit: 60 },
    { name: 'faleMais120', limit: 120 },
  ];

  const handleSubmit = useCallback(({ time, region, plan }) => {
    const calculate = new CalculatePrice();

    const selectedRegion = prices.find((price) => price.region === 'origin011Destiny016');
    const selectedPlan = plans.find((selectPlan) => selectPlan.name === 'faleMais30');

    //const comFaleMais = calculate.comFaleMais(time, selectedPlan.limit, selectedRegion.price);
    //const semFaleMais = calculate(time, plan, );

    console.log(selectedPlan);
    console.log(selectedRegion?.price);

    const total = {
      origem: selectedRegion?.origin,
      destino: selectedRegion?.destiny,
      tempo: time,
      plano: selectedRegion?.region,
      //valorComFaleMais: calculate(),
      //valorSemFaleMais: calculate(),
    };

    setResult(total);

    console.log(total);
    console.log(time)
    console.log(typeof(time));
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="region">Escolha a região:</label>
        <Select name="region" autoFocus>
          <option value="default">---</option>
          <option value="origin011Destiny016">011 para 016</option>
          <option value="origin016Destiny011">016 para 011</option>
          <option value="origin011Destiny017">011 para 017</option>
          <option value="origin017Destiny011">017 para 011</option>
          <option value="origin011Destiny018">011 para 018</option>
          <option value="origin018Destiny011">018 para 011</option>
        </Select>

        <Input name="time" placeholder="Tempo de ligação" />

        <label htmlFor="plan">Escolha o plano:</label>
        <Select name="plan" autoFocus>
          <option value="default">---</option>
          <option value="faleMais30">faleMais30</option>
          <option value="faleMais60">faleMais60</option>
          <option value="faleMais120">faleMais120</option>
        </Select>

        <button type="submit">Click</button>
      </Form>

      <Link to="/">Voltar</Link>
    </Container>
  );
};

export default CalculateCallPrice;
