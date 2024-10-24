import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

import SetTabTitle from "../../../utils/SetTabTitle";

import { Job, FetchJobsByCompanyID } from "../../../data/jobs";
import { Company, FetchCompany, Dev_DefaultCompany } from "../../../data/companies";
import { GetRandomNumber } from "../../../utils";

type tabType = "Jobs" | "Salaries" | "Reviews" | "About"

export default function CompanyPage(){
    const { companyID } = useParams();
    const navTo = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [companyData, setCompanyData] = useState<Company>(Dev_DefaultCompany);
    const [jobListings, setJobListings] = useState<Job[]>([]);
    const [activeTab, setActiveTab] = useState("Jobs");

    
    const onTabClick = (tab: tabType) => {
        setActiveTab(tab);
    }
    
    useEffect(() => {
        const company = FetchCompany(Number(companyID));
        const jobs = FetchJobsByCompanyID(Number(companyID));
        
        setJobListings(jobs);
        setCompanyData(company);
        SetTabTitle(`${company.companyName} | Company Page`);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, GetRandomNumber(4000));
    }, [])

    if(isLoading) {
        return(
            <div className="w-full flex-grow text-center animate-pulse">
                <h2 className="mt-20 text-2xl">Loading company page...</h2>
            </div>
        )
    }


    return(
        <div className="w-full flex-grow">
            <div className="m-20 px-12">
                {/* Main Company Details, Logo, Title, Reviews, Brief desc., etc... */}
                <div className="flex flex-col space-y-2 border-b-2 border-black mb-8">
                    <div className="flex space-x-4 align-text-bottom">
                        <img src={companyData.companyLogo} alt="Company Logo" className="w-16 h-16 border p-2"/>
                        <h2 className="text-3xl">{companyData.companyName}</h2>
                    </div>
                    <p>Brief company description</p>
                    <p className="font-bold flex hover:underline cursor-pointer"><IoStarSharp />{companyData.reviews}</p>
                </div>

                {/* Navigation Bar, Reviews, Salaries, Jobs, etc... */}
                <nav className="w-full flex space-x-6 mx-auto border-b-2 mb-8">
                    <h3 className="text-lg cursor-pointer hover:underline"
                    onClick={() => onTabClick("Jobs")}>
                        Jobs
                    </h3>
                    <h3 className="text-lg cursor-pointer hover:underline"
                    onClick={() => onTabClick("Reviews")}>
                        Reviews
                    </h3>
                    <h3 className="text-lg cursor-pointer hover:underline"
                    onClick={() => onTabClick("Salaries")}>
                        Salaries
                    </h3>
                    <h3 className="text-lg cursor-pointer hover:underline"
                    onClick={() => onTabClick("About")}>
                        About
                    </h3>
                </nav>
                { activeTab === "Jobs" &&
                    <div>
                        <div className="space-y-2">
                            {
                                jobListings.length > 0 ?
                                jobListings.map((listing, i) => (
                                    <p key={i} className="text-xl cursor-pointer hover:underline"
                                    onClick={() => navTo(`/job/${listing.jobID}`)}>
                                        {listing.jobTitle} - {listing.location} ({listing.onSite})
                                    </p>
                                ))
                                :
                                <p className="text-xl">No job listings found!</p>
                            }    
                        </div>
                    </div>
                }
                { activeTab === "Reviews" &&
                    <div>
                        <h2 className="text-xl">No reviews listed!</h2>
                    </div>
                }
                { activeTab === "Salaries" &&
                    <div>
                        <h2 className="text-xl">No salaries listed!</h2>
                    </div>
                }
                { activeTab === "About" &&
                    <div>
                        <h2 className="text-xl">No about listed!</h2>
                    </div>
                }
            </div>
        </div>
    )
}