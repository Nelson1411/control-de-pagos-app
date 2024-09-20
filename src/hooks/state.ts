import { useContext } from "react"
import { GlobalContext } from "../context/globalState"

export function useGlobalState () {
    const context = useContext(GlobalContext)

    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalProvider')
    }

    return context
}