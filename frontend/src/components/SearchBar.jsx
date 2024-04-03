export default function SearchBar(){
    return (
        <section style={{display: "flex", justifyContent: "center", margin: "2rem"}}>
            <input placeholder="Title, keywords, etc..."/>
            <input placeholder="Location"/>
            <button>Filters</button>
        </section>
    )
}