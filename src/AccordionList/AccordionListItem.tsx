import React, { createContext, ReactNode, useState } from 'react';

type AccordionListItemContextType = {
    isOpen: boolean,
    setIsOpen: (arg: boolean) => void
}

export const AccordionListItemContext = createContext<AccordionListItemContextType>({
    isOpen: false,
    setIsOpen: (arg) => {}
})

export type AccordionListItemProps = {
    children: ReactNode
}

function AccordionListItem(props: AccordionListItemProps) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <AccordionListItemContext.Provider value={{
            isOpen: isOpen,
            setIsOpen: setIsOpen
        }}>
            {props.children}
        </AccordionListItemContext.Provider>
    );
}

export default AccordionListItem;