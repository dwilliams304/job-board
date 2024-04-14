export default function SearchBar(){
    return (
        <section style={{display: "flex", flexDirection: "column", 
        justifyContent: "center", alignItems: "center", margin: "2rem"}}>
            <div style={{marginBottom: "0.5rem"}}>
                <input 
                    placeholder="Title, keywords, etc..."
                    className="search-bar"
                />
                <input 
                    placeholder="Location or 'Remote'"
                    className="search-bar"
                />
                <button style={{marginLeft: "1rem", height: "30px"}}>Search</button>
            </div>
            <div style={{display: "flex"}}>
                <select>
                    <option>On-Site</option>
                    <option>Hybrid</option>
                    <option>Remote</option>
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