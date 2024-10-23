import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

import { Company, FetchCompany, Dev_DefaultCompany } from "../../../data/companies";
import { GetRandomNumber } from "../../../utils";

export default function CompanyPage(){
    const { companyID } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [companyData, setCompanyData] = useState<Company>(Dev_DefaultCompany);

    useEffect(() => {
        const company = FetchCompany(Number(companyID));

        setCompanyData(company);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, GetRandomNumber(4000));
    }, [])

    if(isLoading) {
        return(
            <div className="w-full flex-grow text-center">
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