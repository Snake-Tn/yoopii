import * as React from 'react';

const Input = (props) => {
    const {setValue, value, className, type, placeholder} = props
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return <input value={value} onChange={onChange} className={className} placeholder={placeholder} type={type}/>
}
export default Input