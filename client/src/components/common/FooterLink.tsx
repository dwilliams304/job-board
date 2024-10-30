
//Footer links will simply be used to navigate you somewhere when clicked, 
// and will scroll to the top of the page when clicked

import { Link } from "react-router-dom"
import { ScrollToTop } from "../../data/utils";

type FooterLinkProps = {
    linkObject: {
        linkDestination: string,
        linkText: string,
    }
}


export default function FooterLink({linkObject}: FooterLinkProps){ //TEMPORARY
    const {linkText, linkDestination} = linkObject;

    return(
        <li className="hover:underline">
            <Link 
            to={linkDestination} 
            onClick={() => ScrollToTop(true)}
            >
                {linkText}
            </Link>
        </li>
    )
}