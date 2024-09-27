import { useContext } from "react"
import { FormContext } from "../context/FormContext"

export function useFormContext () {
    const context = useContext(FormContext)

    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalProvider')
    }

    return context
}