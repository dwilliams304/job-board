
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
    styleType?: "Primary" | "Secondary" | "Tertiary"
    function: ((...args: any[]) => void)
    text?: string
    title?: string
    icon?: React.ElementType
    className?: string;
    disabled: boolean;
    usesLoadingBar?: boolean;
    type?: "button" | "reset" | "submit";
    showsLoadingBar?: boolean;
    loadingText?: string;
}
export default function Button(props: ButtonProps){
    return(
        <button
        title={props.title && props.title}
        className={
            `transition px-8 py-2 duration-300 ease-in-out ${props.className}

            ${props.styleType === "Primary" && `transition border rounded-3xl bg-blue-700 text-white
                ${props.disabled ? "cursor-not-allowed" : "hover:bg-transparent hover:border-blue-700 hover:text-blue-700"}`
            }

            ${props.styleType === "Secondary" && `border-2 border-blue-700 rounded-3xl
                ${props.disabled ? "cursor-not-allowed" : "hover:bg-blue-700 hover:text-white"}`
            }

            ${props.styleType === "Tertiary" && `bg-slate-300
                ${props.disabled ? "cursor-not-allowed" : "hover:bg-slate-400"}`
            }
            `
        }
        onClick={props.function}
        disabled={props.disabled}
        type={props.type ? props.type : "button"}
        >
            { 
            props.showsLoadingBar && props.disabled ?
                <span className="flex justify-center align-middle w-full h-full">
                    <span className="pr-2">{props.loadingText ? props.loadingText : "Loading..."}</span>
                    <svg aria-hidden="true" className="w-6 h-6 text-black animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </span>
            :
                <span className="flex align-middle justify-center">
                    {props.text} {props.icon && <props.icon />}
                </span>
            }
        </button>
    )
}