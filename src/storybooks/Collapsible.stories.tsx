import React, { Fragment } from 'react'
import { Center, Collapsible, CollapsibleBody, CollapsibleButton } from '../index'

export default { title: 'Collapsible' }

export const Standard = () => {
    return <Fragment>
        <Collapsible>
            <Center>
                <CollapsibleButton text="Open" textClose="Close"></CollapsibleButton>
            </Center>
            <CollapsibleBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CollapsibleBody>
        </Collapsible>
    </Fragment>
}
