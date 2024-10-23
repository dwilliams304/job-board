import { useState } from "react";
import { ScrollToTop } from "../../../utils";
import { Link } from "react-router-dom";
import { Dev_LoginFunc } from "../../../data/profiles";

type LoginFormProps = {
    onLoginFormSubmit: (e: React.FormEvent) => void
}

const initialFormState = {
    email: "",
    password: "",
}

export default function LoginForm({onLoginFormSubmit}: LoginFormProps){
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
        const user = {
            email: formValues.email,
            password: formValues.password
        }
        const val = Dev_LoginFunc(user);
        if(val.error) setLoginError(val.error.message);
        else{
            setFormValues(initialFormState);
            setLoginError('');
            onLoginFormSubmit(e);
        }
    }



    return(
        <div className="w-full">
            <h2 className='text-xl pb-4'>Sign in to your account</h2>
            <form className='space-y-4 w-full' onSubmit={onSubmit}>
                {
                    loginError && <h2>{loginError}</h2>
                }
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
                    <Link to="/signup"
                    className='pl-1 underline cursor-pointer'
                    onClick={() => ScrollToTop(false)}>
                        Sign up!
                    </Link>
                </p>
            </form> 
        </div>
    )
}