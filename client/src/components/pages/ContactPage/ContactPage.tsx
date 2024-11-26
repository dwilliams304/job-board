import { Button } from "../../common"

export default function ContactPage(){

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.alert("This does not currently go anywhere as this is a personal project!");
    }

    return(
        <div className="flex-grow flex flex-col lg:flex-row my-auto md:p-12">
            <div className="lg:w-1/2 lg:ml-auto p-6 space-y-2">
                <h2 className="text-4xl font-bold">Contact Us</h2>
                <p>Experiencing any issues or have some general questions?</p>
                <p>Feel free to reach out to us here!</p>
            </div>
            <div className="lg:w-1/2 bg-slate-200">
                <form className="flex flex-col space-y-4 p-6" onSubmit={onFormSubmit}>
                    <div className="flex flex-col md:flex-row md:space-x-6 w-full">
                        <div className="flex flex-col md:w-1/3">
                            <label htmlFor="name"> 
                                Name <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="border p-2"
                            />
                        </div>
                        
                        <div className="flex flex-col md:w-1/3">
                            <label htmlFor="email"> 
                                Email <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                className="border p-2"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="reason"> 
                            Please select a reson for you reaching out <span className="text-red-600">*</span>
                        </label>
                        <select name="reason" className="md:w-1/3 border bg-white p-2 cursor-pointer">
                            <option>Account Issues</option>
                            <option>Billing Issues</option>
                            <option>Bug Report</option>
                            <option>Suggestion</option>
                            <option>Report</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="additional"> 
                            Additional comments <span className="text-red-600">*</span>
                        </label>
                        <textarea
                            className="border w-full h-60"
                            name="additional"
                        />
                    </div>

                    <Button
                        function={(e) => onFormSubmit(e)}
                        text="Send"
                        type="Primary"
                        title="Send"
                    />
                </form>
            </div>
        </div>
    )
}