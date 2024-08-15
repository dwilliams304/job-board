import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ScrollToTop } from "../helpers"

const passwordReqs = {
    charLength: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecial: false,
}

const specialRegEx = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

export default function SignupForm({loginForm, useLoginForm}: any){ //TEMPORARY
    const [password, usePassword] = useState("");
    const [passwordConfirmation, usePasswordConfirmation] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "password"){
            checkPasswordReqs(e.target.value);
            usePassword(e.target.value.trim());
        }
        else if(e.target.name === "confirm-password"){
            usePasswordConfirmation(e.target.value.trim());
        }
    }

    const onSubmit = (e: React.FormEvent) => {
        if(password !== passwordConfirmation){
            window.alert("Passwords don't match");
        }
        else{
            window.alert("Passwords match!");
        }
        e.preventDefault();
    }


    const checkPasswordReqs = (password: string) => {
        //Length Check
        if(password.length >= 10) passwordReqs.charLength = true;
        else passwordReqs.charLength = false;
        //Uppercase check
        if(password !== password.toLowerCase()) passwordReqs.hasUppercase = true;
        else passwordReqs.hasUppercase = false;
        //Number check
        if(password.match(/\d+/)) passwordReqs.hasNumber = true;
        else passwordReqs.hasNumber = false;
        //Special char check
        if(password.match(specialRegEx)) passwordReqs.hasSpecial = true;
        else passwordReqs.hasSpecial = false;
    }


    return(
        <>
            <h2 className='text-xl pb-4'>Create an account</h2>
            <form className='space-y-4' onSubmit={onSubmit}>
                <div>
                    <label htmlFor='first-name' className='block text-sm mb-2'>First name</label>
                    <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        placeholder='John'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                    />
                    
                </div>
                <div>
                    <label htmlFor='last-name' className='block text-sm mb-2'>Last name</label>
                    <input
                        type='text'
                        name='last-name'
                        id='first-name'
                        placeholder='Doe'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                    />
                    
                </div>
                <div>
                    <label htmlFor='dob' className='block text-sm mb-2'>Date of birth</label>
                    <input
                        type='date'
                        name='dob'
                        id='dob'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                    />
                    
                </div>
                <div>
                    <label htmlFor='email' className='block text-sm mb-2'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='email@email.com'
                        className='w-3/4 p-2 rounded-xl shadow-md'
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
                        value={password}
                        onChange={onChange}
                    />
                    <div className="px-2 py-2">
                        <p className="text-sm">Password requirements:</p>
                        <ul className="px-4 text-xs text-gray-500">
                            <li className={`${passwordReqs.charLength ? "text-green-500" : "text-red-500"}`}>
                            {
                                passwordReqs.charLength ? "✓ " : "❌ "
                            } Be at least 10 characters long
                            </li>
                            <li className={`${passwordReqs.hasUppercase ? "text-green-500" : "text-red-500"}`}>
                                {
                                    passwordReqs.hasUppercase ? "✓ " : "❌ "
                                }Have at least one uppercase letter
                            </li>
                            <li className={`${passwordReqs.hasNumber ? "text-green-500" : "text-red-500"}`}>
                                {
                                    passwordReqs.hasNumber ? "✓ " : "❌ "
                                }Have at least one number
                            </li>
                            <li className={`${passwordReqs.hasSpecial ? "text-green-500" : "text-red-500"}`}>
                                {
                                    passwordReqs.hasSpecial ? "✓ " : "❌ "
                                }Have at least one special character: ($, %, #, !, etc... )
                            </li>
                        </ul>
                    </div>
                    <label htmlFor='confirm-password' className='block text-sm mb-2'>Confirm password</label>
                    <input
                        type='password'
                        name='confirm-password'
                        id='confirm-password'
                        placeholder='•••••••••••'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                        value={passwordConfirmation}
                        onChange={onChange}
                    />
                </div>

                <div className='w-3/4 flex items-center justify-between'>
                    <div className='flex-start'>
                        <input 
                            type='checkbox'
                            name='terms-and-conditions'
                            id='terms-and-conditions'
                            className='cursor-pointer'
                        />
                        <label htmlFor='terms-and-conditions' className='pl-2 cursor-pointer'>I have read and agreed to the 
                            <Link to="/terms" className='pl-1 underline cursor-pointer' onClick={() => ScrollToTop(true)}>Terms and Conditions</Link>
                        </label>
                    </div>
                </div>
                <button type='submit' className='w-3/4 p-2 rounded-xl bg-blue-700 text-white' onClick={onSubmit}>
                    Create account
                </button>
                <p>
                    Already have an account?
                    <span className='pl-1 underline cursor-pointer' onClick={() => useLoginForm(!loginForm)}>Sign in!</span>
                </p>
            </form> 
        </>
    )
}