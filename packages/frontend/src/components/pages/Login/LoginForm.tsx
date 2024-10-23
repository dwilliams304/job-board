import { useState } from "react";
import { ScrollToTop } from "../../../utils";

type LoginFormProps = {
    onLoginFormSubmit: (e: React.FormEvent, _email: any, _password: any) => void
    showLoginForm: boolean
    setShowLoginForm: (arg0: boolean) => void
}

const initialFormState = {
    email: "",
    password: "",
}

export default function LoginForm(
{onLoginFormSubmit, showLoginForm, setShowLoginForm}: LoginFormProps){
    const [formValues, setFormValues] = useState(initialFormState);
    const [loginError, setLoginError] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormValues(
            {...formValues, 
                [name]: value
            }
        )
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLoginFormSubmit(e, formValues.email, formValues.password);
    }



    return(
        <>
            <h2 className='text-xl pb-4'>Sign in to your account</h2>
            <form className='space-y-4' onSubmit={onSubmit}>
                <div>
                    <label htmlFor='email' className='block text-sm mb-2'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='email@email.com'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                        onChange={onChange}
                        value={formValues.email}
                    />
                </div>
                
                <div>
                    <label htmlFor='password' className='block text-sm mb-2'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='•••••••••••'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                        onChange={onChange}
                        value={formValues.password}
                    />
                </div>
                <div className='w-3/4 flex items-center justify-between'>
                    <div className='flex-start'>
                        <input 
                            type='checkbox'
                            name='remember'
                            id='remember'
                            className='cursor-pointer'
                        />
                        <label htmlFor='remember' className='pl-2 cursor-pointer'>Remember me</label>
                    </div>
                    <a className='hover:underline focus:underline cursor-pointer'>Forgot password?</a>
                </div>
                <button type='submit' className='w-3/4 p-2 rounded-xl bg-blue-700 text-white'>Sign in</button>
                <p>
                    Don't have an account yet?
                    <span className='pl-1 underline cursor-pointer' onClick={() => {
                        setShowLoginForm(!showLoginForm);
                        ScrollToTop(false);
                        }}>Sign up!</span>
                </p>
            </form> 
        </>
    )
}