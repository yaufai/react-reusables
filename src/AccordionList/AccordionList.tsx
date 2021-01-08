import React, { ReactNode } from 'react';

export type AccordionListProps = {
    children: ReactNode
}

function AccordionList(props: AccordionListProps) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default AccordionList;