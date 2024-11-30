import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../../../data/utils";
import { Button } from "../../common";

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
    termsCheck: false,
    privacyCheck: false,
}

const specialRegEx = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

export default function SignupForm() {

    const [formValues, setFormValues] = useState(initialFormState);
    const [formErrors, setFormErrors] = useState([]); //FIX THIS

    let date = new Date();
    const minDate = [date.getFullYear() - 13, date.getMonth() + 1, date.getDate()].join("-");


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, checked, type} = e.target;
        if(name === "password"){
            checkPasswordReqs(value);
        }

        setFormValues(
            {...formValues, 
                [name]: type === "checkbox" ? checked : value.trim()
            }
        )
    }

    const onSubmit = (e: React.FormEvent) => {
        validateForm();
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
        if(formValues.firstName.length < 2 || formValues.firstName.length > 32 ||
            formValues.lastName.length < 2 || formValues.lastName.length > 32) {
                console.log(`${formValues.firstName.length} -- ${formValues.lastName.length}`)
                errors.push("First and last name must be between 2-32 characters long");
        }

        if(!formValues.dob) errors.push("Date of Birth is invalid")

        if(!/\S+@\S+\.\S+/.test(formValues.email))  errors.push("Email is invalid");
        
        for(const key in passwordReqs){
            if(passwordReqs[key as keyof typeof passwordReqs] === false){
                errors.push("Password requirements not met");
                break;
            }
        }

        if(formValues.password !== formValues.confirmPassword) errors.push("Passwords do not match");

        if(!formValues.termsCheck || !formValues.privacyCheck) errors.push("Must agree to Terms & Conditions and Privacy Policy");

        if(errors.length > 0) {
            setFormErrors(errors);
            ScrollToTop(false);
        }
    }


    return(
        
        <div className="">
            <h2 className='text-xl pb-4'>Create an account</h2>
            <form className='space-y-4 w-full' onSubmit={onSubmit}>
                <div className="w-full">
                    <ul className="px-4 pb-4 list-disc">
                        {formErrors.length > 0 && 
                            <p className="text-red-500 text-sm">Please fix the following errors:</p>
                        }
                        {
                            formErrors.map((err, i) => (
                                <li className="text-red-500 text-sm lg:mx-8" key={i}>{err}</li>
                            ))
                        }
                    </ul>
                    <label htmlFor='firstName' className='block text-sm mb-2'>
                        First name <span className="text-red-600">*</span>
                    </label>
                    <input
                        type='text'
                        name='firstName'
                        id='firstName'
                        placeholder='John'
                        className='w-full p-2 rounded-xl shadow-md'
                        value={formValues.firstName}
                        onChange={onChange}
                        maxLength={32}
                        required={true}
                    />
                    
                </div>
                <div>
                    <label htmlFor='lastName' className='block text-sm mb-2'>
                        Last name <span className="text-red-600">*</span>
                    </label>
                    <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        placeholder='Doe'
                        className='w-full p-2 rounded-xl shadow-md'
                        value={formValues.lastName}
                        onChange={onChange}
                        maxLength={32}
                        required={true}
                    />
                    
                </div>
                <div>
                    <label htmlFor='dob' className='block text-sm mb-2'>
                        Date of birth <span className="text-red-600">*</span>
                    </label>
                    <input
                        type='date'
                        name='dob'
                        id='dob'
                        className='w-full p-2 rounded-xl shadow-md'
                        value={formValues.dob}
                        onChange={onChange}
                        required={true}
                        // max={new Date().toISOString().split('T')[0]}
                        min={minDate}
                    />
                    
                </div>
                <div>
                    <label htmlFor='email' className='block text-sm mb-2'>
                        Email <span className="text-red-600">*</span>
                    </label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='email@email.com'
                        className='w-full p-2 rounded-xl shadow-md'
                        value={formValues.email}
                        onChange={onChange}
                        maxLength={64}
                        required={true}
                    />
                    
                </div>
                
                <div>
                    <label htmlFor='password' className='block text-sm mb-2'>
                        Password <span className="text-red-600">*</span>
                    </label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='•••••••••••'
                        className='w-full p-2 rounded-xl shadow-md'
                        value={formValues.password}
                        onChange={onChange}
                        maxLength={32}
                        required={true}
                    />
                    <div className="lg:px-2 py-2">
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
                    <label htmlFor='confirmPassword' className='block text-sm mb-2'>
                        Confirm password <span className="text-red-600">*</span>
                    </label>
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        placeholder='•••••••••••'
                        className='w-full p-2 rounded-xl shadow-md'
                        value={formValues.confirmPassword}
                        onChange={onChange}
                        maxLength={32}
                        required={true}
                    />
                </div>

                <div className='w-full flex items-center justify-between'>
                    <div className='flex-start cursor-pointer'>
                        <input 
                            type='checkbox'
                            name='termsCheck'
                            id='termsCheck'
                            className='cursor-pointer'
                            onChange={onChange}
                            checked={formValues.termsCheck}
                            required={true}
                        />
                        <label htmlFor='terms-and-conditions' className='pl-2'>I have read and agreed to the 
                            <Link to="/terms" onClick={() => ScrollToTop(true)}>
                                <span className="pl-1 underline">Terms &amp; Conditions</span> 
                                <span className="text-red-600"> *</span>
                            </Link>
                        </label>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex-start cursor-pointer'>
                        <input 
                            type='checkbox'
                            name='privacyCheck'
                            id='privacyCheck'
                            className='cursor-pointer'
                            onChange={onChange}
                            checked={formValues.privacyCheck}
                            required={true}
                        />
                        <label htmlFor='terms-and-conditions' className='pl-2'>I have read and agreed to the 
                            <Link to="/privacy" onClick={() => ScrollToTop(true)}>
                                <span className="pl-1 underline">Privacy Policy</span> 
                                <span className="text-red-600"> *</span>
                            </Link>
                        </label>
                    </div>
                </div>

                <Button
                    function={onSubmit}
                    type="Primary"
                    text="Create Account"
                    title="Create account"
                    className="w-full"
                    disabled={false}
                />
                <p className="text-center">
                    Already have an account?
                    <Link to="/login" 
                    className='pl-1 underline cursor-pointer' 
                    onClick={() => ScrollToTop(false)}>
                        Sign in!
                    </Link>
                </p>
            </form> 
        </div>
    )
}