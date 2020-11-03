import React, { ReactNode } from 'react'

type InlineProps = {
    code?: string,
    children?: ReactNode
}

export default function Inline(props: InlineProps) {
    let content = props.children || props.code || ''
    return (
        <span style={{
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 5,
            backgroundColor: '#eeeeee',
            fontFamily     : 'monospace'
        }}>
            {content}
        </span>
    )
}
