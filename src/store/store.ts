import { Actions, id, StateType, Transaction } from "../types"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

const initialState: StateType = {
    transactions: [],
}

export const useStore = create<StateType & Actions>()(
    persist(
        (set, get) => ({
            ...initialState,
            addTransaction: (transaction: Transaction) => set({
                transactions: [...get().transactions, transaction]
            }),
            deleteTransaction: (id: id) => set({
                transactions: get().transactions.filter((transaction: Transaction) => {
                    return transaction.id !== id
                })
            })
        }),
        {
            name: 'transactions',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

// export const appReducer = (state: StateType, action: Actions) => {

//     switch (action.type) {
//         case ACTIONSTYPE.ADD_TRANSACTION:
//             return {
//                 ...state,
//                 transactions: [...state.transactions, action.payload]
//             }

//         case ACTIONSTYPE.DELETE_TRANSACTION:
//             return {
//                 ...state,
//                 transactions: state.transactions.filter((transaction: Transaction) => transaction.id !== action.payload)
//             }

//         default:
//             return state
//     }
// }