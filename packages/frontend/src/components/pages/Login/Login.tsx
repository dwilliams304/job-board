import React from 'react';
import DummyLogo from "../../../assets/react.svg";
import { useState } from 'react';
import { LoginForm } from '../..';


export default function Login(){
    const onLoginFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login submitted!");
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