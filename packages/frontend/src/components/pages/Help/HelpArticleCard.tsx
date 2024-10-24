
/*
    The HelpArticleCard is simply a card that will display text and when
    clicked will redirect you to a specific article based off of the ArticleID

    The bottom border will have a specific color based off the article tag
    
*/

import { borderColors, HelpArticle } from "../../../data/helparticles";

type HelpArticleProps = {
    borderColor: keyof typeof borderColors
    helpArticle : HelpArticle
}

export default function HelpArticleCard({borderColor, helpArticle}: HelpArticleProps){ //temporary
    const {tag, title, articleLink} = helpArticle;


    return(
        <div className={`border ${borderColors[borderColor]} border-b-2 text-center m-4 px-16 py-6 cursor-pointer
        transition ease-in-out duration-300 hover:shadow-lg`}>
            <h4 className="text-gray-400 text-sm">({tag})</h4>
            <h3 className="text-lg">{title}</h3>
        </div>
    )
}