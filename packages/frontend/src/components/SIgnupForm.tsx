import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ScrollToTop } from "../helpers"

const passwordReqs: passwordReqsTypes = {
    charLength: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecial: false,
}

type passwordReqsTypes = {
    charLength: boolean,
    hasUppercase: boolean,
    hasNumber: boolean,
    hasSpecial: boolean
}

const initialFormState = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const specialRegEx = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


export default function SignupForm({loginForm, useLoginForm}: any){ //TEMPORARY
    const [formValues, setFormValues] = useState(initialFormState);
    const [passwordValue, setPasswordValue] = useState()
    const [formErrors, setFormErrors] = useState([])

    let date = new Date();
    date.setFullYear(date.getFullYear() - 13);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if(name === "password"){
            checkPasswordReqs(value);
        }

        setFormValues(
            {...formValues, 
                [name]: value.trim()
            }
        )
    }

    const onSubmit = (e: React.FormEvent) => {
        validateForm();
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

    const validateForm = () => {
        const errors: any = []; //FIX THIS
        if(formValues.firstName.length < 2 && 
            formValues.lastName.length < 2) {
                console.log(`${formValues.firstName.length} -- ${formValues.lastName.length}`)
                errors.push("First and last name must be at least 2 characters");
        }
        
        for(const key in passwordReqs){
            if(passwordReqs[key as keyof typeof passwordReqs] === false){
                errors.push("Password requirements not met!");
                break;
            }
        }

        if(errors.length > 0) {
            setFormErrors(errors);
            ScrollToTop(false);
        }
    }


    return(
        <>
            <h2 className='text-xl pb-4'>Create an account</h2>
            <form className='space-y-4' onSubmit={onSubmit}>
                <div>
                    <ul className="list-disc">
                        {formErrors.length > 0 && 
                            <p className="text-red-500 text-sm">Please fix the following errors:</p>
                        }
                        {
                            formErrors.map((err, i) => {
                                return <li className="text-red-500 text-sm mx-8" key={i}>{err}</li>
                            })
                        }
                    </ul>
                    <label htmlFor='firstName' className='block text-sm mb-2'>First name</label>
                    <input
                        type='text'
                        name='firstName'
                        id='firstName'
                        placeholder='John'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                        value={formValues.firstName}
                        onChange={onChange}
                        maxLength={32}
                        required={true}
                    />
                    
                </div>
                <div>
                    <label htmlFor='lastName' className='block text-sm mb-2'>Last name</label>
                    <input
                        type='text'
                        name='lastName'
                        id='firstName'
                        placeholder='Doe'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                        value={formValues.lastName}
                        onChange={onChange}
                        maxLength={32}
                        required={true}
                    />
                    
                </div>
                <div>
                    <label htmlFor='dob' className='block text-sm mb-2'>Date of birth</label>
                    <input
                        type='date'
                        name='dob'
                        id='dob'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                        value={formValues.dob}
                        onChange={onChange}
                        required={true}
                        // max={`${date.toDateString()}`}
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
                        value={formValues.email}
                        onChange={onChange}
                        maxLength={64}
                        required={true}
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
                        value={formValues.password}
                        onChange={onChange}
                        maxLength={32}
                        required={true}
                    />
                    <div className="px-2 py-2">
                        <p className="text-sm">Password requirements:</p>
                        <ul className="px-4 text-xs text-gray-500">
                            <li className={`${passwordReqs.charLength ? "text-green-500" : "text-red-500"}`}>
                            {
                                passwordReqs.charLength ? "✓ " : "❌ "
                            } Be between 10-32 characters long
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
                    <label htmlFor='confirmPassword' className='block text-sm mb-2'>Confirm password</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        placeholder='•••••••••••'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                        value={formValues.confirmPassword}
                        onChange={onChange}
                        maxLength={32}
                        required={true}
                    />
                </div>

                <div className='w-3/4 flex items-center justify-between'>
                    <div className='flex-start'>
                        <input 
                            type='checkbox'
                            name='terms-and-conditions'
                            id='terms-and-conditions'
                            className='cursor-pointer'

                            required={true}
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