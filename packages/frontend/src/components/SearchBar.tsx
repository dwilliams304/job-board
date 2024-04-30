export default function SearchBar(){
    return (
        <section className="flex flex-col items-center justify-center m-8">
            <div className="mb-2">
                <input 
                    placeholder="Title, keywords, etc..."
                    className="search-bar"
                />
                <input 
                    placeholder="Location or 'Remote'"
                    className="search-bar"
                />
                <button>Search</button>
            </div>
            <div className="flex">
                <select>
                    <option>On-Site</option>
                    <option>Hybrid</option>
                    <option>Remote</option>
                </select>

                <select>
                    <option>Intern</option>
                    <option>Entry-Level</option>
                    <option>Mid-Level</option>
                    <option>Senior</option>
                    <option>Manager</option>
                </select>
                
                <select>
                    <option>Past 24 hours</option>
                    <option>Past 7 days</option>
                    <option>Past 30 days</option>
                </select>

                <button>All Filters</button>
            </div>
        </section>
    )
}