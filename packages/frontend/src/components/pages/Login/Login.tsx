import { LoginForm } from '../..';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../data/users';
import { useEffect } from 'react';

type LoginProps = {
    signIn: (user: User) => void;
}
export default function Login(props: LoginProps){
    const navTo = useNavigate();


    const onLoginFormSubmit = (userData: User | undefined) => {
        if(userData !== undefined){
            props.signIn(userData);
            navTo('/');
        }
    }

    useEffect(() => {
        if(localStorage.getItem('user')) navTo('/');
    }, [])
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