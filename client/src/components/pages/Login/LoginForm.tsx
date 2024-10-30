import { useState } from "react";
import { ScrollToTop } from "../../../data/utils";
import { Link } from "react-router-dom";
import { Dev_LoginFunc } from "../../../data/users";
import { GetRandomNumber } from "../../../data/utils";
import { User } from "../../../data/users";

type LoginFormProps = {
    onLoginFormSubmit: (userData: User | undefined) => void
}

const initialFormState = {
    email: "",
    password: "",
}

export default function LoginForm({onLoginFormSubmit}: LoginFormProps){
    const [formValues, setFormValues] = useState(initialFormState);
    const [loginError, setLoginError] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);

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
        setLoginError("");
        setIsSigningIn(true);
        const user = {
            email: formValues.email,
            password: formValues.password
        }
        const {response} = Dev_LoginFunc(user);
        const timeout = setTimeout(() => {
            setIsSigningIn(false);
            if(response.error) {
                setLoginError(response.error.message);
                console.log(response.error);
            }
            else if(response.success){
                setFormValues(initialFormState);
                setLoginError('');
                onLoginFormSubmit(response.success.data);
                console.log(response.success);
            }
        }, GetRandomNumber(4000));

    }



    return(
        <div className="w-full">
            <h2 className='text-xl pb-4'>Sign in to your account</h2>
            <form className='space-y-4 w-full' onSubmit={onSubmit}>
                {
                    loginError && <h2 className="font-bold text-red-600">{loginError}</h2>
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
                <button type='submit' className='w-3/4 p-2 rounded-xl bg-blue-700 text-white'
                disabled={isSigningIn}>
                    {
                        isSigningIn ?
                        <span className="flex justify-center align-middle w-full h-full">
                            <span className="pr-2">Signing in...</span>
                            <svg aria-hidden="true" className="w-6 h-6 text-black animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </span>
                        :
                        "Sign in"
                    }
                </button>
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