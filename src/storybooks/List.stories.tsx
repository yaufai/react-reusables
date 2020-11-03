import React, { Fragment } from 'react'
import { List } from '../index'

export default { title: 'List' }

const items = [
    'Design',
    'Development',
    'Test',
    'Release'
]

export const Standard = () => {
    return <Fragment>
        <h1>Progress</h1>
        <List bullet='✔️' items={[items[0], items[1]]} />
        <List bullet='❌' items={[items[2], items[3]]} />

        <h1>Development Process</h1>
        <List bullet={(index) => <span>{index + 1}.</span>} items={items}/>
    </Fragment>
}
