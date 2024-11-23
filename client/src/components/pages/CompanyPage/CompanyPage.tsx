
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

import { Company } from "../../../data/types";

import { SkeletonLoader } from "../../common";

import { apiURL } from "../../../data/constants";
import axios from "axios";
import { list } from "postcss";

//Different navigation tabs, for state management
const tabs = ["jobs", "reviews", "salaries", "about"];

const initialCompanyData: Company = {
    id: "",
    name: "",
    img: "",
    jobPosts: [],
    reviews: []
}

export default function CompanyPage(){
    const { companyID } = useParams();
    const [params, setParams] = useSearchParams();
    const redir = useNavigate();
    let tab = params.get("tab");




    const navTo = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>();
    //Set this with default company data, will likely change in the future
    const [companyData, setCompanyData] = useState<Company>(initialCompanyData);
    //We initialize this with an empty array as a company could have no lob listings.

    
    const onTabClick = (tab: string) => {
        //set state into URL
        setParams(_params => {
            _params.set("tab", tab);
            return _params;
        });
    }
    
    useEffect(() => {
        setIsLoading(true);
        //Grab the company & their posted jobs by using the companyID in the url params
        axios.get(`${apiURL}/Company/${companyID}`)
            .then(res => {
                const company = res.data;
                console.log(company);
                setCompanyData(company);
                SetTabTitle(`${company.name} | Company Page`);
            })
            .catch(err => {
                redir('not-found')
            })
            .finally(() => {
                setIsLoading(false);
            })

        if(!tab || tab === "undefined" || !tabs.includes(tab)){ 
            onTabClick("jobs"); 
        }
    }, [])


    if(isLoading) return <SkeletonLoader />
    
    return(
        <div className="w-full flex-grow">
            <div className="m-20 px-12">
                {/* Main Company Details, Logo, Title, Reviews, Brief desc., etc... */}
                <div className="flex flex-col space-y-2 border-b-2 border-black mb-8">
                    <div className="flex space-x-4 align-text-bottom">
                        <img src={companyData.img} alt="Company Logo" className="w-16 h-16 border p-2"/>
                        <h2 className="text-3xl">{companyData.name}</h2>
                    </div>
                    <p>Brief company description</p>
                    {/* <p className="font-bold flex hover:underline cursor-pointer"><IoStarSharp />{reviews.length} reviews...</p> */}
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
                            companyData.jobPosts.length ?
                            companyData?.jobPosts.map((listing, i) => (
                                <p key={i} className="text-xl cursor-pointer hover:underline"
                                onClick={() => navTo(`/job/${listing.id}`)}>
                                    {listing.title} - 
                                    {
                                    listing.location.city && listing.location.state ?
                                        `${listing.location.city}, ${listing.location.state} - `
                                        :
                                        ""
                                    }
                                    {listing.location.country} ({listing.location.locationType})
                                    {/* If we have a city/state, will show as:
                                        Software Engineer - Chicago, IL - United States (Remote)
                                        If we do not, will show as:
                                        Software Engineer - United States (Remote)

                                        This could potentially be a bit more comprehensive, but for this purpose,
                                        in the backend if we have a state, we must have a city
                                        If we have a city, we must have a state (of course)
                                        but we could also just simply have a country and NO city/state
                                    */}
                                </p>
                            ))
                            :
                            <p className="text-xl">No job listings found!</p>
                        }    
                    </div>
                }
                { tab === "reviews" &&
                    // <ReviewsList 
                    //     reviews={}
                    // />
                    <div>
                        WIP!
                    </div>
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