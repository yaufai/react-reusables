import React, { Fragment } from 'react'
import { Collapsible } from '../index'

export default { title: 'Collapsible' }

export const Standard = () => {
    return <Fragment>
        <Collapsible text="Open" textClose="Close">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Collapsible>
    </Fragment>
}
