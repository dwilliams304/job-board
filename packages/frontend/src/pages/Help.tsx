import { HelpArticle } from "../components"
import { helpArticles } from "../data/helparticles"

export default function Help(){
    return(
        <section className="flex-grow">
            <div>
                <div className="w-full text-center py-20 bg-blue-600">
                    <h2 className="p-8 text-3xl text-white">How can we help you?</h2>
                    <input
                        type="text"
                        placeholder="Enter your question here"
                        className="rounded-xl py-2 pl-4 w-1/3 border border-solid border-black"
                    />
                </div>

                <div className="w-full mt-8 justify-center align-middle flex flex-col">
                    <nav className="text-center justify-center flex space-x-6 text-xl border-b-2 border-gray-200">
                        <h4 className="cursor-pointer text-gray-400">Employers</h4>
                        <h4 className="cursor-pointer">Job Seekers</h4>
                    </nav>

                    <div className="flex justify-center align-middle mt-6">
                        {
                            helpArticles.map((article, idx) => <HelpArticle helpArticle={article} key={idx}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}