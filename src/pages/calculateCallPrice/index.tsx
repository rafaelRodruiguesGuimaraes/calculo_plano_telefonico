import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../components/Form/Input';

import { Container, Select } from './styles';

const CalculateCallPrice = () => {

    const [ result, setResult ]= useState({});
    
    const prices = {
        origin011Destiny016: { origin: '011', destiny: '016', price: 1.90  },
        origin016Destiny011: { origin: '016', destiny: '011', price: 2.90  },
        origin011Destiny017: { origin: '011', destiny: '017', price: 1.70  },
        origin017Destiny011: { origin: '017', destiny: '011', price: 2.70  },
        origin011Destiny018: { origin: '011', destiny: '018', price: 0.90  },
        origin018Destiny011: { origin: '018', destiny: '011', price: 1.90  },
    };

    const faleMais30 = 30;
    const faleMais60 = 60;
    const faleMais120 = 120;

    const handleSubmit = useCallback((data) => {

        const time = data.time;

        const result = {
            origem: prices.origin011Destiny016.origin,
            destiny: prices.origin011Destiny016.destiny,
            tempo: time,
            plano: faleMais30,
            valorComFaleMais:  time - faleMais30
        }

        console.log(time - faleMais120)
        
        console.log(result);
    }, [prices.origin011Destiny016.destiny, prices.origin011Destiny016.origin])

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="region">Escolha a região:</label>
                <Select name="region" id="region" autoFocus form="Form">
                    <option value="default">---</option>
                    <option value="prices.origin011Destiny016">011 para 016</option>
                    <option value="origin016Destiny011">016 para 011</option>
                    <option value="origin011Destiny017">011 para 017</option>
                    <option value="origin017Destiny011">017 para 011</option>
                    <option value="origin011Destiny018">011 para 018</option>
                    <option value="origin018Destiny011">018 para 011</option>
                </Select>

                <Input name="time" placeholder="Tempo de ligação"/>

                <label htmlFor="region">Escolha o plano:</label>
                <Select name="region" id="region" autoFocus form="Form">
                    <option value="default">---</option>
                    <option value="faleMais30">faleMais30</option>
                    <option value="faleMais60">faleMais60</option>
                    <option value="faleMais120">faleMais120</option>
                </Select>

                <button type="submit">Click</button>
            </Form>

            <Link to="/">Voltar</Link>
        </Container>
    )
}

export default CalculateCallPrice;