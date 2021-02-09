import React, { useContext } from "react"
import ModalContext from "./ModalContext"

type ModalTriggerProps = {
    children: React.ReactNode,
}

export default function ModalToggle(props: ModalTriggerProps) {
    let context = useContext(ModalContext)
    return <div
        style={{ display: 'inline-block', cursor: 'pointer' }}
        onClick={() => context.setIsShown((!context.isShown))}
    >
        {props.children}
    </div>
}