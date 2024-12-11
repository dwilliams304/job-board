
/*
    The Help page will display various Help articles that the user can click on
    in case they need general assistance/have general questions that can be answered
        (i.e: resetting passwords, how to doaccount recovery, etc...)

    This will have 3 'sections'
    The header
        -The user will (eventually) be able to search up questions/articles
    
    The main help articles:    
        -The employer specific help articles
        -The job seeker specific help articles

    The featured help articles:
        -This will display 3 primary help articles that many users would often search up
*/

import { useState } from "react";
import { SeekerHelpArticles, EmployerHelpArticles, FeaturedArticles } from "../../../data/helparticles";
import HelpArticleCard from "./HelpArticleCard";
import FeaturedArticleCard from "./FeaturedArticleCard";

export default function Help(){
    const [showEmployerHelp, useShowEmployerHelp] = useState(false);

    return(
        <section className="flex-grow">
            <div>
                {/* Header area w/ search bar */}
                <div className="w-full text-center md:py-20 py-10 bg-gradient-to-t from-blue-900 to-blue-700 shadow-md">
                    <h2 className="p-8 text-3xl text-white font-light">How can we help you?</h2>
                    <input
                        type="text"
                        placeholder="Enter your question here"
                        className="rounded-xl py-2 pl-4 md:w-1/3 border border-solid border-black"
                    />
                </div>


                {/* Navigation bar, filtering between employer and employee articles */}
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

                    {/* Actual help articles, which display dynamically */}
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 p-2 lg:gap-6 lg:w-2/3 mx-auto mt-6">
                        {
                            showEmployerHelp ?
                            EmployerHelpArticles.map((article) => (
                                <HelpArticleCard
                                    key={article.id}
                                    borderColor={article.tag}
                                    helpArticle={article}
                                />
                            ))
                            :
                            SeekerHelpArticles.map((article) => (
                                <HelpArticleCard 
                                    key={article.id}
                                    borderColor={article.tag}
                                    helpArticle={article} 
                                />
                            ))
                        }
                    </div>
                </div>

                {/* Featured help articles */}
                <div className="text-center mt-16 border-t-gray-200 border-t-2">
                    <h3 className="text-xl p-4">Featured Articles</h3>
                    <div className="flex flex-col space-y-4 justify-center align-middle">
                        {
                            FeaturedArticles.map((article) => (
                                <FeaturedArticleCard 
                                    key={article.id}
                                    title={article.title}
                                    id={article.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}