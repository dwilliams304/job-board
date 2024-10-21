export default function JobPage(){
    return (
        <div className="flex flex-col w-full flex-grow px-8 mt-12 space-y-8">
            {/* Post Details */}
            <div className="space-y-1 relative">
                <h2 className="text-3xl font-bold">Technical Support Engineer II</h2>
                <p className="text-xl">Mid-Level</p>
                <p>Madison, WI</p>
                <div className="flex space-x-2 align-middle text-md">
                    <p>$84,000/yr</p>
                    <p>(Full-Time)</p>
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
                <button className="absolute right-0 top-0 px-8 py-2 border-2 border-blue-700 rounded-3xl">
                    Share Job
                </button>
            </div>


            {/* Job Description */}
            <div className="w-full px-12">
                <div className="space-y-4">
                    <div>
                        <h2 className="font-bold text-xl">Job Requirements</h2>
                        <ul className="list-disc px-12">
                            <li>4+ years of experience as a Support Engineer</li>
                            <li>Bachelor's Degree in Computer Science or related</li>
                            <li>Excellent writtend and verbal communication skills</li>
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
                <button className="px-8 py-2 bg-blue-700 rounded-3xl text-white">
                    Apply now
                </button>
                <button className="px-8 py-2 bg-slate-300">
                    Report Job
                </button>
            </div>
        </div>
    )
}