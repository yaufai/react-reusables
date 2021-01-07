import React, { Fragment } from 'react'
import { TitledBox } from '../index'
import { LoremIpsum, LoremIpsumAuthor } from './utils'

export default { title: 'Titled Boxes' }

const title = LoremIpsumAuthor
const body = <p>{LoremIpsum}</p>

export const Standard = () => {
    return <Fragment>
        <TitledBox title={title}>
            {body}
        </TitledBox>
        
        <TitledBox title={title} color='blue'>
            {body}
        </TitledBox>

        <TitledBox title={title} color='green'>
            {body}
        </TitledBox>

        <TitledBox title={title} color='orange'>
            {body}
        </TitledBox>

        <TitledBox title={title} color='red'>
            {body}
        </TitledBox>
    </Fragment>

}