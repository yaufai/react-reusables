import React, { ReactNode } from 'react';
import { AccordionListItemContext } from './AccordionListItem';

function AccordionListItemHeader(props: { children: ReactNode }) {
    return <AccordionListItemContext.Consumer>{
        (value) => <div onClick={() => { value.setIsOpen(!value.isOpen)}}>
            {props.children}
        </div>
    }</AccordionListItemContext.Consumer>
}

export default AccordionListItemHeader;