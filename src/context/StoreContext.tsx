import { createContext, useEffect } from "react";
import { useStore } from "../store/store";
import { id, StoreContextType, Transaction } from "../types";
import { useFormContext } from "../hooks/formHook";

export const StoreContext = createContext<StoreContextType | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
        const state = useStore((state) => state.transactions)
        const { formType, category, amount, title, clearForm } = useFormContext()

        useEffect(() => {
            window.addEventListener('storage', async () => {
                await useStore.persist.rehydrate()
            })
        }, [state])

    const addTransaction = (transaction: Transaction) => {
        useStore.getState().addTransaction(transaction)
    }

    const deleteTransaction = (id: id) => {
        useStore.getState().deleteTransaction(id)

    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            addTransaction({
                id: window.crypto.randomUUID(),
                description: title,
                amount: formType === 'Gasto' ? Number(-amount) : +amount,
                category: category,
                date: new Date()
            })
        } catch (error) {
            console.error(error)
        }
        clearForm()
    }

    return (
        <StoreContext.Provider value={{
            transactions: state,
            onSubmit,
            deleteTransaction,

        }}>
            {children}
        </StoreContext.Provider>
    )
}
