import TestLogo from "../../assets/react.svg";

type JobPostProps = {
    job : {
        jobTitle: string;
        companyName: string;
        companyLogo: string;
        location: string;
        onSite: {
            onSite: boolean;
            hybrid: boolean;
            remote: boolean;
        }
        shortDescription: string;
        level: string;
        salary: number;
        averageHours: number;
        daysWorked: boolean[];
    }
}

export default function JobPost({job}: JobPostProps){

    return(
        <div className="flex border border-solid m-5 p-5 shadow-md">
            <div className="w-1/2">
                <div className="flex">
                    <img src={job.companyLogo} alt="company logo" className="pr-2 mb-2"/>
                    <h2 className="font-semibold">{job.jobTitle} - {job.companyName}</h2>
                </div>
                <div className="italic">
                    <p> 
                        {/* THIS NEEDS TO CHANGE!! */}
                        {job.location}
                    </p>
                    <p>{job.onSite.onSite && "On Site / "}  
                        {job.onSite.hybrid && "Hybrid / "}   
                        {job.onSite.remote && "Remote / "}
                    </p>
                </div>
                <p className="mt-4">{job.shortDescription}</p>
            </div>

            <div className="w-1/2 text-right">
                <p>{job.level}</p>
                <p>Salary: ${job.salary.toLocaleString()}/yr</p>
                <p>Avg. hrs./wk: {job.averageHours} {job.averageHours >=35 ? "(FT)" : "(PT)"}</p>
                <p>Hourly: ${Math.round((job.salary / 52 / job.averageHours) * 100) / 100}/hr</p>
                <div className="flex justify-end my-2">
                    {
                        job.daysWorked.map((day, i) => {
                            return (
                                day ? <span key={i} className="bg-blue-600 rounded-3xl w-6 h-6 text-center">Y</span> 
                                : 
                                <span key={i} className="bg-red-600 rounded-3xl w-6 h-6 text-center">N</span>
                            )
                        })
                    }
                </div>
                <button className="transition border rounded-3xl bg-blue-700 text-white px-8 py-2 
                hover:bg-white hover:border-blue-700 hover:text-blue-700 duration-300 ease-in-out">
                    <span>Apply</span> 
                    <span>&rarr;</span>
                </button>
            </div>
        </div>
    )
}