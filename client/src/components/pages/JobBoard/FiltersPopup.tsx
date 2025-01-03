
/*
    The FiltersPopup component is a sidebar menu that will appear
    when the 'All Filters' button is clicked underneath the Search Bar

    This will (eventually) work properly and take in props with all different
    kinds of Filter options

    This will eventually set an array of FilterOption objects that will execute
    some kind of function on the job board page to allow users to search
    through jobs more specifically
*/

import { FilterPopupMenuState } from "./JobBoard";
import { JobOptions } from "../../../data/joboptions";


export default function FiltersPopup({showFilterPopup, setShowFilterPopup}: FilterPopupMenuState){
    
    return(
        <nav className={`${showFilterPopup ? "opacity-100 visible" : "opacity-0 invisible"} z-40 flex w-1/4 bg-gray-50 border-r-2
        fixed left-0 top-16 bottom-0 transition-all ease-in-out duration-300 `}>
            <div className="w-full h-full flex flex-col align-middle items-center py-8 space-y-6
            divide-y-2">
                <div className="w-full flex flex-col justify-center items-center pt-4">
                    <h2 className="text-lg font-semibold">Job Location</h2>
                    <div>
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            {
                                JobOptions.locationOptions.map((option, idx) => (
                                    <option key={idx}>{option}</option>
                                ))
                            }
                        </select>
                        <input
                            type="range"
                            min={0}
                            max={30}
                        />
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            {
                                JobOptions.termOptions.map((option, idx) => (
                                    <option key={idx}>{option}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>


                <div className="w-full flex flex-col justify-center items-center pt-4">
                    <h2 className="text-lg font-semibold">Pay Range</h2>
                    <div className="flex flex-col">
                        <input
                            type="range"
                            min={0}
                            max={999999}
                        />
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            {
                                JobOptions.experienceOptions.map((option, idx) => (
                                    <option key={idx}>{option}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>


                <div className="w-full flex flex-col justify-center items-center pt-4">
                    <h2 className="text-lg font-semibold">Filter Category 3</h2>
                    <div>
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            <option>On-Site</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                        </select>
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            <option>On-Site</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                        </select>
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            <option>On-Site</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                        </select>
                    </div>
                </div>


                <div className="w-full flex flex-col justify-center items-center pt-4">
                    <h2 className="text-lg font-semibold">Filter Category 4</h2>
                    <div>
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            <option>On-Site</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                        </select>
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            <option>On-Site</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                        </select>
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            <option>On-Site</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                        </select>
                    </div>
                </div>

                <div className="absolute bottom-2 w-full flex justify-end px-4 py-2 space-x-4">
                    <button className="rounded-full bg-white text-blue-700
                    px-4 py-1"
                    onClick={() => {
                        setShowFilterPopup(false);
                    }}>
                        Clear Filters
                    </button>
                    
                    <button className="rounded-full bg-blue-700 text-white
                    px-4 py-1"
                    onClick={() => {
                        setShowFilterPopup(false);
                    }}>
                        Apply Filters
                    </button>
                </div>
            </div>
        </nav>
    )
}