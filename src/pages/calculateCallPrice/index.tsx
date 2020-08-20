import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';

import CalculatePrice from '../../utils/calculatePrice';

import { Container } from './styles';

import {prices, plans} from '../../services/fakeApi';

interface ITotal {
    origem: string | undefined;
    destino: string | undefined;
    tempo: number;
    plano: string | undefined;
    valorComFaleMais: number;
    valorSemFaleMais: number;
};

const CalculateCallPrice: React.FC = () => {
  const [results, setResults] = useState<Array<ITotal>>();

  const result: Array<ITotal> = [];
  
  const priceOptions = prices.map(price => { return {value: price.region, label: price.name }});
  const planOptions = plans.map(plan => { return { value: plan.name, label: plan.name }});

  const handleSubmit = useCallback(async ({ time, region, plan }) => {
    const calculate = new CalculatePrice();

    const selectedRegion = prices.find(price => price.region === region);
    const selectedPlan = plans.find(selectPlan => selectPlan.name === plan);

    const comFaleMais = calculate.comFaleMais(time, selectedPlan?.limit, selectedRegion?.price);
    const semFaleMais = calculate.semFaleMais(time, selectedRegion?.price);

    const total: ITotal = {
      origem: selectedRegion?.origin,
      destino: selectedRegion?.destiny,
      tempo: time,
      plano: selectedPlan?.name,
      valorComFaleMais: comFaleMais,
      valorSemFaleMais: semFaleMais,
    };

    result.push(total);

    setResults(result);
  }, [results]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <Select name="region" options={priceOptions} placeholder="Escolha a região" autoFocus />
        <Input name="time" type="number" placeholder="Tempo de ligação" max={200} />
        <Select name="plan" placeholder="Escolha um plano" options={planOptions} />

        <button type="submit">Click</button>
      </Form>

        <table>
            <thead>
                <tr>
                    <td>Origem</td>
                    <td>Destino</td>
                    <td>Tempo</td>
                    <td>Plano Fale Mais</td>
                    <td>Com Fale Mais</td>
                    <td>Sem Fale Mais</td>
                </tr>
            </thead>
            {
              results && results.map(r => (
                  <tbody key={r.valorSemFaleMais}>
                      <tr>
                        <td>{r.origem}</td>
                        <td>{r.destino}</td>
                        <td>{r.tempo}</td>
                        <td>{r.plano}</td>
                        <td>{r.valorSemFaleMais}</td>
                        <td>{r.valorComFaleMais}</td>
                      </tr>
                  </tbody>
              ))
          }
        </table>
      <Link to="/">Voltar</Link>
    </Container>
  );
};

export default CalculateCallPrice;
