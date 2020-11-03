import React, { Fragment } from 'react'
import Inline from '../Code/Inline'

export default { title: 'Code' }

export const Standard = () => {
    return <Fragment>
        <h1>How to install <Inline code="ReactJS" /></h1>
        <center><Inline>npm install react react-dom</Inline></center>
        If you also need <Inline code="TypeScript" />, run this:
        <center><Inline>npm install --save-dev @types/react @types/react-dom</Inline></center>
    </Fragment>
}
