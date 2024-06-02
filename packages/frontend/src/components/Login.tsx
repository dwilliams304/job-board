import React from 'react';


export default function Login(){
    return(
        <section className='w-full h-full'>
            <div className='flex align-middle m-auto pt-10 w-3/5'>
                <div className='w-1/2 p-6 bg-blue-200'>
                    <h2 className='text-xl pb-4'>Sign in to your account</h2>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block text-sm mb-2'>Email</label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='email@email.com'
                                className='border border-solid border-black w-3/4'
                            />
                        </div>

                        
                        <div>
                            <label htmlFor='password' className='block text-sm mb-2'>Password</label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='••••••••'
                                className='border border-solid border-black w-3/4'
                            />
                        </div>

                        <div className='w-3/4 flex items-center justify-between'>
                            <div className='flex-start'>
                                <input 
                                    type='checkbox'
                                    name='remember'
                                    id='remember'
                                />
                                <label htmlFor='remember'>Remember me</label>
                            </div>

                            <a className=''>Forgot password?</a>
                        </div>

                        <button type='submit' className='border border-solid border-black w-3/4'>Sign in</button>
                        <p>
                            Don't have an account yet? 
                            <a> Sign up!</a>
                        </p>
                    </form>
                </div>

                <div className='w-1/2 p-6 bg-blue-100'>
                    <p>Probably some image.</p>
                    <h2>Big headline.</h2>
                    <h3>More flavor text.</h3>
                    <p>Over 1 million jobs filled.</p>
                </div>
            </div>
        </section>
    )
}