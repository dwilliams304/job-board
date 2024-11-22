import { Button } from "../../common"

export default function ContactPage(){
    return(
        <div className="flex-grow flex my-auto p-12">
            <div className="w-1/2 ml-auto p-6 space-y-2">
                <h2 className="text-3xl">Contact Us</h2>
                <p>Experiencing any issues or have some general questions?</p>
                <p>Feel free to reach out to us here!</p>
            </div>
            <div className="w-1/2 bg-slate-200">
                <form className="flex flex-col space-y-4 p-6">
                    <div className="flex space-x-6 w-full">
                        <div className="flex flex-col w-1/3">
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
                        
                        <div className="flex flex-col w-1/3">
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
                        <select name="reason" className="w-1/3 border bg-white p-2">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
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
                        function={() => {}}
                        text="Send"
                        type="Primary"
                    />
                </form>
            </div>
        </div>
    )
}