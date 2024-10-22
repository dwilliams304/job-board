import { IoFilterSharp } from "react-icons/io5";
import { SearchOptions, FilterPopupMenuState } from "./JobBoard";

import Button from "../../common/Button";

type SearchBarProps = {
    filterPopupState: FilterPopupMenuState
    searchOptions: SearchOptions
}

export default function SearchBar(props: SearchBarProps)
{

    const {searchOptions} = props;
    const {showFilterPopup, setShowFilterPopup} = props.filterPopupState

    return (
        <section className="flex flex-col items-center justify-center m-8">
            <div className="mb-2">
                <input 
                    placeholder="Title, keywords, etc..."
                    className="m-1 mb-2 p-2 pr-6 shadow-md border border-solid"
                />
                <input 
                    placeholder="Location or 'Remote'"
                    className="m-1 mb-2 p-2 pr-6 shadow-md border border-solid"
                />
                <Button
                    type="Primary"
                    text="Search"
                    function={() => {}}
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
                            searchOptions.location.map((option, idx) => (
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
                            searchOptions.experience.map((option, idx) => (
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
                            searchOptions.postAge.map((option, idx) => (
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