type HelpArticleTags = "Account" | "Search" | "Payment"
export type HelpArticle = {
    tag: HelpArticleTags,
    title: string,
    articleLink: string
}

export const helpArticles: HelpArticle[] = [
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

export const borderColors = {
    Account: "border-b-green-500",
    Search: "border-b-red-500",
    Payment: "border-b-blue-500"
}