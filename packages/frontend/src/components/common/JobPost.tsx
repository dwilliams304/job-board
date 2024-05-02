import TestLogo from "../../assets/react.svg";

type JobPostProps = {
    job : {
        jobTitle: string;
        companyName: string;
        location: string;
        shortDescription: string;
        level: string;
        salary: number;
        averageHours: number;
        daysWorked: boolean[];
    }
}

export default function JobPost({job}: JobPostProps){
    return(
        <div className="flex border-solid border border-black m-5 p-5">
            <div className="w-1/2">
                <div className="flex">
                    <img src={TestLogo} alt="company logo" />
                    <h2>{job.jobTitle} - {job.companyName}</h2>
                </div>
                <div>
                    <p>{job.location}</p>
                </div>
                <p>{job.shortDescription}</p>
            </div>

            <div className="w-1/2 text-right">
                <p>{job.level}</p>
                <p>Salary: ${job.salary.toLocaleString()}/yr</p>
                <p>Avg. hrs./wk: {job.averageHours} {job.averageHours >=35 ? "(FT)" : "(PT)"}</p>
                <p>Hourly: ${Math.round((job.salary / 52 / job.averageHours) * 100) / 100}/hr</p>
                <div className="flex justify-end">
                    {
                        job.daysWorked.map((day, i) => {
                            return (
                                day ? <span key={i}>Y</span> 
                                : 
                                <span key={i}>N</span>
                            )
                        })
                    }
                </div>
                <button className="border rounded-3xl bg-blue-700 text-white px-8 py-2 ">
                    Apply &rarr;
                </button>
            </div>
        </div>
    )
}