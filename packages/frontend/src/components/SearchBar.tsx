export default function SearchBar(){
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
                <select className="m-2 p-1 border border-solid border-black cursor-pointer">
                    <option>On-Site</option>
                    <option>Hybrid</option>
                    <option>Remote</option>
                </select>

                <select className="m-2 p-1 border border-solid border-black cursor-pointer">
                    <option>Intern</option>
                    <option>Entry-Level</option>
                    <option>Mid-Level</option>
                    <option>Senior</option>
                    <option>Manager</option>
                </select>
                
                <select className="m-2 p-1 border border-solid border-black cursor-pointer">
                    <option>Past 24 hours</option>
                    <option>Past 7 days</option>
                    <option>Past 30 days</option>
                </select>

                <button>All Filters</button>
            </div>
        </section>
    )
}