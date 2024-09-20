import { Actions, ACTIONSTYPE, StateType, Transaction } from "../types"

export const appReducer = (state: StateType, action: Actions) => {

    switch (action.type) {
        case ACTIONSTYPE.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }

        case ACTIONSTYPE.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter((transaction: Transaction) => transaction.id !== action.payload)
            }

        default:
            return state
    }
}