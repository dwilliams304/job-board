type DropdownProps = {
    title: string
    optionsAreLinks: boolean
    options: [{
        content: string
        link?: string
        function?: () => void
    }]
}

export default function Dropdown(props: DropdownProps){
    return(
        <div className="relative inline-block">
            <button className="">
                {props.title}
            </button>
            <div>
                {
                    props.optionsAreLinks ?
                    props.options.map((option, idx) => (
                        <a key={idx} 
                        href={option.link} 
                        className="">
                            {option.content}
                        </a>
                    ))
                    :
                    props.options.map((option, idx) => (
                        <button key={idx}
                        onClick={option.function}
                        className="">
                            {option.content}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}