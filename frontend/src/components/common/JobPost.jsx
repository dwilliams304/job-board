/* eslint-disable */
import TestLogo from "../../assets/react.svg";

export default function JobPost({job}){
    return(
        <div style={{border: "1px solid black", margin: "1rem", padding: "1rem", display: "flex"}}>
            <div style={{width: "50%"}}>
                <div style={{display: "flex"}}>
                    <img src={TestLogo} alt="company logo" />
                    <h2>{job.jobTitle} - {job.companyName}</h2>
                </div>
                <div>
                    <p>{job.location}</p>
                </div>
                <p>{job.shortDescription}</p>
            </div>

            <div style={{width: "50%", textAlign: "right"}}>
                <p>{job.level}</p>
                <p>Salary: ${job.salary.toLocaleString()}/yr</p>
                <p>Avg. hrs./wk: {job.averageHours} {job.averageHours >=35 ? "(FT)" : "(PT)"}</p>
                <p>Hourly: ${Math.round((job.salary / 52 / job.averageHours) * 100) / 100}/hr</p>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    {
                        job.daysWorked.map((day, i) => {
                            return (
                                <span className={day === true ? "active" : "inactive"} key={i}>
                                    {day === true ? "Y" : "N"}
                                </span>
                            )
                        })
                    }
                </div>
                <button style={{border: "none", backgroundColor: "rgb(90, 31, 255)",
                color: "white", padding: "0.5rem 2rem", borderRadius: "30px"}}>
                    Apply -&gt;
                </button>
            </div>
        </div>
    )
}