
/*
    The Footer currently only takes in the footerLinks array of objects from a separate file
    We will likely want to switch this to take that a prop, to instead make this a lot more
    flexible

    This is a static footer otherwise, which displays links/other things as a navigation map
*/

import DummyLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { FooterLink } from "../";
import { footerLinks } from "../../data/footerlinks";
import { ScrollToTop } from "../../utils";

export default function Footer(){
    const data = footerLinks;

    return(
        <footer className="bg-gradient-to-b from-blue-700 to-blue-900 mt-8">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <span className="flex cursor-pointer" onClick={() => ScrollToTop(true)}>
                            <img src={DummyLogo} className="h-8 me-3" alt="Logo" />
                            <Link to="/" className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                TypeScript Job Board
                            </Link>
                        </span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                        <ul className="text-gray-300 font-medium space-y-2">
                            {
                                data.resources.map((link, idx) => <FooterLink linkObject={link} key={idx}/>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Employers</h2>
                        <ul className="text-gray-300 font-medium space-y-2">
                            {
                                data.employers.map((link, idx) => <FooterLink linkObject={link} key={idx}/>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Job Seekers</h2>
                        <ul className="text-gray-300 font-medium space-y-2">
                            {
                                data.jobSeekers.map((link, idx) => <FooterLink linkObject={link} key={idx}/>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                        <ul className="text-gray-300 font-medium space-y-2">
                            {
                                data.legal.map((link, idx) => <FooterLink linkObject={link} key={idx}/>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-200 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-300 sm:text-center">© 2024 All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-2">
                    <p className="text-sm text-gray-300 cursor-pointer hover:underline">LinkedIn</p>
                    <p className="text-sm text-gray-300 cursor-pointer hover:underline">Instagram</p>
                    <p className="text-sm text-gray-300 cursor-pointer hover:underline">Facebook</p>
                    <p className="text-sm text-gray-300 cursor-pointer hover:underline">X</p>
                </div>
            </div>
            </div>
        </footer>
    )
}