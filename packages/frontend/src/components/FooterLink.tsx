import { Link } from "react-router-dom"
import { ScrollToTop } from "../helpers"

interface footerLink {
    linkDestination: string,
    linkText: string,
    scrollToTop: boolean
}

export default function FooterLink(props: any){ //TEMPORARY
    return(
        <li className="hover:underline">
            <Link to={props.linkDestination} onClick={() => ScrollToTop(true)}>{props.linkText}</Link>
        </li>
    )
}