
/*
    The CompanyPage component display a company specific webpage
    where a user would be able to see all of the various jobs listed
    by the specific company. The user will also be able to see
    all reviews, salaries, and a company made about page!

    Currently, the page uses the useSearchParams hook to display the
    various tabs on the page (salaries, jobs, etc...)
    By default, if no 'tab' param exists, or does not match any
    tabs in the 'tabs' array, it will default to tab=jobs

    This is to prevent a blank page from appearing. Clicking on any tab
    in the CompanyPage navigation bar will also dynamically switch the tab param
*/

import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

import SetTabTitle from "../../../data/utils/SetTabTitle";

import { Job, FetchJobsByCompanyID } from "../../../data/jobs";
import { Company, FetchCompany, Dev_DefaultCompany } from "../../../data/companies";
import { GetRandomNumber } from "../../../data/utils";

import { SkeletonLoader } from "../../common";

import { FetchCompanyReviews, Review } from "../../../data/reviews";

import ReviewsList from "./ReviewsList";

//Different navigation tabs, for state management
const tabs = ["jobs", "reviews", "salaries", "about"];

export default function CompanyPage(){
    const { companyID } = useParams();
    const [params, setParams] = useSearchParams();
    let tab = params.get("tab");

    let totalReviews;



    const navTo = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    //Set this with default company data, will likely change in the future
    const [companyData, setCompanyData] = useState<Company>(Dev_DefaultCompany);
    //We initialize this with an empty array as a company could have no lob listings.
    const [jobListings, setJobListings] = useState<Job[]>([]); 
    const [reviews, setReviews] = useState<Review[]>([]);

    
    const onTabClick = (tab: string) => {
        //set state into URL
        setParams(_params => {
            _params.set("tab", tab);
            return _params;
        });
    }
    
    useEffect(() => {
        //Grab the company & their posted jobs by using the companyID in the url params

        const company = FetchCompany(Number(companyID));
        const jobs = FetchJobsByCompanyID(Number(companyID));
        const _reviews = FetchCompanyReviews(Number(companyID));

        if(!tab || tab === "undefined" || !tabs.includes(tab)){ 
            onTabClick("jobs"); 
        }
        
        //Set these into local state
        setJobListings(jobs);
        setCompanyData(company);


        setReviews(_reviews);
        //Set the tab title so it doesn't just say 'Job Board'
        SetTabTitle(`${company.companyName} | Company Page`);

        //We are setting a fake timer to simulate actual loading speed
        //THIS WILL BE REMOVED, ONLY FOR SIMULATION
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, GetRandomNumber(4000));
    }, [])


    if(isLoading) return <SkeletonLoader />
    
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
                    <p className="font-bold flex hover:underline cursor-pointer"><IoStarSharp />{reviews.length} reviews...</p>
                </div>

                {/* Navigation Bar, Reviews, Salaries, Jobs, etc... */}
                <nav className="w-full flex space-x-6 mx-auto border-b-2 mb-8">
                    <h3 className="text-lg cursor-pointer hover:underline"
                    onClick={() => onTabClick("jobs")}>
                        Jobs
                    </h3>
                    <h3 className="text-lg cursor-pointer hover:underline"
                    onClick={() => onTabClick("reviews")}>
                        Reviews
                    </h3>
                    <h3 className="text-lg cursor-pointer hover:underline"
                    onClick={() => onTabClick("salaries")}>
                        Salaries
                    </h3>
                    <h3 className="text-lg cursor-pointer hover:underline"
                    onClick={() => onTabClick("about")}>
                        About
                    </h3>
                </nav>
                { tab === "jobs" &&
                    <div className="space-y-2">
                        {
                            jobListings.length > 0 ?
                            jobListings.map((listing, i) => (
                                <p key={i} className="text-xl cursor-pointer hover:underline"
                                onClick={() => navTo(`/job/${listing.jobID}`)}>
                                    {listing.jobTitle} - {listing.location} ({listing.jobOptions.locationType})
                                </p>
                            ))
                            :
                            <p className="text-xl">No job listings found!</p>
                        }    
                    </div>
                }
                { tab === "reviews" &&
                    <ReviewsList 
                        reviews={reviews}
                    />
                }
                { tab === "salaries" &&
                    <div>
                        <h2 className="text-xl">No salaries listed!</h2>
                    </div>
                }
                { tab === "about" &&
                    <div>
                        <h2 className="text-xl">No about listed!</h2>
                    </div>
                }
            </div>
        </div>
    )
}