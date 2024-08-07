import { Link } from "react-router-dom"
import { ScrollToTop } from "../helpers"

export default function SignupForm({onSubmit, loginForm, useLoginForm}: any){ //TEMPORARY
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
                    />
                    <div className="px-2 py-2">
                        <p className="text-sm">Password requirements:</p>
                        <ul className="list-disc px-8 text-xs text-gray-500">
                            <li>Be at least 10 characters long</li>
                            <li>Have at least one uppercase and lowercase letter</li>
                            <li>Have at least one number</li>
                            <li>Have at least one special character: ($, %, #, !, etc... )</li>
                        </ul>
                    </div>
                    <label htmlFor='password' className='block text-sm mb-2'>Confirm password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='•••••••••••'
                        className='w-3/4 p-2 rounded-xl shadow-md'
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
                <button type='submit' className='w-3/4 p-2 rounded-xl bg-blue-700 text-white'>Create account</button>
                <p>
                    Already have an account?
                    <span className='pl-1 underline cursor-pointer' onClick={() => useLoginForm(!loginForm)}>Sign in!</span>
                </p>
            </form> 
        </>
    )
}