/* eslint-disable */
import TestLogo from "../../assets/react.svg";

export default function JobPost({job}){
    return(
        <div style={{border: "1px solid black", margin: "1rem"}}>
            <div style={{display: "flex"}}>
                <img src={TestLogo} alt="company logo" />
                <h2>{job.jobTitle} - {job.companyName}</h2>
            </div>
            <div>
                <p>Location: {job.location}</p>
            </div>
            <p>Skill level: {job.level}</p>
            <p>Salary: ${job.salary}/yr</p>
            <p>Average hours: {job.averageHours} {job.averageHours >=35 ? "(FT)" : "(PT)"}</p>
            <p>Expected hourly: {Math.round((job.salary / 52 / job.averageHours) * 100) / 100}/hr</p>
            <div style={{display: "flex"}}>
                {
                    job.daysWorked.map((day, i) => {
                        return (
                            <p className={day === true ? "active" : "inactive"} key={i}>
                                {day === true ? "Y" : "N"}
                            </p>
                        )
                    })
                }
            </div>
            <p>{job.shortDescription}</p>
            <button>Apply -&gt;</button>
        </div>
    )
}