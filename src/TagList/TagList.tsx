import React, { ReactElement } from "react";
import { Tag } from "./Tag";

type TagListProps = {
    prefix? : string,
    tags    : Tag[],
    display?: (tag: Tag, key: string) => ReactElement
}

const defaultDisplayer: (tag: Tag, key: string) => ReactElement = (tag, key) => {
    let styleBase = {
        padding: '4px 6px',
        margin : '4px',
        background: '#eeeeee',
        borderRadius: '8px',
        color: 'black'
    }

    if (tag.url === undefined) {
        return <span key={key} style={styleBase}>{tag.label}</span>
    } else {
        return <a
            key={key}
            href={tag.url}
            style={{
                ...styleBase,
                textDecoration: 'none'
            }}>
                {tag.label}
            </a>
    }
}

export default function TagList(props: TagListProps) {
    return <div style={{marginTop: 14, marginBottom: 14}}>
        {props.tags.map(tag => defaultDisplayer(tag, tag.label))}
    </div>
}