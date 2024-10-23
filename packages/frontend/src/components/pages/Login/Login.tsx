import React from 'react';
import { LoginForm } from '../..';
import { useNavigate } from 'react-router-dom';


export default function Login(){
    const navTo = useNavigate();


    const onLoginFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navTo('/');
    }


    return(
        <section className='w-full h-full flex-grow'>
            <div className='w-1/3 p-6 mx-auto mt-10 shadow-xl bg-gray-100'>
                <LoginForm 
                    onLoginFormSubmit={onLoginFormSubmit} 
                /> 
            </div>
        </section>
    )
}