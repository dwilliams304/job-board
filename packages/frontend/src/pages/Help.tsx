import { useState } from "react"
import { helpArticles } from "../data/helparticles"
import { HelpArticleCard } from "../components";

export default function Help(){
    const [showEmployerHelp, useShowEmployerHelp] = useState(false);

    return(
        <section className="flex-grow">
            <div>
                <div className="w-full text-center py-20 bg-gradient-to-t from-blue-900 to-blue-700 shadow-md">
                    <h2 className="p-8 text-3xl text-white font-light">How can we help you?</h2>
                    <input
                        type="text"
                        placeholder="Enter your question here"
                        className="rounded-xl py-2 pl-4 w-1/3 border border-solid border-black"
                    />
                </div>

                <div className="w-full mt-8 justify-center align-middle flex flex-col">
                    <nav className="text-center justify-center flex space-x-6 text-xl border-b-2 border-gray-200">
                        <h4 className={`cursor-pointer ${showEmployerHelp ? "text-black underline":"text-gray-400"}
                        transition duration-300 ease-in-out underline-offset-4`}
                        onClick={() => useShowEmployerHelp(true)}>
                            Employers
                        </h4>
                        <h4 className={`cursor-pointer ${!showEmployerHelp ? "text-black underline" : "text-gray-400"}
                        transition duration-300 ease-in-out underline-offset-4`}
                        onClick={() => useShowEmployerHelp(false)}>
                            Job Seekers
                        </h4>
                    </nav>

                    <div className="grid grid-cols-3 gap-6 w-2/3 mx-auto mt-6">
                        {
                            helpArticles.map((article, idx) => <HelpArticleCard helpArticle={article} key={idx}/>)
                        }
                    </div>
                </div>
                <div className="text-center mt-16 border-t-gray-200 border-t-2">
                    <h3 className="text-xl p-4">Featured Articles</h3>
                    <div className="flex flex-col space-y-4 justify-center align-middle">
                        <div className="flex w-1/8 mx-auto space-x-6 border border-b-2 border-b-black px-12 py-4
                        cursor-pointer hover:shadow-lg transition ease-in-out duration-300">
                            <h3>Featured Article 1</h3>
                            <p>&rarr;</p>
                        </div>
                        <div className="flex w-1/8 mx-auto space-x-6 border border-b-2 border-b-black px-12 py-4
                        cursor-pointer hover:shadow-lg transition ease-in-out duration-300">
                            <h3>Featured Article 2</h3>
                            <p>&rarr;</p>
                        </div>
                        <div className="flex w-1/8 mx-auto space-x-6 border border-b-2 border-b-black px-12 py-4
                        cursor-pointer hover:shadow-lg transition ease-in-out duration-300">
                            <h3>Featured Article 3</h3>
                            <p>&rarr;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}