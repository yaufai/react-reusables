import React, { Fragment } from 'react'
import { Inline, Center } from '../index'

export default { title: 'Center' }

export const Standard = () => {
    return <Fragment>
        <Center>This component is just implemented as a replacement of deprecated <Inline>center</Inline> tag.</Center>
    </Fragment>
}
