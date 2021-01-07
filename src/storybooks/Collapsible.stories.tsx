import React, { Fragment } from 'react'
import { Center, Collapsible, CollapsibleBody, CollapsibleButton } from '../index'
import { LoremIpsum } from './utils'

export default { title: 'Collapsible' }

export const Standard = () => {
    return <Fragment>
        <Collapsible>
            <Center>
                <CollapsibleButton text="Open" textClose="Close"></CollapsibleButton>
            </Center>
            <CollapsibleBody>
                {LoremIpsum}
            </CollapsibleBody>
        </Collapsible>
    </Fragment>
}
