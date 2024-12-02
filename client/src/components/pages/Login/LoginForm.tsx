import { useState } from "react";
import { ScrollToTop } from "../../../data/utils";
import { Link } from "react-router-dom";
// import { Dev_LoginFunc } from "../../../data/users";
import { GetRandomNumber } from "../../../data/utils";
// import { User } from "../../../data/users";
import { Button } from "../../common";

const initialFormState = {
    email: "",
    password: "",
}

export default function LoginForm(){
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
        setIsSigningIn(true);
        const timeout = setTimeout(() => {
            setIsSigningIn(false);
        }, GetRandomNumber(4000));

    }



    return(
        <div className="w-full flex flex-col">
            <h2 className='text-xl pb-4'>Sign in to your account</h2>
            <form className='space-y-4 w-full' onSubmit={onSubmit}>
                {
                    loginError && <h2 className="font-bold text-red-600">{loginError}</h2>
                }
                <div>
                    <label htmlFor='email' className='block text-sm mb-2 px-2'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='email@email.com'
                        className='w-full xl:w-3/4 p-2 rounded-xl shadow-md'
                        onChange={onChange}
                        value={formValues.email}
                    />
                </div>
                
                <div>
                    <label htmlFor='password' className='block text-sm mb-2 px-2'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='•••••••••••'
                        className='w-full xl:w-3/4 p-2 rounded-xl shadow-md'
                        onChange={onChange}
                        value={formValues.password}
                    />
                </div>
                <div className='w-full xl:w-3/4 flex items-center justify-between'>
                    <div className='flex-start'>
                        <input 
                            type='checkbox'
                            name='remember'
                            id='remember'
                            className='cursor-pointer'
                        />
                        <label htmlFor='remember' className='pl-2 cursor-pointer'>Remember me</label>
                    </div>
                    <a className='hover:underline focus:underline cursor-pointer'
                    onClick={() => window.alert("This is not setup as accounts are automatically deleted from the db every day!")}>
                        Forgot password?
                    </a>
                </div>
                <Button
                    text="Sign in"
                    function={onSubmit}
                    styleType="Primary"
                    type="submit"
                    showsLoadingBar={true}
                    disabled={isSigningIn}
                    loadingText="Signing in..."
                    className="w-full xl:w-3/4"
                />
                <p className="text-center md:text-left">
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