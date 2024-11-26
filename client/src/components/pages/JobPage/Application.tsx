import { Button } from "../../common";
import { ApplicationQuestion } from "../../../types/Jobs";

import { useState } from "react";

type ApplicationProps = {
    questions?: ApplicationQuestion[];
    setShowReportModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Application({questions, setShowReportModal}: ApplicationProps){
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
        <div className="md:px-12 pt-12">
            <div id="apply" className="bg-slate-200 w-full lg:w-4/6  md:mx-auto">
                <div className="p-2 md:py-8 md:px-12">
                    <h3 className="text-lg font-bold pb-8">Job Application</h3>
                    <form className="flex flex-col space-y-2">
                        <div className="flex flex-col">
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
                        <div className="flex flex-col w-full">
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
                        <div className="flex flex-col">
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
                        <div className="flex flex-col">
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
                        <div className="flex flex-col">
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
                        <div className="flex flex-col">
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
                                className="border h-60"
                                name="additional"
                            />
                        </div>
                        {questions && <h3 className="pt-10 pb-4 text-lg font-bold">Employer Specific Questions</h3>}
                        {
                            questions?.map((question, i) => (
                                <div className="flex flex-col" key={i}>
                                    <label htmlFor={question.question}>
                                        {question.question} {question.required && <span className="text-red-600">*</span>}
                                    </label>
                                    {
                                        question.type === "text" &&
                                        <input
                                            type="text"
                                            className="border p-2"
                                            placeholder="Enter answer here..."
                                            required={question.required}
                                            name={question.question}
                                        />
                                    }
                                    {
                                        question.type === "multi" &&
                                        <select className="border bg-white p-2 cursor-pointer"
                                        name={question.question}
                                        required={question.required}>
                                            {
                                                question.options?.map((option: any, i: number) => (
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
                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
                        <Button
                            type="Primary"
                            text="Submit Application"
                            function={() => window.alert("This is WIP! Check back in later :)")}
                        />
                        <Button
                            type="Tertiary"
                            text="Report Job"
                            function={() => setShowReportModal(true)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}