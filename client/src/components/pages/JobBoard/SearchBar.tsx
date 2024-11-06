import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { FilterPopupMenuState } from "./JobBoard";

import { JobOptions } from "../../../data/joboptions";


import Button from "../../common/Button";

const initialSearchValues = {
    title: "",
    location: "",
    locationType: "",
    experience: "",
    datePosted: "",
}

type SearchBarProps = {
    filterPopupState: FilterPopupMenuState;
    onSearchSubmit: (...args: any[]) => void;
}

export default function SearchBar(props: SearchBarProps){
    const [ searchInputs, setSearchInputs ] = useState({});

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setSearchInputs(
            {
                ...searchInputs,
                [name]: value
            }
        )
    }

    const {showFilterPopup, setShowFilterPopup} = props.filterPopupState

    return (
        <section className="flex flex-col items-center justify-center m-8">
            <div className="mb-2">
                <input 
                    placeholder="Title, keywords, etc..."
                    className="m-1 mb-2 p-2 pr-6 shadow-md border border-solid"
                    name="title"
                    onChange={onChange}
                    value={searchInputs.title}
                />
                <input 
                    placeholder="Location or 'Remote'"
                    className="m-1 mb-2 p-2 pr-6 shadow-md border border-solid"
                    name="location"
                    onChange={onChange}
                    value={searchInputs.location}
                />
                <Button
                    type="Primary"
                    text="Search"
                    function={() => props.onSearchSubmit(searchInputs)}
                    style={{marginLeft: "2rem"}}

                />
            </div>
            <div className="flex relative w-1/3">
                <div className="flex flex-col text-center m-2">
                    <label htmlFor="location"
                    className="text-sm text-gray-400">
                        Location
                    </label>
                    <select className="p-1 shadow-md border border-solid cursor-pointer" id="location">
                        {
                            JobOptions.locationOptions.map((option, idx) => (
                                <option key={idx}>{option}</option>
                            ))
                        }
                    </select>
                </div>
                
                <div className="flex flex-col text-center m-2">
                    <label htmlFor="experience"
                    className="text-sm text-gray-400">
                        Experience Level
                    </label>
                    <select className="p-1 shadow-md border border-solid cursor-pointer" id="experience">
                        {
                            JobOptions.experienceOptions.map((option, idx) => (
                                <option key={idx}>{option}</option>
                            ))
                        }
                    </select>
                </div>
                
                <div className="flex flex-col text-center m-2">
                    <label htmlFor="post-age"
                    className="text-sm text-gray-400">
                        Date posted
                    </label>
                    <select className="p-1 shadow-md border border-solid cursor-pointer" id="post-age">
                        {
                            JobOptions.postAgeOptions.map((option, idx) => (
                                <option key={idx}>{option}</option>
                            ))
                        }
                    </select>
                </div>
                
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
            </div>
        </section>
    )
}