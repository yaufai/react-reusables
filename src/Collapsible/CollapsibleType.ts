import { ReactNode } from "react";

export type CollapsibleContextType = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void 
}

export interface CollapsibleProps {
    children  : ReactNode,
}

export interface CollapsibleButtonProps {
    text: string
    textClose?: string
    color?    : string
}

export interface CollapsibleBodyProps {
    children: ReactNode
}