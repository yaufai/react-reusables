import React, { useContext, useEffect } from 'react'
import { TabContext } from './Tab'
import { TabMenuProps } from './TabType'

export default function TabMenu(props: TabMenuProps) {
    let context = useContext(TabContext)

    useEffect(() => {
        if (props.default !== undefined) {
            context.setSelected(props.default)
        } else {
            context.setSelected(props.items[0].id)
        }
    }, [])

    return (
        <div>
            {props.items.map((item) => {
                let isSelected = context.selected === item.id
                return <span
                    style={{
                        cursor : 'pointer',
                        padding: '5px 10px',
                        background: isSelected ? '#666666' : '#eeeeee',
                        fontWeight: isSelected ? 'bold'    : 'normal',
                        color     : isSelected ? 'white'   : 'black',
                    }}
                    onClick={() => { context.setSelected(item.id) }}
                >
                    {item.label}
                </span>
            })}
        </div>
    )
}
