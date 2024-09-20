import { Transaction } from "../types"

export const appReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }

        case 'DELETE_TRANSACTION':

            return {
                ...state,
                transactions: state.transactions.filter((transaction: Transaction) => transaction.id !== action.payload)
            }

        default:
            return state
    }
}