import React from 'react'

type TOCItemProps = {
    text: string,
    indent: number,
    targetID: string
}

export default function TOCItem(props: TOCItemProps) {
    let indentSize = 15
    return (<div
        style={{
            marginLeft: indentSize * (props.indent - 1)
        }}
    >
        <a href={`#${props.targetID}`}>{props.text}</a>
    </div>)
}
