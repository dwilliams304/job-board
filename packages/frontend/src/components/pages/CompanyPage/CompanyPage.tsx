import { useParams } from "react-router-dom"
import { AppleLogo } from "../../../assets/testlogos";
import { IoStarSharp } from "react-icons/io5";

export default function CompanyPage(){
    const companyID = useParams();


    return(
        <div className="w-full flex-grow">
            <div className="m-20 px-12">
                {/* Main Company Details, Logo, Title, Reviews, Brief desc., etc... */}
                <div className="flex flex-col space-y-2 border-b-2 border-black mb-8">
                    <div className="flex space-x-4 align-text-bottom">
                        <img src={AppleLogo} alt="Company Logo" className="w-16 h-16 border p-2"/>
                        <h2 className="text-3xl">Company Name</h2>
                    </div>
                    <p>Brief company description</p>
                    <p className="font-bold flex hover:underline cursor-pointer"><IoStarSharp />4.5/5 (1.4k reviews)</p>
                </div>

                {/* Navigation Bar, Reviews, Salaries, Jobs, etc... */}
                <nav className="w-full flex space-x-6 mx-auto">
                    <h3 className="text-lg cursor-pointer hover:underline">Jobs</h3>
                    <h3 className="text-lg cursor-pointer hover:underline">Reviews</h3>
                    <h3 className="text-lg cursor-pointer hover:underline">Salaries</h3>
                    <h3 className="text-lg cursor-pointer hover:underline">About</h3>
                </nav>
            </div>
        </div>
    )
}