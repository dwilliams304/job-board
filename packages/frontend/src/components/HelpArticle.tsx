import { borderColors } from "../data/helparticles"

type HelpArticleProps = {
    helpArticle : {
        tag: string,
        title: string,
        articleLink: string,
    }
}


export default function HelpArticle({helpArticle}: HelpArticleProps){ //temporary
    const {tag, title, articleLink} = helpArticle;


    return(
        <div className={`border ${borderColors[tag]} text-center m-4 px-16 py-6 cursor-pointer 
        transition ease-in-out duration-300 hover:shadow-lg`}>
            <h4 className="text-gray-400 text-sm">({tag})</h4>
            <h3 className="text-lg">{title}</h3>
        </div>
    )
}