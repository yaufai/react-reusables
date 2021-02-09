import React, { useState } from "react"
import ModalContext from "./ModalContext"

type ModalProp = {
    children: React.ReactNode
}

export default function Modal(props: ModalProp) {
    let [isShown, setIsShown] = useState(false)


    return <ModalContext.Provider value={{
        isShown: isShown,
        setIsShown: setIsShown
    }}>
        {props.children}
    </ModalContext.Provider>
}