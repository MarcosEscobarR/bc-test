import React from "react";
import './InputText.css'

export interface IInputTextModel {
    label: string,

    handleChange(e: React.FormEvent<HTMLInputElement>): void,

    type: string
}

const InputText = ({label, handleChange, type}: IInputTextModel) => {
    return <>
        <label>{label}</label>
        <input
            type={type}
            placeholder={label}
            name={label.toLocaleLowerCase()}
            onChange={event => handleChange(event)}
        />
    </>
}

export default InputText
