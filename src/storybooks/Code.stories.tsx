import React, { Fragment } from 'react'
import { Center, Inline } from '../index'

export default { title: 'Code' }

export const Standard = () => {
    return <Fragment>
        <h1>How to install <Inline code="ReactJS" /></h1>
        <Center><Inline>npm install react react-dom</Inline></Center>
        If you also need <Inline code="TypeScript" />, run this:
        <Center><Inline>npm install --save-dev @types/react @types/react-dom</Inline></Center>
    </Fragment>
}
