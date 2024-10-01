import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"

export function useStoreContext () {
    const context = useContext(StoreContext)

    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalProvider')
    }

    return context
}