import { Link } from "react-router-dom"
import { ScrollToTop } from "../helpers"

interface footerLinkProps {
    linkObject: {
        linkDestination: string,
        linkText: string,
    }
}

export default function FooterLink({linkObject}: footerLinkProps){ //TEMPORARY
    const {linkText, linkDestination} = linkObject;

    return(
        <li className="hover:underline">
            <Link to={linkDestination} onClick={() => ScrollToTop(true)}>{linkText}</Link>
        </li>
    )
}