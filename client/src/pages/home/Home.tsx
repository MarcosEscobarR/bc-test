import React, {useState} from 'react';
import './Home.css';
import useForm from "../../hooks/useForm";
import InputText from "../../components/inputText/InputText";
import CustomButton from "../../components/customButton/CustomButton";
import {AuthService} from "../../services/auth";

export interface ILoginModel {
    email: string | null,
    password: string | null
}

interface IErrors {
    emailEmpty: boolean,
    passwordEmpty: boolean,
    invalidEmail: boolean,
    invalidCredentials: boolean,
    apiError: boolean
}

function Home() {
    const initialErrors: IErrors = {
        emailEmpty: false,
        invalidCredentials: false,
        invalidEmail: false,
        passwordEmpty: false,
        apiError: false
    }

    const initialValue: ILoginModel = {email: null, password: null}

    const [hasError, setHasError] = useState(false)
    const [errors, setErrors] = useState<IErrors>(initialErrors)
    const [formValue, handleInputChange] = useForm(initialValue)

    const showErrors = () => {
        setHasError(true)
        setTimeout(() => {
            setHasError(false)
            setErrors({apiError: false, invalidEmail: false, invalidCredentials: false, emailEmpty: false,passwordEmpty: false})
        }, 3000)
    }

    const invalidForm = () => {
        const err = {} as IErrors;
        if (formValue.email === null || formValue.email.trim() === '') err.emailEmpty = true;
        if (formValue.password === null || formValue.password.trim() === '') err.passwordEmpty = true;

        if (Object.values(err).includes(true)) {
            showErrors()
            setErrors(err)
            return true
        }

        return false;
    }

    const handleClick = async () => {
        if (invalidForm()) return;
        if (!hasError) {
            try {
                const res = await AuthService.login(formValue)
                if (res.data) {
                    localStorage.setItem('isAuthenticated', "true")
                    window.location.href = '/welcome'
                    return;
                }

                showErrors()
                setErrors({...errors, invalidCredentials: true})
            } catch (e: any) {
                showErrors()

                if (e.response.status === 400) setErrors({...errors, invalidCredentials: true})
                if (e.response.status === 500) setErrors({...errors, apiError: true})
                if (e.response.status === 422) setErrors({...errors, invalidEmail: true})

            }
        }
    }

    const renderErrorMessage = () => {
        if (hasError) {
            return <div className="message-container">
                <ul>
                    {
                        Object.keys(errors).map(p => createErrorsList(p as keyof IErrors, errors[p as keyof IErrors]))
                    }
                </ul>

                {
                    errors.invalidCredentials ? <p>Credenciales Incorrectas</p> : null
                }

                {
                    errors.apiError ? <p>Error del Servidor</p> : null
                }
            </div>
        }

        function createErrorsList(key: keyof IErrors, value: boolean) {
            if (value) {
                switch (key) {
                    case 'invalidEmail':
                        return <li key={key}>Email Invalido</li>
                    case 'emailEmpty':
                        return <li key={key}>Email Obligatorio</li>
                    case "passwordEmpty":
                        return <li key={key}>Contraseña Obligatoria</li>
                }
            }
        }
    }
    return (
        <div className="container">
            <div className="main">
                <div className="form-group">
                    <p className="title">Inicia Sesión</p>
                    <InputText type="text" label="Email" handleChange={handleInputChange}/>
                    <InputText type="password" label="Password" handleChange={handleInputChange}/>
                    {renderErrorMessage()}
                    <div className="btn-container">
                        <CustomButton text="Inicia Sesión" handleClick={handleClick} type="submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
