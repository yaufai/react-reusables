import React, { useContext } from 'react';
import { CollapsibleContext } from './Collapsible';
import { CollapsibleButtonProps } from './CollapsibleType';

function CollapsibleButton(props: CollapsibleButtonProps) {
    let context = useContext(CollapsibleContext)
    let textClose = props.textClose === undefined ? props.text : props.textClose
    let color = props.color || 'orange'

    return (<button
        onClick={() => context.setIsOpen(!context.isOpen)}
        style={{
            backgroundColor: color,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 18,
            paddingRight: 18,
            borderRadius: 9,
            color:'white',
            fontWeight: 'bold',
            border: 0,
            marginBottom: 8,
            cursor: "pointer"
        }}
    >
        {context.isOpen ? textClose : props.text}
    </button>);
}

export default CollapsibleButton;