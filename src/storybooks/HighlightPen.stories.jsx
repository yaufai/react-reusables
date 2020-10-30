import React, { Fragment } from 'react'
import HighlightPen from '../HighlightPen/HighlightPen'

export default { title: 'HighlightPen' }

export const Standard = () => {
    return <Fragment>
        <h1>Default</h1>
        <p><HighlightPen>Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>

        <h1>Height</h1>
        <p>height 10: <HighlightPen height={10}>Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <p>height 20: <HighlightPen height={20}>Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <p>height 50: <HighlightPen height={50}>Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <p>height 75: <HighlightPen height={75}>Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <p>height 100: <HighlightPen height={100}>Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>

        <h1>Bold: false</h1>
        <p><HighlightPen bold={false}>Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>

        <h1>Colors</h1>
        <p><HighlightPen color="lightgreen">Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <p><HighlightPen color="pink">Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <p><HighlightPen color="lightblue">Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <h1>Tags</h1>
        <p>mark: <HighlightPen tag="mark">Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <p>strong: <HighlightPen tag="strong">Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <p>b: <HighlightPen tag="b">Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
        <p>span: <HighlightPen tag="span">Lorem ipsum</HighlightPen> dolor sit amet, consectetur ...</p>
    </Fragment>
}
