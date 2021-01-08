import React, { createRef, ReactNode } from 'react';
import { AccordionListItemContext } from './AccordionListItem';

type AccordionListItemContentProps = {
    children: ReactNode
}

class AccordionListItemContent extends React.Component<AccordionListItemContentProps, {}> {
    children: React.RefObject<HTMLDivElement>;
    constructor(props: AccordionListItemContentProps) {
        super(props)
        this.children = createRef()
    }

    render() {
        return <AccordionListItemContext.Consumer>
            {(value) => <div style={{
                transitionProperty: "max-height",
                transitionDuration: "0.4s",
                transitionTimingFunction: "ease-out",
                overflow: "hidden",
                maxHeight: value.isOpen ? this.children.current?.scrollHeight : 0
            }}>
                <div ref={this.children}>{this.props.children}</div>
            </div>}
        </AccordionListItemContext.Consumer>
        
    }
}

export default AccordionListItemContent;