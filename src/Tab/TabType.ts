import { ReactNode } from "react";

export type TabContextType<T> = {
    selected: T|undefined
    setSelected: (id: T) => void
}

export interface TabMenuItem {
    label: string,
    id   : string
}

export interface TabMenuProps {
    items: TabMenuItem[],
    default?: string
}

export interface TabPaneProps {
    id: string,
    children: ReactNode
}