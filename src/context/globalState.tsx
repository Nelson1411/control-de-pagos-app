import { createContext, useEffect, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";
import { ACTIONSTYPE, GlobalStateContext, id, Transaction } from "../types";

export const GlobalContext = createContext<GlobalStateContext | null>(null)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(appReducer, initialState,
        () => {
            const localData = localStorage.getItem('transactions')
            return localData ? JSON.parse(localData) : initialState
        })

        useEffect(() => {
            localStorage.setItem('transactions', JSON.stringify(state))
        }, [state])

    const addTransaction = (transaction: Transaction) => {
        dispatch({
            type: ACTIONSTYPE.ADD_TRANSACTION,
            payload: transaction
        })
    }

    const deleteTransaction = (id: id) => {
        dispatch({
            type: ACTIONSTYPE.DELETE_TRANSACTION,
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

const initialState = {
    transactions: []
}