type HelpArticleTags = "Account" | "Search" | "Payment"
export type HelpArticle = {
    tag: HelpArticleTags,
    title: string,
    articleLink: string
}

export type FeaturedArticle = {
    title: string
    articleID: string
}

export const SeekerHelpArticles: HelpArticle[] = [
    {
        tag: "Account",
        title: "Profile Details",
        articleLink: ""
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        articleLink: ""
    },
    {
        tag: "Search",
        title: "Keywords",
        articleLink: ""
    },
    {
        tag: "Account",
        title: "Profile Details",
        articleLink: ""
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        articleLink: ""
    },
    {
        tag: "Search",
        title: "Keywords",
        articleLink: ""
    },
    {
        tag: "Account",
        title: "Profile Details",
        articleLink: ""
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        articleLink: ""
    },
    {
        tag: "Search",
        title: "Keywords",
        articleLink: ""
    },
]

export const EmployerHelpArticles: HelpArticle[] = [
    {
        tag: "Account",
        title: "How to Post a Job",
        articleLink: ""
    },
    {
        tag: "Payment",
        title: "Paying for Job Posts",
        articleLink: ""
    },
    {
        tag: "Search",
        title: "Search for Employees",
        articleLink: ""
    },
    {
        tag: "Account",
        title: "Make a Company Account",
        articleLink: ""
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        articleLink: ""
    },
    {
        tag: "Search",
        title: "Keywords",
        articleLink: ""
    },
    {
        tag: "Account",
        title: "Profile Details",
        articleLink: ""
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        articleLink: ""
    },
    {
        tag: "Search",
        title: "Keywords",
        articleLink: ""
    },
]

export const FeaturedArticles: FeaturedArticle[] = [
    {
        title: "Reset Password",
        articleID: "00000"
    },
    {
        title: "How to get a Refund",
        articleID: "00000"
    },
    {
        title: "Resume Help",
        articleID: "00000"
    }
]

export const borderColors = {
    Account: "border-b-green-500",
    Search: "border-b-red-500",
    Payment: "border-b-blue-500"
}