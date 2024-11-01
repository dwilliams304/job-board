import { JobOptions } from "../../../data/joboptions";
import { RichTextEditor, Button } from "../../common";

export default function CreateJobPost(){
    return(
        <div className="flex-grow flex flex-col w-1/2 mx-auto shadow-xl bg-slate-200 p-6 my-6">
            <div className="w-full py-6 flex flex-col space-y-6">
                <h2 className="text-center text-3xl font-bold">
                    Create a job posting!
                </h2>
                <div>
                    <label htmlFor="job-title" className="block text-md font-bold mb-2">
                        Job Title
                    </label>
                    <input
                        type="text"
                        name="job-title"
                        id="job-title"
                        placeholder="Enter title..."
                        className="w-full p-2 rounded-xl shadow-md"
                    />
                </div>
                <div>
                    <label htmlFor="job-location" className="block text-md font-bold mb-2">
                        Job Location
                    </label>
                    <input
                        type="text"
                        name="job-location"
                        id="job-location"
                        placeholder="Enter location..."
                        className="w-full p-2 rounded-xl shadow-md"
                    />
                </div>
                <div>
                    <label htmlFor="job-salary" className="block text-md font-bold mb-2">
                        Annualized Salary (USD)
                    </label>
                    <input
                        type="number"
                        name="job-salary"
                        id="job-salary"
                        min={0}
                        placeholder="Enter salary..."
                        className="w-full p-2 rounded-xl shadow-md"
                    />
                </div>

                <div>
                    <label htmlFor="locationType" className="block text-md font-bold mb-2">
                        Location Type
                    </label>
                    <select 
                    className="w-full p-2 rounded-xl shadow-md border border-solid cursor-pointer" 
                    id="locationType">
                            {
                                JobOptions.locationOptions.map((option, idx) => (
                                    <option key={idx}>{option}</option>
                                ))
                            }
                    </select>
                </div>
                <div>
                    <label htmlFor="term" className="block text-md font-bold mb-2">
                        Job Term
                    </label>
                    <select 
                    className="w-full p-2 rounded-xl shadow-md border border-solid cursor-pointer" 
                    id="term">
                            {
                                JobOptions.termOptions.map((option, idx) => (
                                    <option key={idx}>{option}</option>
                                ))
                            }
                    </select>
                </div>
                <div>
                    <label htmlFor="experience" className="block text-md font-bold mb-2">
                        Experience Level
                    </label>
                    <select 
                    className="w-full p-2 rounded-xl shadow-md border border-solid cursor-pointer" 
                    id="experience">
                            {
                                JobOptions.experienceOptions.map((option, idx) => (
                                    <option key={idx}>{option}</option>
                                ))
                            }
                    </select>
                </div>

            </div>

            <h2 className="text-center text-2xl font-bold pt-16">
                Job Description
            </h2>
            
            <RichTextEditor 

            />
            
            <Button
                type="Primary"
                text="Post Job &rarr;"
                function={() => window.alert("WIP: Actually create job post")}
                style={{margin: "0 auto", fontSize: "20px"}}
            />


        </div>
    )
}