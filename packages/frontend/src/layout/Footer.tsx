import DummyLogo from "../assets/react.svg";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../helpers";

export default function Footer(){

    return(
        <footer className="bg-gradient-to-b from-blue-700 to-blue-900 mt-8">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img src={DummyLogo} className="h-8 me-3" alt="Logo" />
                            <Link to="/" onClick={() => ScrollToTop(true)} className="self-center text-2xl font-semibold whitespace-nowrap text-white">TypeScript Job Board</Link>
                        </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                        <ul className="text-gray-300 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Item 1</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Item 2</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
                        <ul className="text-gray-300 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Item 1</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Item 2</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                        <ul className="text-gray-300 font-medium">
                            <li className="mb-4">
                                <Link onClick={() => ScrollToTop(true)} to="/privacy" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link onClick={() => ScrollToTop(true)} to="/terms" className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-200 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-300 sm:text-center">© 2024 All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <p className="text-sm text-gray-300">Social icons go here.</p>
                </div>
            </div>
            </div>
        </footer>
    )
}