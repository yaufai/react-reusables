import React, { ReactNode } from "react";
import { CSSProperties } from "react";

export type TitledComponentProps = {
    title: string,
    children : ReactNode,
    color?   : string
}

export type TitledBoxCSSProperties = {
    title: CSSProperties,
    body : CSSProperties
}

function mergeStyles(props: TitledComponentProps): TitledBoxCSSProperties {
    let color = props.color || 'gray'
    return {
        title: {
            paddingLeft : 8,
            paddingRight: 8,
            position    : 'absolute',
            left        : 20,
            top         : -10,
            backgroundColor: 'white',
            fontWeight  : 'bold',
            color       : props.color
        },
        body: {
            borderRadius: 8,
            border      : `1px solid ${color}`,
            position    : 'relative',
            padding     : 16,
            margin      : 16
        }
    }
}


export default function TitledBox(props: TitledComponentProps) {
    let css = mergeStyles(props)
    return <div style={css.body}>
        <span style={css.title}>{props.title}</span>
        {props.children}
    </div>
}