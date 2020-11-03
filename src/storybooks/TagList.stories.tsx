import React, { Fragment } from 'react'
import { TagList } from '../index'

export default { title: 'TagList' }

const tags = [
    { id: "react", label: "React" },
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" }
]

const tagsWithLink = [
    { id: "highlightpen", label: "HighlightPen", url: "/?path=/story/highlightpen--standard" },
    { id: "quotation", label: "Quotation", url: "/?path=/story/quotations--standard" },
    { id: "titledbox", label: "TitledBox", url: "/?path=/story/titled-boxes--standard" }
]

export const Standard = () => {
    return <Fragment>
        <h1>Without links</h1>
        <TagList tags={tags} />
        <h1>With links</h1>
        <TagList tags={tagsWithLink} />
    </Fragment>
}
