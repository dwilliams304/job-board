import { LocationType } from "../../types/Common";

function ScrollToTop(smooth: boolean){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth? "smooth": "instant"
    })
}

function GetRandomNumber(max: number): number{
    return Math.floor(Math.random() * max);
}


function OpenNewTab(url: string){
    window.open(url, '_blank', 'rel=noopener noreferrer')
}


function JobLocatingStringBuilder(
    location: LocationType
): string{

    return `
            ${location.city && location.state ?
                `${location.city}, ${location.state} - ${location.country} `
                :
                `${location.country} `
            }
            (${location.locationType})
            `;
}


export { 
    ScrollToTop,
    GetRandomNumber,
    OpenNewTab,
    JobLocatingStringBuilder
}