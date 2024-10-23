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

// function Wait(ms: number, func: (arg0?: boolean) => void) {
//     setTimeout(() => {
//         func();
//     }, ms);
// }



export { 
    ScrollToTop,
    GetRandomNumber,
    // Wait
}