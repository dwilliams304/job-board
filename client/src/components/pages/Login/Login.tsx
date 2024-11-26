import { LoginForm } from '../..';
import { useNavigate } from 'react-router-dom';
// import { User } from '../../../data/users';


export default function Login(){
    const navTo = useNavigate();


    const onLoginFormSubmit = () => {
        // if(userData !== undefined){
        //     // props.signIn(userData);
        //     window.alert("Signed in!");
        //     navTo('/');
        // }
    }

    return(
        <section className='w-full md:flex-grow'>
            <div className='lg:w-1/3 md:w-1/2 lg:p-6 p-2 mx-auto md:mt-8 md:shadow-xl bg-slate-200 sm:w-full'>
                <LoginForm 
                    // onLoginFormSubmit={onLoginFormSubmit} 
                /> 
            </div>
        </section>
    )
}