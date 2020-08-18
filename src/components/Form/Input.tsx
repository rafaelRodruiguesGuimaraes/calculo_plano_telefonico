import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<inputProps> = ({ name, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {

        console.log(inputRef.current?.value);

        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
       })
    },[fieldName, registerField]);
    
    return (
        <input ref={inputRef} {...rest} />
    )
}

export default Input