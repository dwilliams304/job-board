
/*
    The FeaturedArticleCard will return a Card that displays text, with an arrow
    which will (eventually) redirect the user to a help article based off of
    the articleID that is passed through props
*/

import { FeaturedArticle } from "../../../data/helparticles";
import { useNavigate } from "react-router-dom";


export default function FeaturedArticleCard({title, id}: FeaturedArticle){
    const navTo = useNavigate();

    return(
        <div className="flex lg:w-1/5 w-3/4 max-w-1/4 mx-auto space-x-6 border border-b-2 border-b-black px-12 py-4 justify-between
        cursor-pointer hover:shadow-lg transition ease-in-out duration-300"
        onClick={() => navTo(`${id}`)}>
            <h3 className="text-nowrap text-ellipsis overflow-hidden">{title}</h3>
            <p>&rarr;</p>
        </div>
    )
}