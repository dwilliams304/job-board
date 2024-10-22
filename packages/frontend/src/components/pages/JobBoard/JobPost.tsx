import Button from "../../common/Button";

type JobPostProps = {
    job : {
        jobID: number;
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
    }
}

export default function JobPost({job}: JobPostProps){
    const salary = Math.round((job.salary / 52 / job.averageHours) * 100) / 100;

    return(
        <div className="flex border border-solid my-5 mx-8 p-5 shadow-md transition duration-300 ease-in-out
        cursor-pointer hover:shadow-xl hover:border-gray-400"
        onClick={() => window.open(`/job/${job.jobID}`)}>
            <div className="w-4/5">
                <div className="flex align-middle">
                    <img 
                        src={job.companyLogo} 
                        alt="company logo" 
                        className="p-2 mr-2 border"
                    />
                    <h2 className="font-semibold">
                        <span className="hover:underline" onClick={() => window.open("/company/22")}>
                            {job.companyName}
                        </span> - 
                        <span> {job.jobTitle}</span>
                    </h2>
                </div>
                <div className="italic">
                    <p> 
                        {/* THIS NEEDS TO CHANGE!! */}
                        {job.location}
                    </p>
                    <p>
                        {job.onSite.onSite && "On Site / "}  
                        {job.onSite.hybrid && "Hybrid / "}   
                        {job.onSite.remote && "Remote / "}
                    </p>
                </div>
                <p className="mt-4">{job.shortDescription}</p>
            </div>

            <div className="w-1/5 text-right border-l-2">
                <p>{job.level}</p>
                <p>Salary: ${job.salary.toLocaleString()}/yr</p>
                <p>Avg. hrs./wk: {job.averageHours} {job.averageHours >=35 ? "(FT)" : "(PT)"}</p>
                <p>Hourly: ${salary}/hr</p>
                <Button
                    type="Primary"
                    text="Apply &rarr;"
                    function={() => window.open(`/job/${job.jobID}/apply`)}
                />
            </div>
        </div>
    )
}