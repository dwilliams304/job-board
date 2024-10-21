function ScrollToTop(smooth: boolean){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth? "smooth": "instant"
    })
}



export { ScrollToTop }