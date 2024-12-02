
/*
    This Button component is to have more standardized styling!
    We have 3 main types
    A primary - which will have a blue background
    A secondary - which will have a blue border and white background
    A tertiary - which will be a squared button with a gray button
    All these have their main styling, but can still take a custom CSS style object if we want
    any modifications

    Buttons will almost ALWAYS have a function, which we take a function as one of its props
        This function can either take an eventhandle or take no arguments (might expand)
    
    Buttons will most of the time have text, but could potentially not if we wanted
    Buttons can also support an icon to be shown to the right of the text (might change)

    Buttons also have a fourth unstyled type
        This is in case we want all of our own custom styling, which is why 'type' is optional
*/

type ButtonProps = {
    style?: React.CSSProperties
    styleType?: "Primary" | "Secondary" | "Tertiary"
    function: ((...args: any[]) => void)
    text?: string
    title?: string
    icon?: React.ElementType
    className?: string;
    disabled: boolean;
    usesLoadingBar?: boolean;
    type?: "button" | "reset" | "submit";
}
export default function Button(props: ButtonProps){
    //If we did enter in a type, return one of three
    if(props.styleType){
        switch(props.styleType){
            case "Primary":
                return(
                    <button style={props.style}
                    title={props.title && props.title}
                    className={`transition border rounded-3xl bg-blue-700 text-white px-8 py-2 mt-6
                                duration-300 ease-in-out
                                ${props.className} ${props.disabled ? "cursor-not-allowed" : 
                                    "hover:bg-transparent hover:border-blue-700 hover:text-blue-700"}`}
                    onClick={props.function}
                    disabled={props.disabled}
                    type={props.type ? props.type : "button"}
                    >
                        <span className="flex align-middle justify-center">
                            {props.text} {props.icon && <props.icon />}
                        </span>
                    </button>
                )
            case "Secondary":
                return(
                    <button style={props.style}
                    title={props.title && props.title}
                    className={`px-8 py-2 border-2 border-blue-700 rounded-3xl
                                duration-300 ease-in-out
                                ${props.className} ${props.disabled ? "cursor-not-allowed" : 
                                    "hover:bg-transparent hover:bg-blue-700 hover:text-transparent"}`}
                    onClick={props.function}
                    disabled={props.disabled}
                    type={props.type ? props.type : "button"}
                    >
                        <span className="flex align-middle justify-center">
                            {props.text} {props.icon && <props.icon />}
                        </span>
                    </button>
                )
            case "Tertiary":
                return(
                    <button style={props.style}
                    title={props.title && props.title}
                    className={`px-8 py-2 bg-slate-300 duration-300 ease-in-out
                                ${props.className} ${props.disabled ? "cursor-not-allowed" : "hover:g-slate-400"}`}
                    onClick={props.function}
                    disabled={props.disabled}
                    type={props.type ? props.type : "button"}
                    >
                        <span className="flex align-middle justify-center">
                            {props.text} {props.icon && <props.icon />}
                        </span>
                    </button>
                )
            }
        }
        //If we did not take a button 'type' argument, return an unstyled button
        else{            
            return(
                <button style={props.style}
                title={props.title && props.title}
                onClick={props.function}
                disabled={props.disabled}
                type={props.type ? props.type : "button"}
                className={`${props.className}`}
                >
                    <span className="flex align-middle">
                        {props.text} {props.icon && <props.icon />}
                    </span>
                </button>
            )
    }
}