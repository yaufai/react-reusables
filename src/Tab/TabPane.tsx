import React, { useContext } from 'react'
import { TabContext } from './Tab'
import { TabPaneProps } from './TabType'

export default function TabPane(props: TabPaneProps) {
    let context = useContext(TabContext)
    
    return (
        <div style={{
            marginTop: '5px',
            padding  : '10px 15px',
            display: context.selected === props.id ? undefined : "none",
            border   : '2px solid #666'
        }}>
            {props.children}
        </div>
    )
}
