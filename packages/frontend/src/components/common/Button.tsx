type ButtonProps = {
    style?: React.CSSProperties
    type?: "Primary" | "Secondary" | "Tertiary"
    function: () => void
    text?: string
    icon?: React.ElementType
}

export default function Button(props: ButtonProps){
    if(props.type){
        switch(props.type){
            case "Primary":
                return(
                    <button style={props.style}
                    className="transition border rounded-3xl bg-blue-700 text-white px-8 py-2 mt-6
                    hover:bg-white hover:border-blue-700 hover:text-blue-700 duration-300 ease-in-out"
                    onClick={props.function}>
                        <span className="flex align-middle">
                            {props.text} {props.icon && <props.icon />}
                        </span>
                    </button>
                )
            case "Secondary":
                return(
                    <button style={props.style}
                    className="px-8 py-2 border-2 border-blue-700 rounded-3xl
                    hover:bg-blue-700 hover:text-white duration-300 ease-in-out"
                    onClick={props.function}>
                        <span className="flex align-middle">
                            {props.text} {props.icon && <props.icon />}
                        </span>
                    </button>
                )
            case "Tertiary":
                return(
                    <button style={props.style}
                    className="px-8 py-2 bg-slate-300 hover:bg-slate-400 duration-300 ease-in-out"
                    onClick={props.function}>
                        <span className="flex align-middle">
                            {props.text} {props.icon && <props.icon />}
                        </span>
                    </button>
                )
            }
        }

        else{            
            return(
                <button style={props.style}
                onClick={props.function}>
                    <span className="flex align-middle">
                        {props.text} {props.icon && <props.icon />}
                    </span>
                </button>
            )
    }
}