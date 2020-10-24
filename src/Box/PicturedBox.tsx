import React, { ReactNode } from "react";

export type PicturedBoxProps = {
    picture    : string,
    pictureAlt?: string
    children   : ReactNode,
    imageWidth?: string|number
}

export default function PicturedBox(props: PicturedBoxProps) {
    let pictureAlt = props.pictureAlt || ''
    let imageWidth = props.imageWidth || '35%'
    return <div　style={{
        border : '1px solid black',
        display: 'grid',
        width  : '80%',
        marginLeft: '10%',
        marginRight: '10%',
        gridTemplateColumns: `${imageWidth} 1fr`
    }}>
        <div style={{
            display: 'flex',
            gridRow: 1,
            justifyContent: 'center',
            gridColumn: 1
        }}>
            <img
                width='100%'
                src={props.picture}
                alt={pictureAlt}
            />
        </div>
        <div style={{
            gridRow: 1,
            gridColumn: 2,
            marginLeft: 16,
            paddingTop: 16,
            paddingBottom: 16
        }}>
            {props.children}
        </div>
    </div>
}