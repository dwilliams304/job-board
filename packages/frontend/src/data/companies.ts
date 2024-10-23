export type Company = {
    companyName: string
    companyLogo: string
    companyID: number
}

export function FetchCompany(_companyID: number): Company {
    let val: Company = Companies[0];
    for(let i = 0; i < Companies.length; i++){
        if(Companies[i].companyID === _companyID){
            val = Companies[i];
            break;
        }
    }
    return val;
}

export const Companies: Company[] = [
    {
        companyName: "Mike Jones",
        companyLogo: "",
        companyID: 12122
    },
    {
        companyName: "Terry Jones",
        companyLogo: "",
        companyID: 19995
    },
    {
        companyName: "Berry Jones",
        companyLogo: "",
        companyID: 20012
    },
    {
        companyName: "Rike Jones",
        companyLogo: "",
        companyID: 90210
    },
]