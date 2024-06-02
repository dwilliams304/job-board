import React from 'react';


export default function Login(){
    return(
        <section className='w-full h-full'>
            <div className='m-8 flex'>
                <div className='w-1/2 p-6 bg-blue-200'>
                    <h2>Sign in to your account</h2>
                    <form>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='email@email.com'
                                className='border border-solid border-black'
                            />
                        </div>

                        
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='••••••••'
                                className='border border-solid border-black'
                            />
                        </div>

                        <div>
                            <div>
                                <input 
                                    type='checkbox'
                                    name='remember'
                                    id='remember'
                                />
                            </div>
                            <div>
                                <label htmlFor='remember'>Remember me</label>
                            </div>

                            <a>Forgot password?</a>
                        </div>

                        <button type='submit' className='border border-solid border-black'>Sign in</button>
                        <p>
                            Don't have an account yet? 
                            <a> Sign up!</a>
                        </p>
                    </form>
                </div>

                <div className='w-1/2 p-6 bg-blue-600'>
                    <p>Probably some image.</p>
                    <h2>Big headline.</h2>
                    <h3>More flavor text.</h3>
                    <p>Over 1 million jobs filled.</p>
                </div>
            </div>
        </section>
    )
}