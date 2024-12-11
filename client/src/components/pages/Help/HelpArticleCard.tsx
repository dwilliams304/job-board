
/*
    The HelpArticleCard is simply a card that will display text and when
    clicked will redirect you to a specific article based off of the ArticleID

    The bottom border will have a specific color based off the article tag
    
*/

import { borderColors, HelpArticle } from "../../../data/helparticles";
import { useNavigate } from "react-router-dom";

type HelpArticleProps = {
    borderColor: keyof typeof borderColors
    helpArticle : HelpArticle
}

export default function HelpArticleCard({borderColor, helpArticle}: HelpArticleProps){ //temporary
    const {tag, title, id} = helpArticle;

    const navTo = useNavigate();


    return(
        <div className={`border ${borderColors[borderColor]} border-b-2 text-center md:m-4 px-8 md:px-16 py-6 cursor-pointer
        transition ease-in-out duration-300 hover:shadow-lg`}
        onClick={() => navTo(`${id}`)}>
            <h4 className="text-gray-400 text-sm">({tag})</h4>
            <h3 className="text-lg">{title}</h3>
        </div>
    )
}