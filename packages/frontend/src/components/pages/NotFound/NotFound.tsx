import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <section className="flex-grow text-center align-center">
            <div className="flex flex-col mt-20 space-y-4 items-center">
                <h2 className="text-xl">Page not found.</h2>
                <h3>The page you you're looking for doesn't seem to exist.</h3>
                <p>Check out our <Link to="/help" className="text-blue-800 underline">Help center</Link> for more information.</p>
                <Link to="/" className="py-2 px-4 rounded-xl border border-solid border-blue-500 transition ease-in-out duration-300
                hover:bg-blue-200">
                    Back to home
                </Link>
            </div>
        </section>
    )
}