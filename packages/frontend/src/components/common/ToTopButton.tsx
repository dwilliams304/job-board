
/*
    This button is present on all pages, and will be to take the user to the top
    of the current page.
    Just for ease of use, as if we are listing 50+ jobs on the job board, that's a lot of scrolling!
*/

import { ScrollToTop } from "../../utils";


export default function ToTopButton(){
    return(
        <button className="sticky bottom-2 mr-2 ml-auto border bg-blue-700 text-white border-blue-200 rounded-xl px-4 py-1"
        onClick={() => ScrollToTop(true)}>
            Back to Top &uarr;
        </button>
    )
}