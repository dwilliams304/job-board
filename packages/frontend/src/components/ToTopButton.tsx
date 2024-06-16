import { ScrollToTop } from "../helpers"

export default function ToTopButton(){
    return(
        <button className="sticky bottom-2 mr-2 ml-auto border bg-blue-700 text-white border-blue-200 rounded-xl px-4 py-1"
        onClick={() => ScrollToTop(true)}>
            Back to Top &uarr;
        </button>
    )
}