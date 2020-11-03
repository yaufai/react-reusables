import React, { Fragment } from 'react'
import { HeaderBox } from '../index'

export default { title: 'Header Boxes' }

const title = 'Key qualifications'
const body = <ul>
    <li>2+ year experience of React</li>
    <li>Contributions to OSS are definitely plus</li>
</ul>

export const Standard = () => {
    return <Fragment>
        <HeaderBox title={title}>
            {body}
        </HeaderBox>
        
        <HeaderBox title={title} color='blue'>
            {body}
        </HeaderBox>

        <HeaderBox title={title} color='green'>
            {body}
        </HeaderBox>

        <HeaderBox title={title} color='orange'>
            {body}
        </HeaderBox>

        <HeaderBox title={title} color='red'>
            {body}
        </HeaderBox>
    </Fragment>

}