
/*
    Dropdowns are going to ALWAYS have a main starting title, taken as a prop

    IF options are links, then the dropdown will navigate them somewhere
    IF options are NOT links, we will likely want them to perform some kind of function
        Functions currently do not take any kinds of arguments (might change)
    
    Dropdowns will mostly have fairly standardized style, but we will take custom style
    as a prop if needed

    Dropdowns will also have different options taken as an array, these appear when the dropdown is active
        These options will have 'Content" (text, or maybe an image, etc...) which we take as a string
        If 'optionsAreLinks', the link will be where we are navigating, taken as a string
        If not, the function will be what happens when the option is clicked, taken as a function
*/

type DropdownProps = {
    title: string;
    optionsAreLinks: boolean;
    style?: React.CSSProperties;
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