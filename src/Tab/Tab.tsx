import React, { createContext, ReactNode, useState } from 'react'
import { TabContextType } from './TabType'

export const TabContext = createContext<TabContextType<string>>({
    selected: undefined,
    setSelected: (id: any) => {}
})

type TabProps = {
    children: ReactNode
}

export default function Tab(props: TabProps) {
    let [selected, setSelected] = useState(undefined as string|undefined)

    return (
        <TabContext.Provider value={{
            selected: selected,
            setSelected: setSelected
        }}>
            {props.children}
        </TabContext.Provider>
    )
}
