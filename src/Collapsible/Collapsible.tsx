import React, { ReactNode, useState } from "react";

type CollapsibleProps = {
    text: string
    textClose?: string
    children  : ReactNode,
    color?    : string
}

export default function Collapsible(props: CollapsibleProps) {
    let [isOpen, setIsOpen] = useState(false)
    let textClose = props.textClose === undefined ? props.text : props.textClose
    let color = props.color || 'orange'

    return <div>
        <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
                backgroundColor: color,
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 18,
                paddingRight: 18,
                borderRadius: 9,
                color:'white',
                fontWeight: 'bold',
                border: 0,
                marginBottom: 8,
                cursor: "pointer"
            }}
        >
            {isOpen ? textClose : props.text}
        </button>
        <div style={{
            display: isOpen ? "block" : "none",
            overflow: "hidden"
        }}>
            {props.children}
        </div>
    </div>
}