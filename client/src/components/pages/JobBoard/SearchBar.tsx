import { useState } from "react";
import { FilterPopupMenuState } from "./JobBoard";

import { JobOptions } from "../../../data/joboptions";


import Button from "../../common/Button";

type SearchBarProps = {
    filterPopupState: FilterPopupMenuState;
    onSearchSubmit: (...args: any[]) => void;
    jobsAreLoading: boolean;
}

export default function SearchBar(props: SearchBarProps){
    const [ searchInputs, setSearchInputs ] = useState({
        title: "",
        location: "",
        locationType: "Any",
        experience: "Any",
        postAge: "Any",
        term: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target;
        setSearchInputs(
            {
                ...searchInputs,
                [name]: value
            }
        )
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSearchSubmit(searchInputs);
    }

    // const {showFilterPopup, setShowFilterPopup} = props.filterPopupState

    return (
        <section className="flex flex-col items-center justify-center m-8">
            <div className="mb-2">
                <form onSubmit={onSubmit}>
                    {/* MAIN SEARCH OPTIONS */}
                    <input 
                        placeholder="Title, keywords, etc..."
                        className="lg:m-1 mb-2 p-2 md:pr-6 w-full lg:w-auto lg:pr-14 shadow-md border border-solid"
                        name="title"
                        onChange={onChange}
                        value={searchInputs.title}
                    />
                    <input 
                        placeholder="Location or 'Remote'"
                        className="lg:m-1 mb-2 p-2 md:pr-6 w-full lg:w-auto lg:pr-14 shadow-md border border-solid"
                        name="location"
                        onChange={onChange}
                        value={searchInputs.location}
                    />
                    <Button
                        styleType="Primary"
                        type="submit"
                        text="Search"
                        function={() => props.onSearchSubmit(searchInputs)}
                        className="mx-auto w-full lg:w-auto"
                        disabled={props.jobsAreLoading}
                    />

                    {/* SEARCH DROPDOWNS */}
                    <div className="flex flex-col md:flex-row w-full pt-4 md:justify-between">
                        <div className="flex flex-col text-center space-y-1 md:space-y-0 md:m-2">
                            <label htmlFor="location"
                            className="text-sm text-gray-400">
                                Location
                            </label>
                            <select className="p-1 shadow-md border border-solid cursor-pointer" id="location" 
                            name="locationType"
                            value={searchInputs.locationType}
                            onChange={onChange}>
                                <option>Any</option>
                                {
                                    JobOptions.locationOptions.map((option, idx) => (
                                        <option key={idx} value={option}>{option}</option>
                                    ))
                                }
                            </select>
                        </div>
                        
                        <div className="flex flex-col text-center md:m-2">
                            <label htmlFor="experience"
                            className="text-sm text-gray-400">
                                Experience Level
                            </label>
                            <select className="p-1 shadow-md border border-solid cursor-pointer" id="experience"
                            name="experience"
                            value={searchInputs.experience}
                            onChange={onChange}>
                                <option>Any</option>
                                {
                                    JobOptions.experienceOptions.map((option, idx) => (
                                        <option key={idx} value={option}>{option}</option>
                                    ))
                                }
                            </select>
                        </div>
                        
                        <div className="flex flex-col text-center md:m-2">
                            <label htmlFor="term"
                            className="text-sm text-gray-400">
                                Term
                            </label>
                            <select className="p-1 shadow-md border border-solid cursor-pointer" id="term"
                            name="term"
                            value={searchInputs.term}
                            onChange={onChange}>
                                <option>Any</option>
                                {
                                    JobOptions.termOptions.map((option, idx) => (
                                        <option key={idx} value={option}>{option}</option>
                                    ))
                                }
                            </select>
                        </div>
                        
                        <div className="flex flex-col text-center md:m-2">
                            <label htmlFor="post-age"
                            className="text-sm text-gray-400">
                                Post Age
                            </label>
                            <select className="p-1 shadow-md border border-solid cursor-pointer" id="post-age"
                            name="postAge"
                            value={searchInputs.postAge}
                            onChange={onChange}>
                                <option>Any</option>
                                {
                                    JobOptions.postAgeOptions.map((option, idx) => (
                                        <option key={idx} value={parseInt(option)}>&lt; {option}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            {/* <div className="flex relative w-1/3">
                
                <div className="absolute right-0 bottom-0">
                    <button className="m-2 p-1 shadow-md border border-solid cursor-pointer"
                    onClick={() => {
                    setShowFilterPopup(!showFilterPopup);
                    }}>
                        <span className="flex align-middle">
                            <span className="pr-2">All Filters</span><IoFilterSharp />
                        </span>
                    </button>
                </div>
            </div> */}
        </section>
    )
}