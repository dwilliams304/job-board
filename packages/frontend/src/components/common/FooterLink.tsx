import { Link } from "react-router-dom"
import { ScrollToTop } from "../../utils";

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