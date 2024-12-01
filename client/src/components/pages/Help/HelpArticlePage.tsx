import { HelpArticle } from "../../../data/helparticles";

export default function HelpArticlePage(props: HelpArticle){
    const date = new Date();
    return(
        <div className="flex-grow flex flex-col px-2 lg:px-20">
            <div className="flex flex-col p-2 lg:pt-24 lg:mb-6 border-b">
                <h2 className="text-3xl font-bold">Help Article Title</h2>
                <p className="italic">Tag: (Account)</p>
                <p className="italic">Last updated: {date.toDateString()}</p>
            </div>
            <div className="px-4">
                <div className="space-y-4">
                    <div>
                        <h2 className="font-bold text-xl">Help Article Details</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">Troubleshooting</h2>
                        <p>Before reaching out to a support specialist, ensure you've tried the following steps:</p>
                        <ul className="list-disc px-12">
                            <li>Troubleshooting step 1</li>
                            <li>Troubleshooting step 2</li>
                            <li>Troubleshooting step 3</li>
                            <li>Troubleshooting step 4</li>
                            <li>Troubleshooting step 5</li>
                        </ul>
                    </div>
                    <div className="bg-slate-200 p-4">
                        <h2 className="font-bold text-xl">F.A.Q</h2>
                        <ul className="list-disc px-12 space-y-4 divide-y-2 divide-slate-600">
                            <li>
                                <p className="font-semibold">Question Lorem ipsum dolor?</p>
                                <p>Answer goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <p className="font-semibold">Question Lorem ipsum dolor?</p>
                                <p>Answer goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <p className="font-semibold">Question Lorem ipsum dolor?</p>
                                <p>Answer goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <p className="font-semibold">Question Lorem ipsum dolor?</p>
                                <p>Answer goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <p className="font-semibold">Question Lorem ipsum dolor?</p>
                                <p>Answer goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <p className="font-semibold">Question Lorem ipsum dolor?</p>
                                <p>Answer goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}