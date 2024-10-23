import React from 'react';
import DummyLogo from "../../../assets/react.svg";
import { useState } from 'react';
import { LoginForm, SignupForm } from '../..';
import { Dev_LoginFunc } from '../../../data/profiles';


export default function Login(){
    const onLoginFormSubmit = (e: React.FormEvent, _email: string, _password: string) => {
        e.preventDefault();
        Dev_LoginFunc(
            {
                email: _email, 
                password: _password
            }
        );
        console.log("Login submitted!");
    }

    const onSignupFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Signup submitted!");
    }

    const [showLoginForm, setShowLoginForm] = useState(true);

    return(
        <section className='w-full h-full flex-grow'>
            <div className='flex align-middle mx-auto mt-10 w-3/5 shadow-xl bg-gray-100'>
                <div className='w-1/2 p-6 border-r'>
                    {
                        showLoginForm ? 
                        <LoginForm 
                            onLoginFormSubmit={onLoginFormSubmit} 
                            showLoginForm={showLoginForm} 
                            setShowLoginForm={setShowLoginForm} 
                        /> 
                        : 
                        <SignupForm 
                            onSignupFormSubmit={onSignupFormSubmit} 
                            showLoginForm={showLoginForm} 
                            setShowLoginForm={setShowLoginForm} 
                        />
                    }
                </div>

                <div className='w-1/2 p-6'>
                    <img src={DummyLogo} alt='logo' className='mb-6' />
                    <h2 className='text-xl'>Find your dream job.</h2>
                    <h3 className='text-lg'>Join the largest tech job board.</h3>
                    <p>Over 500,000 positions filled.</p>
                </div>
            
            </div>
        </section>
    )
}