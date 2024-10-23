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



export { 
    ScrollToTop,
    GetRandomNumber,
    OpenNewTab
}