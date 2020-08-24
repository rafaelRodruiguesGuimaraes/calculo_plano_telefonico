import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';

import CalculatePrice from '../../utils/calculatePrice';

import { Container } from './styles';
import Header from '../../components/Header';

import {prices, plans} from '../../services/fakeApi';
import { formatPrice } from '../../utils/format';

interface ITotal {
    origem: string | undefined;
    destino: string | undefined;
    tempo: number;
    plano: string | undefined;
    valorComFaleMais: string;
    valorSemFaleMais: string;
};

const CalculateCallPrice: React.FC = () => {
  const [results, setResults] = useState<Array<ITotal>>();
  const [error, setError] = useState<boolean>(false);
  const [free, setFree] = useState(false);

  const result: Array<ITotal> = [];
  
  const priceOptions = prices.map(price => { return {value: price.region, label: price.name }});
  const planOptions = plans.map(plan => { return { value: plan.name, label: plan.name }});

  const handleSubmit = useCallback(async ({ time, region, plan }) => {

    try {
        if(!time || !region || !plan) {
            throw new Error('Missing informations, try again');
        };

        const calculate = new CalculatePrice();
    
        const selectedRegion = prices.find(price => price.region === region);
        const selectedPlan = plans.find(selectPlan => selectPlan.name === plan);
    
        const comFaleMais = Number(calculate.comFaleMais(time, selectedPlan?.limit, selectedRegion?.price));
        const semFaleMais = Number(calculate.semFaleMais(time, selectedRegion?.price));
    
        if(comFaleMais <= 0) {
            setFree(true);
        }

        const total: ITotal = {
          origem: selectedRegion?.origin,
          destino: selectedRegion?.destiny,
          tempo: time,
          plano: selectedPlan?.name,
          valorComFaleMais: formatPrice(comFaleMais),
          valorSemFaleMais: formatPrice(semFaleMais),
        };
    
        result.push(total);
    
        setResults(result);
        setError(false);
    }catch(err) {
        setError(true)
    }
  }, [results]);

  return (
    <Container error={error} >
        <Header headerTitle="Calcular valor de ligação" />

        <Form className="input-form" onSubmit={handleSubmit}>

            <Select 
                className="form-select" 
                name="region" 
                options={priceOptions} 
                placeholder="Escolha a região" 
                autoFocus 
            />

            <Select 
                className="form-select" 
                name="plan" 
                placeholder="Escolha um plano" 
                options={planOptions} 
            />

            <Input 
                id="time-input" 
                name="time" 
                type="number" 
                placeholder="Tempo de ligação" 
                min={1}
                max={200} 
            />

            <button type="submit">Calcular</button>
        </Form>

        {
            error && <p><strong>Erro!</strong>&nbsp;Verifique os dados e tente novamente!</p>
        }

        <div className="result">
            {
                results &&
                    <table className="result-list">
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
                    results.map(r => (
                        <tbody key={r.valorSemFaleMais}>
                            <tr>
                                <td><strong>DDD</strong> {r.origem}</td>
                                <td><strong>DDD</strong> {r.destino}</td>
                                <td>{r.tempo}m</td>
                                <td>{r.plano}</td>
                                    { 
                                        free ? <td><strong>Sem custos adicionais</strong></td> :
                                        <td>{r.valorComFaleMais}</td>  
                                    }
                                <td>{r.valorSemFaleMais}</td>
                            </tr>
                        </tbody>
                    ))
                }
                </table>
            }
            
        </div>
        <Link to="/">Voltar</Link>
    </Container>
  );
};

export default CalculateCallPrice;
