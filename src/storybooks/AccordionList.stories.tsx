import React, { Fragment } from 'react'
import { AccordionList, AccordionListItem, AccordionListItemContent, AccordionListItemHeader } from '../index'
import { LoremIpsum, LoremIpsumAuthor } from './utils'

export default { title: 'Accordion List' }

export const Standard = () => {
    return <Fragment>
        <AccordionList>
            <AccordionListItem>
                <AccordionListItemHeader>
                    {LoremIpsumAuthor}
                </AccordionListItemHeader>
                <AccordionListItemContent>
                    {LoremIpsum}
                </AccordionListItemContent>
            </AccordionListItem>
        </AccordionList>
    </Fragment>
}
