import { useContext } from "react"
import { StoreContext } from "../context/Store"

export function useStoreContext () {
    const context = useContext(StoreContext)

    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalProvider')
    }

    return context
}