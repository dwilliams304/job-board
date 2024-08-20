import { ScrollToTop } from "../helpers";

export default function LoginForm({loginForm, useLoginForm}: any){ //TEMPORARY
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return(
        <>
            <h2 className='text-xl pb-4'>Sign in to your account</h2>
            <form className='space-y-4' onSubmit={onSubmit}>
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
                </div>
                <div className='w-3/4 flex items-center justify-between'>
                    <div className='flex-start'>
                        <input 
                            type='checkbox'
                            name='remember'
                            id='remember'
                            className='cursor-pointer'
                        />
                        <label htmlFor='remember' className='pl-2 cursor-pointer'>Remember me</label>
                    </div>
                    <a className='hover:underline focus:underline cursor-pointer'>Forgot password?</a>
                </div>
                <button type='submit' className='w-3/4 p-2 rounded-xl bg-blue-700 text-white'>Sign in</button>
                <p>
                    Don't have an account yet?
                    <span className='pl-1 underline cursor-pointer' onClick={() => {
                        useLoginForm(!loginForm);
                        ScrollToTop(false);
                        }}>Sign up!</span>
                </p>
            </form> 
        </>
    )
}