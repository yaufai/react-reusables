import { createContext } from "react"

type ModalContextType = {
    isShown: boolean,
    setIsShown: (state: boolean) => void
}

export default createContext<ModalContextType>({
    isShown: false,
    setIsShown: (state: boolean) => {}
})