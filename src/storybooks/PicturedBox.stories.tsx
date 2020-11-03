import React, { Fragment } from 'react'
import { List, PicturedBox } from '../index'

export default { title: 'Pictured Boxes' }

const picture = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
const body    = <div>
    <strong>3 Reasons Why I Choose React</strong>
    <List
        bullet='👍🏽'
        items={[
            'JSX: Simple, but powerful notation',
            'Create All: web, mobile, desktop',
            'Steady and fast development with components'
        ]}
    />
</div>

export const Standard = () => {
    return <Fragment>
        <PicturedBox picture={picture}>
            {body}
        </PicturedBox>
    </Fragment>
}
