import { FeaturedArticle } from "../../../data/helparticles";

export default function FeaturedArticleCard({title, articleID}: FeaturedArticle){
    return(
        <div className="flex w-1/5 max-w-1/4 mx-auto space-x-6 border border-b-2 border-b-black px-12 py-4 justify-between
        cursor-pointer hover:shadow-lg transition ease-in-out duration-300">
            <h3 className="text-nowrap text-ellipsis overflow-hidden">{title}</h3>
            <p>&rarr;</p>
        </div>
    )
}