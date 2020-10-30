import React from "react";
import { ReactNode } from "react";

export type HighlightPenProps = {
    children: ReactNode,
    height? : number,
    color?  : string,
    bold?   : boolean,
    tag?    : "strong"|"b"|"span"|"mark"
}

export default function HighlightPen(props: HighlightPenProps) {
    let height = props.height || 50
    let color  = props.color  || "#FFF799"
    let bold   = props.bold === undefined ? true : props.bold
    let Tag    = props.tag    || "span"
    return <Tag style={{
        fontWeight: bold ? "bold" : "normal",
        background: `linear-gradient(transparent ${100 - height}%, ${color} ${100 - height}%)`
    }}>
        {props.children}
    </Tag>
}