import SignupForm from "./SignupForm";
import DummyLogo from "../../../assets/react.svg";


export default function Signup(){

    return(
        <section className='w-full h-full lg:flex-grow'>
            <div className='flex align-middle lg:mx-auto lg:mt-10 w-full lg:w-3/5 lg:shadow-xl bg-slate-200'>
                <div className='w-full lg:w-1/2 md:p-6 p-2 lg:border-r'>
                    <SignupForm 
                    
                    />
                </div>

                <div className='w-0 lg:w-1/2 lg:p-6 m-0 p-0 bg-gradient-to-t from-blue-900 to-blue-700 text-white divide-y-2 invisible lg:visible'>
                    <div className="space-y-4 pb-6">
                        <img src={DummyLogo} alt='logo' className='mb' />
                        <h2 className='text-xl'>Find your dream job.</h2>
                        <h3 className='text-lg'>Join the largest tech job board.</h3>
                        <p>Over 500,000 positions filled.</p>
                    </div>
                    <div>

                    </div>
                </div>
            
            </div>
        </section>
    )
}