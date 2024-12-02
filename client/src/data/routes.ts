import {
    JobBoard,
    Login,
    Signup,
    Profile,
    Help,
    HelpArticlePage,
    Terms,
    Privacy,
    NotFound,
    JobPage,
    CreateJobPost,
    CompanyPage,
    ContactPage
} from "../components/pages";

import { RichTextEditor } from "../components/common";


type Route = {
    path: string;
    protected: boolean;
    protectedRedirectPath?: string;
    pageElement: React.ElementType;
}


export const Routes: Route[] = [
    {
        path: "/",
        protected: false,
        pageElement: JobBoard
    },
    {
        path: "/job/:jobID",
        protected: false,
        pageElement: JobPage
    },
    {
        path: "/company/:companyID",
        protected: false,
        pageElement: CompanyPage
    },
    {
        path: "/login",
        protected: false,
        pageElement: Login
    },
    {
        path: "/signup",
        protected: false,
        pageElement: Signup
    },
    {
        path: "/profile",
        protected: true,
        pageElement: Profile
    },
    {
        path: "/help",
        protected: false,
        pageElement: Help
    },
    {
        path: "/help/:articleID",
        protected: false,
        pageElement: HelpArticlePage
    },
    {
        path: "/contact",
        protected: false,
        pageElement: ContactPage
    },


    {
        path: "/terms",
        protected: false,
        pageElement: Terms
    },
    {
        path: "/privacy",
        protected: false,
        pageElement: Privacy
    },
    {
        path: "/*",
        protected: false,
        pageElement: NotFound
    },

    // {
    //     path: "/dev/createjobpost",
    //     protected: false,
    //     pageElement: CreateJobPost
    // },
    // {
    //     path: "/dev/rte",
    //     protected: false,
    //     pageElement: RichTextEditor
    // }
]