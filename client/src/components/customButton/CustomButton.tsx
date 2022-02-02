import React from "react";
import './CustomButton.css'

interface ICustomButtonProps {
    text: string,
    handleClick: (e: React.FormEvent<HTMLButtonElement>) => void,
    type: "button" | "submit" | "reset"
}

const CustomButton = (props: ICustomButtonProps) => {
    return <>
        <button
            type={props.type}
            onClick={props.handleClick}
        >{props.text}</button>
    </>
}

export default CustomButton
