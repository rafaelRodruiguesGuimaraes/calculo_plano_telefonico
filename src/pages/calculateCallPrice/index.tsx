import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import { Container, Input } from './styles';

const CalculateCallPrice = () => {

    const handleSubmit = useCallback(() => {
        console.log('Ola mundo')
    }, [])

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input type="text" />
            </Form> ~

            <Link to="/">Voltar</Link>
        </Container>
    )
}

export default CalculateCallPrice;