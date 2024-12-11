type HelpArticleTags = "Account" | "Search" | "Payment"
export type HelpArticle = {
    tag: HelpArticleTags,
    title: string,
    id: string
}

export type FeaturedArticle = {
    title: string
    id: string
}

export const SeekerHelpArticles: HelpArticle[] = [
    {
        tag: "Account",
        title: "Profile Details",
        id: "1"
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        id: "2"
    },
    {
        tag: "Search",
        title: "Keywords",
        id: "3"
    },
    {
        tag: "Account",
        title: "Profile Details",
        id: "4"
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        id: "5"
    },
    {
        tag: "Search",
        title: "Keywords",
        id: "6"
    },
    {
        tag: "Account",
        title: "Profile Details",
        id: "7"
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        id: "8"
    },
    {
        tag: "Search",
        title: "Keywords",
        id: "9"
    },
]

export const EmployerHelpArticles: HelpArticle[] = [
    {
        tag: "Account",
        title: "How to Post a Job",
        id: "x1"
    },
    {
        tag: "Payment",
        title: "Paying for Job Posts",
        id: "x2"
    },
    {
        tag: "Search",
        title: "Search for Employees",
        id: "x3"
    },
    {
        tag: "Account",
        title: "Make a Company Account",
        id: "x4"
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        id: "x5"
    },
    {
        tag: "Search",
        title: "Keywords",
        id: "x6"
    },
    {
        tag: "Account",
        title: "Profile Details",
        id: "x7"
    },
    {
        tag: "Payment",
        title: "Refund Policy",
        id: "x8"
    },
    {
        tag: "Search",
        title: "Keywords",
        id: "x9"
    },
]

export const FeaturedArticles: FeaturedArticle[] = [
    {
        title: "Reset Password",
        id: "1"
    },
    {
        title: "How to get a Refund",
        id: "2"
    },
    {
        title: "Resume Help",
        id: "3"
    }
]

export const borderColors = {
    Account: "border-b-green-500",
    Search: "border-b-red-500",
    Payment: "border-b-blue-500"
}