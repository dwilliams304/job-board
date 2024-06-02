import React from 'react';


export default function Login(){
    return(
        <section>
            <div>
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
        </section>
    )
}