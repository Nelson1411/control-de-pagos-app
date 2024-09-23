import { createContext, useEffect } from "react";
import { useStore } from "../store/store";
import { GlobalStateContext, id, Transaction } from "../types";

export const GlobalContext = createContext<GlobalStateContext | null>(null)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
        const state = useStore((state) => state.transactions)

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

    return (
        <GlobalContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
