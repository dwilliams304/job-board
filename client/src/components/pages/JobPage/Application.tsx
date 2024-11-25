import { Button } from "../../common";
import { ApplicationQuestion } from "../../../data/types";

import { useState } from "react";

type ApplicationProps = {
    questions?: ApplicationQuestion[];
}

export default function Application({questions}: ApplicationProps){
    const [formValues, setFormValues] = useState<any>({});

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value, type} = e.target;
        console.log(formValues);

        setFormValues({
            ...formValues,
            [name]: value
        })
    }


    return(
        <>
            <div id="apply" className="bg-slate-200 w-4/6 mx-auto">
                <div className="p-8">
                    <h3 className="text-lg font-bold pb-8">Job Application</h3>
                    <form className="flex flex-col space-y-2">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="first-name"> 
                                First name <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="First name"
                                name="first-name"
                                className="border p-2"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="last-name"> 
                                Last name <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Last name"
                                name="last-name"
                                className="border p-2"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="email"> 
                                Email <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="border p-2"
                                onChange={onChange}
                                value={formValues.email}
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="location"> 
                                Location <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Location"
                                name="location"
                                className="border p-2"
                                onChange={onChange}
                                value={formValues.location}
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="phone"> 
                                Phone
                            </label>
                            <input
                                type="tel"
                                placeholder="123-123-1234"
                                name="phone"
                                className="border p-2"
                                onChange={onChange}
                                value={formValues.phone}
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="resume"> 
                                Resume <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="file"
                                name="resume"
                                className="border p-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="additional"> 
                                Additional comments
                            </label>
                            <textarea
                                className="border w-1/2 h-60"
                                name="additional"
                            />
                        </div>
                        {questions && <h3 className="pt-10 pb-4 text-lg font-bold">Employer Specific Questions</h3>}
                        {
                            questions?.map((question, i) => (
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor={question.inputName ? question.inputName : question.question}>
                                        {question.question} {question.required && <span className="text-red-600">*</span>}
                                    </label>
                                    {
                                        question.type === "text" || !question.type &&
                                        <input
                                            type="text"
                                            className="border p-2"
                                            placeholder="Enter answer here..."
                                            required={question.required}
                                            name={question.inputName ? question.inputName : question.question}
                                        />
                                    }
                                    {
                                        question.type === "multi" &&
                                        <select className="border bg-white p-2 cursor-pointer"
                                        name={question.inputName ? question.inputName : question.question}
                                        required={question.required}>
                                            {
                                                question.options?.map((option, i) => (
                                                    <option key={i}>
                                                        {option}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    }
                                </div>
                            ))
                        }
                    </form>
                    <div className="space-x-4">
                        <Button
                            type="Primary"
                            text="Submit Application"
                            function={() => {}}
                        />
                        <Button
                            type="Tertiary"
                            text="Report Job"
                            function={() => {}}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}