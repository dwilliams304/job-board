
/*
    The RichTextEditor component is what allows companies/site admins make
    a description/webpage. Currently the features are fairly limited and
    not fully complete but currently this supports:
        -Bolding, italicizing, underlining text
        -Creating a list component
        -Creating a hyperlink
    
    This is primarily going to be used for companies to make a full job 
    description for any of their job posts, but will eventually be 
    implemented so that a site admin could create help articles too.
*/

import { useState, useRef, useEffect } from "react";
import Button from "./Button";

const activeColor = "#94A3B8";
const inActiveColor = "#FFFFFF";
const navButtonPadding = "8px 12px";

const initialStyleState = {
    bold: false,
    italic: false,
    underline: false,
    list: false,
    link: false,
}

export default function RichTextEditor(){
    const rte = useRef<HTMLDivElement>(null);
    const [activeStyles, setActiveStyles] = useState(initialStyleState)

    const formatText = (cmd: string, value: string | undefined = undefined) => {
        document.execCommand(cmd, false, value);

        

        updateActiveStyles();
    }

    const updateActiveStyles = () => {
        const selection = window.getSelection();
        if(!selection || selection.rangeCount === 0) return;

        setActiveStyles({
            bold: document.queryCommandState('bold'),
            italic: document.queryCommandState('italic'),
            underline: document.queryCommandState('underline'),
            list: document.queryCommandState('insertUnorderedList'),
            link: document.queryCommandState('createLink'),
        });
    }

    const listenForKBShortcut = (e: KeyboardEvent) => {
        if(e.ctrlKey && e.shiftKey && e.key === 'L') {
            e.preventDefault(); 
            formatText('insertUnorderedList'); 
        }
    };

    useEffect(() => {
        const editor = rte.current;
        if(editor){
            editor.addEventListener('mouseup', updateActiveStyles);
            editor.addEventListener('keyup', updateActiveStyles);
            editor.addEventListener('keydown', listenForKBShortcut);
        }

        return () => {
            if(editor){
                editor.removeEventListener('mouseup', updateActiveStyles);
                editor.removeEventListener('keyup', updateActiveStyles);
                editor.removeEventListener('keydown', listenForKBShortcut);
            }
        }
    }, [])

    return(
        <div className="flex-grow w-full h-full text-center rte">
            {/* <h1 className="text-2xl">Rich Text Editor</h1> */}
            <div className="border shadow-md border-slate-400 w-full mx-auto my-12 bg-white">
                <div>
                    <nav className="border-b border-black text-left">
                        <Button
                            function={() => formatText('bold')}
                            text="Bold"
                            title="Bold (Ctrl+B)"
                            style={{fontWeight: "bold", 
                                backgroundColor: `${activeStyles.bold ? activeColor : inActiveColor}`,
                                padding: navButtonPadding
                            }}
                            disabled={false}
                        />
                        <Button
                            function={() => formatText('italic')}
                            text="Italic"
                            title="Italic (Ctrl+I)"
                            style={{fontStyle: "italic", 
                                backgroundColor: `${activeStyles.italic ? activeColor : inActiveColor}`,
                                padding: navButtonPadding
                            }}
                            disabled={false}
                        />
                        <Button
                            function={() => formatText('underline')}
                            text="Underline"
                            title="Underline (Ctrl+U)"
                            style={{textDecoration: "underline", 
                                backgroundColor: `${activeStyles.underline ? activeColor : inActiveColor}`,
                                padding: navButtonPadding
                            }}
                            disabled={false}
                        />
                        <Button
                            function={() => formatText('insertUnorderedList')}
                            text="List"
                            title="Make List (Ctrl+Shift+L)"
                            style={{marginLeft: "3rem", 
                                backgroundColor: `${activeStyles.list ? activeColor : inActiveColor}`,
                                padding: navButtonPadding
                            }}
                            disabled={false}
                        />
                        <Button
                            function={() => {
                                const url = prompt('Enter the link URL');
                                if(url) formatText('createLink', url);
                            }}
                            text="Link"
                            title="Create Link (Ctrl+Shift+K)"
                            style={{marginLeft: "3rem", 
                                backgroundColor: `${activeStyles.link ? activeColor : inActiveColor}`,
                                padding: navButtonPadding
                            }}
                            disabled={false}
                        />
                    </nav>
                    <div
                        className="w-full min-w-full h-42 text-left px-4 py-2 overflow-y-auto
                        min-h-[250px] max-h-[500px]"
                        ref={rte}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                    />
                </div>
            </div>
        </div>
    )
}