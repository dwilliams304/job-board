import { IoFilterSharp } from "react-icons/io5";
import { SearchOptions, FilterPopupMenuState } from "../pages/JobBoard";

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
                <button className="border rounded-3xl bg-blue-700 text-white px-8 py-2 ml-2">Search</button>
            </div>
            <div className="flex">
                <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                    {
                        searchOptions.location.map((option, idx) => (
                            <option key={idx}>{option}</option>
                        ))
                    }
                </select>

                <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                    {
                        searchOptions.experience.map((option, idx) => (
                            <option key={idx}>{option}</option>
                        ))
                    }
                </select>
                
                <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                    {
                        searchOptions.postAge.map((option, idx) => (
                            <option key={idx}>{option}</option>
                        ))
                    }
                </select>

                <button className="flex m-2 p-1 shadow-md border border-solid cursor-pointer"
                onClick={() => {
                setShowFilterPopup(!showFilterPopup);
                }}>
                    <span>All Filters</span>
                    <span><IoFilterSharp /></span>
                </button>
            </div>
        </section>
    )
}