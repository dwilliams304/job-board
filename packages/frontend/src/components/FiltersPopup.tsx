export default function FiltersPopup(props: any){ //FIX THIS
    let {showFilterPopup} = props;
    
    return(
        <nav className={`${showFilterPopup ? "opacity-100" : "opacity-0"} flex w-1/4 bg-gray-50 border-r-2
        absolute left-0 top-0 bottom-0 transition-all ease-in-out duration-300`}>
            <div className="w-full h-full flex flex-col align-middle items-center py-8 space-y-4">
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
                <h2>Pop up!</h2>
            </div>
        </nav>
    )
}