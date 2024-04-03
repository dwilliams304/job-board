export default function JobPost({job}){
    return(
        <div style={{border: "1px solid black", margin: "1rem"}}>
            <h2>{job.jobTitle}</h2>
            <h3>{job.companyName}</h3>
            <p>Skill level: {job.level}</p>
            <p>Salary: ${job.salary}/yr</p>
            <p>Average hours: {job.averageHours}</p>
            <p>Expected hourly rate: {Math.round((job.salary / 52 / job.averageHours) * 100) / 100}/hr</p>
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
        </div>
    )
}