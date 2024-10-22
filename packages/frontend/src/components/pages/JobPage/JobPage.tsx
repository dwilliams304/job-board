import Button from "../../common/Button"

export default function JobPage(){
    return (
        <div className="flex flex-col w-full flex-grow px-8 mt-12 space-y-8">
            {/* Post Details */}
            <div className="space-y-1 relative">
                <h2 className="text-3xl font-bold">Technical Support Engineer II</h2>
                <div className="flex flex-row space-x-4">
                    <p className="">Mid-Level</p>
                    <p>Full-Time</p>
                    <p>Madison, WI</p>
                    <p>$84,000/yr</p>
                </div>

                {/* Company Details */}
                <div className="flex flex-col border-b-2 border-black">
                    <div className="flex space-x-4">
                        <img 
                            src="" 
                            alt="Company Logo" 
                            className=""
                        />
                        <h2>Company Name</h2>
                    </div>
                    <a className="hover:underline cursor-pointer font-bold">4.5/5 (1.4k reviews)</a>
                </div>
                <Button
                    type="Secondary"
                    text="Share Job"
                    function={() => {}}
                    style={{position: "absolute", right: "0", top: "0"}}
                />
            </div>

            {/* Job Description */}
            <div className="w-full px-12">
                <div className="space-y-4">
                    <div>
                        <h2 className="font-bold text-xl">Job Requirements</h2>
                        <ul className="list-disc px-12">
                            <li>4+ years of experience as a Support Engineer</li>
                            <li>Bachelor's Degree in Computer Science or related</li>
                            <li>Excellent written and verbal communication skills</li>
                            <li>Great understanding of Javascript, TypeScript, HTML, and CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">About Us</h2>
                        
                    </div>

                </div>
            </div>

            {/* Apply, Report, Etc */}
            <div className="space-x-4">
                <Button
                    type="Primary"
                    text="Apply now"
                    function={() => {}}
                />
                <Button
                    type="Tertiary"
                    text="Report Job"
                    function={() => {}}
                />
            </div>
        </div>
    )
}