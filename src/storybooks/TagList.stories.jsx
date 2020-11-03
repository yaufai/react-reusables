import React, { Fragment } from 'react'
import TagList from '../TagList/TagList'

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
        <TagList tags={tags} />
        <TagList tags={tagsWithLink} />
    </Fragment>
}
