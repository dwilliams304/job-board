import { useState, useRef, useEffect, act } from "react";
import Button from "./Button";

const activeColor = "#E5E7EB";
const inActiveColor = "#FFFFFF";

export default function RichTextEditor(){
    const rte = useRef<HTMLDivElement>(null);
    const [activeStyles, setActiveStyles] = useState({
        header: false,
        bold: false,
        italic: false,
        underline: false,
        list: false
    })

    const formatText = (cmd: string, value: string | undefined = undefined) => {
        document.execCommand(cmd, false, value);
        updateActiveStyles();
    }

    const updateActiveStyles = () => {
        const selection = window.getSelection();
        if(!selection || selection.rangeCount === 0) return;

        const parentElement = selection.anchorNode?.parentElement;

        setActiveStyles({
            bold: document.queryCommandState('bold'),
            italic: document.queryCommandState('italic'),
            underline: document.queryCommandState('underline'),
            header: parentElement?.tagName === 'H2',
            list: document.queryCommandState('insertUnorderedList'),
        });
    }

    useEffect(() => {
        const editor = rte.current;
        if(editor){
            editor.addEventListener('mouseup', updateActiveStyles);
            editor.addEventListener('keyup', updateActiveStyles);
        }

        return () => {
            if(editor){
                editor.removeEventListener('mouseup', updateActiveStyles);
                editor.removeEventListener('keyup', updateActiveStyles);
            }
        }
    }, [])

    return(
        <div className="flex-grow w-full h-full text-center">
            <h1 className="text-2xl">Rich Text Editor</h1>
            <div className="border border-gray-300 w-1/2 mx-auto my-12">
                <div>
                    <nav className="border-b border-black">
                        <Button
                            function={() => formatText('formatBlock', 'h2')}
                            text="Header"
                            style={{marginRight: "3rem", 
                                backgroundColor: `${activeStyles.header ? activeColor : inActiveColor}`,
                                padding: "8px 12px"
                            }}
                        />
                        <Button
                            function={() => formatText('bold')}
                            text="Bold"
                            style={{fontWeight: "bold", 
                                backgroundColor: `${activeStyles.bold ? activeColor : inActiveColor}`,
                                padding: "8px 12px"
                            }}
                        />
                        <Button
                            function={() => formatText('italic')}
                            text="Italic"
                            style={{fontStyle: "italic", 
                                backgroundColor: `${activeStyles.italic ? activeColor : inActiveColor}`,
                                padding: "8px 12px"
                            }}
                        />
                        <Button
                            function={() => formatText('underline')}
                            text="Underline"
                            style={{textDecoration: "underline", 
                                backgroundColor: `${activeStyles.underline ? activeColor : inActiveColor}`,
                                padding: "8px 12px"
                            }}
                        />
                        <Button
                            function={() => formatText('insertUnorderedList')}
                            text="List"
                            style={{marginLeft: "3rem", 
                                backgroundColor: `${activeStyles.list ? activeColor : inActiveColor}`,
                                padding: "8px 12px"
                            }}
                        />
                    </nav>
                    <div
                        className="w-full h-96 resize-none text-left px-4 py-2 list-disc"
                        ref={rte}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                    />
                </div>
            </div>
        </div>
    )
}