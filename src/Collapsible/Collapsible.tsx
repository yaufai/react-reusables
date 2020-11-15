import React, { createContext, useState } from "react";
import { CollapsibleContextType, CollapsibleProps } from "./CollapsibleType";

export const CollapsibleContext = createContext<CollapsibleContextType>({
    isOpen: false,
    setIsOpen: (value: boolean) => {}
})



export default function Collapsible(props: CollapsibleProps) {
    let [isOpen, setIsOpen] = useState(false)

    return <CollapsibleContext.Provider value={{
        isOpen,
        setIsOpen
    }}>
       {props.children} 
    </CollapsibleContext.Provider>
}