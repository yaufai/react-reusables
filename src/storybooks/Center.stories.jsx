import React, { Fragment } from 'react'
import Center from '../Center/Center'
import Inline from '../Code/Inline'

export default { title: 'Center' }

export const Standard = () => {
    return <Fragment>
        <Center>This component is just implemented as a replacement of deprecated <Inline>center</Inline> tag.</Center>
    </Fragment>
}
