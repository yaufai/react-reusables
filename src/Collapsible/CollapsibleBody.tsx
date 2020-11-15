import React, { useContext } from 'react';
import { CollapsibleContext } from './Collapsible';
import { CollapsibleBodyProps } from './CollapsibleType';

function CollapsibleBody(props: CollapsibleBodyProps) {
    let context = useContext(CollapsibleContext)
    return <div style={{
        display: context.isOpen ? "block" : "none",
        overflow: "hidden"
    }}>
        {props.children}
    </div>
}

export default CollapsibleBody;