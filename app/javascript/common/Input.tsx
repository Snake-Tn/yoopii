import * as React from 'react';

const Input = (
    {
        setValue,
        value,
        className,
        type,
        placeholder
    }:
        {
            setValue: (value: string) => void,
            value: string,
            className: string,
            type: string,
            placeholder: string
        }
) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return <input value={value} onChange={onChange} className={className} placeholder={placeholder} type={type}/>
}
export default Input