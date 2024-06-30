import { Link } from "react-router-dom"

export default function SignupForm({onSubmit}: any){ //TEMPORARY
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
                        placeholder='••••••••'
                        className='w-3/4 p-2 rounded-xl shadow-md'
                    />

                    <label htmlFor='password' className='block text-sm mb-2'>Confirm password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='••••••••'
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
                            <Link to="/terms" className='pl-1 underline cursor-pointer'>Terms and Conditions</Link>
                        </label>
                    </div>
                </div>
                <button type='submit' className='w-3/4 p-2 rounded-xl bg-blue-700 text-white'>Create account</button>
                <p>
                    Already have an account?
                    <a className='pl-1 underline cursor-pointer'>Sign in!</a>
                </p>
            </form> 
        </>
    )
}