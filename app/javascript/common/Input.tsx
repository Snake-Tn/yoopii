import * as React from 'react';

const Input = (
    {
        setValue,
        value,
        name,
        className,
        type,
        placeholder
    }:
        {
            setValue: (value: string, name: string) => void,
            value?: string,
            name: string,
            className: string,
            type: string,
            placeholder: string
        }
) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value, e.target.name)
    }
    return <input enterKeyHint="go" autoComplete="off" name={name} value={value} onChange={onChange} className={className} placeholder={placeholder}
                  type={type}/>
}
export default Input