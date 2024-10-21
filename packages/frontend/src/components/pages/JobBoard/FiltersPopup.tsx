import { FilterPopupMenuState } from "./pages/JobBoard";


export default function FiltersPopup({showFilterPopup, setShowFilterPopup}: FilterPopupMenuState){
    
    return(
        <nav className={`${showFilterPopup ? "opacity-100 visible" : "opacity-0 invisible"} flex w-1/4 bg-gray-50 border-r-2
        fixed left-0 top-16 bottom-0 transition-all ease-in-out duration-300 `}>
            <div className="w-full h-full flex flex-col align-middle items-center py-8 space-y-6
            divide-y-2">
                <div className="w-full flex flex-col justify-center items-center pt-4">
                    <h2 className="text-lg font-semibold">Job Location</h2>
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
                    <h2 className="text-lg font-semibold">Pay Range</h2>
                    <div className="flex flex-col">
                        <input
                            type="range"
                            min={0}
                            max={999999}
                        />
                        <select className="m-2 p-1 shadow-md border border-solid cursor-pointer">
                            <option>Intern</option>
                            <option>Entry-Level</option>
                            <option>Mid-Level</option>
                            <option>Senior</option>
                            <option>Manager</option>
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