import React, { useState, useEffect } from 'react'
import TOCItem from './TOCItem'

type ItemType = "h1"
              | "h2"
              | "h3"
              | "h4"
              | "h5"
              | "h6"

type IntermediateItem = {
    position: number,
    text    : string,
    type    : ItemType,
    element : HTMLElement,
    id      : string
}

function convertToIntermediateItems(itemType: ItemType, element: any): IntermediateItem {
    if (!element.id) {
        element.id = `TOCFlag${Math.random()}`
    }
    
    return {
        position: element.getBoundingClientRect().top,
        text    : element.innerText,
        type    : itemType,
        element : element,
        id      : element.id
    }
}

function getIntermediateElements(itemType: ItemType, tagName: string): IntermediateItem[] {
    return Array.from(document.getElementsByTagName(tagName))
        .map((v) => convertToIntermediateItems(itemType, v))
}

const p = {
    h1: (text: string, id: string) => <TOCItem text={text} indent={1} targetID={id} />,
    h2: (text: string, id: string) => <TOCItem text={text} indent={2} targetID={id} />,
    h3: (text: string, id: string) => <TOCItem text={text} indent={3} targetID={id} />,
    h4: (text: string, id: string) => <TOCItem text={text} indent={4} targetID={id} />,
    h5: (text: string, id: string) => <TOCItem text={text} indent={5} targetID={id} />,
    h6: (text: string, id: string) => <TOCItem text={text} indent={6} targetID={id} />,
}


export default function TOC(props: any) {
    let [items, setItems] = useState([] as IntermediateItem[])
    useEffect(() => {
        setItems(getIntermediateElements("h1", "h1")
        .concat(getIntermediateElements("h2", "h2"))
        .concat(getIntermediateElements("h3", "h3"))
        .concat(getIntermediateElements("h4", "h4"))
        .concat(getIntermediateElements("h5", "h5"))
        .concat(getIntermediateElements("h6", "h6"))
        )
    })
    return (<div
        style={{
            border: '1px solid black',
            paddingLeft: 10
        }}
    >{
        items.sort((a, b) => a.position - b.position)
            .map(item => {
                return p[item.type](item.text, item.id)
            })
    }</div>)
}
