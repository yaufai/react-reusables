import React, { useContext } from "react";
import { CSS_CENTRALIZE_ITEMS, CSS_FULL_SCREEN } from "../utils/css";
import ModalContext from "./ModalContext";

type ModalBackgroundConfig = {
    opacity: number
}

type ModalWindowProps = {
    children: React.ReactNode,
    background?: Partial<ModalBackgroundConfig>
}

function regularizeBackgroundConfig(props: Partial<ModalBackgroundConfig>): ModalBackgroundConfig {
    return {
        opacity: props.opacity ? props.opacity : 0.5,
    }
}

export default function ModalWindow(props: ModalWindowProps) {
    let context = useContext(ModalContext)

    let bgconfig = regularizeBackgroundConfig(props.background ? props.background : {})

    return <div
        style={{
            ...CSS_CENTRALIZE_ITEMS,
            display: context.isShown ? 'flex' : 'none',
            backgroundColor: `rgba(128, 128, 128, ${bgconfig.opacity})`,
            ...CSS_FULL_SCREEN
        }}
        onClick={() => context.setIsShown(false)}
    >
        <div
            style={{
                padding: '8px 16px',
                border : '1px black solid',
                backgroundColor: 'white',
                opacity: 1
            }}
            onClick={(e) => e.stopPropagation() }
        >
            {props.children}
        </div>
    </div>
}