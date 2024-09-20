import { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";
import { GlobalStateContext, id, Transaction } from "../types";

export const GlobalContext = createContext<GlobalStateContext>()

export const useGlobalState = () => {
    const context = useContext(GlobalContext)

    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalProvider')
    }

    return context
}

const initialState = {
    transactions: []
}

export const GlobalProvider = ({ children }) => {
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
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    const deleteTransaction = (id: id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
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