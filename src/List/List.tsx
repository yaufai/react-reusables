import React, { ReactElement } from "react"

type Bullet = string|((index: number) => string)

type ListProps = {
    bullet?: Bullet,
    items: (string|ReactElement|JSX.Element)[]
}

function EvaluateBullet(bullet: Bullet): (index: number) => ReactElement {
    if (typeof bullet === 'string') {
        return (index) => <span style={{
            marginRight: 8
        }}>{bullet}</span>
    } else {
        return (index) => <span style={{
            marginRight: 8
        }}>{bullet(index)}</span>
    }
} 

export default function List(props: ListProps) {
    return <ul style={{
        paddingInlineStart: 0
    }}>{
        props.items.map((item, index) => {
            return <li style={{
                listStyle: props.bullet === undefined ? '' : 'none'
            }}>
                {
                    props.bullet === undefined
                    ? <span></span>
                    : EvaluateBullet(props.bullet)(index)
                }
                {item}
            </li>
        })
    }</ul>
}