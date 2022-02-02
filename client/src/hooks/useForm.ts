import React, {useState} from "react";

const useForm = (initialValue: any) => {
    const [formValue, setFormValue] = useState(initialValue);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    return [formValue, handleInputChange]
}

export default useForm;
