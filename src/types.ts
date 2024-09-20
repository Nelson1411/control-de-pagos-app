export type id = `${string}-${string}-${string}-${string}-${string}`
export interface Transaction {
    description: string,
    amount: number,
    id: id
}

export enum ACTIONSTYPE {
    ADD_TRANSACTION = 'ADD_TRANSACTION',
    DELETE_TRANSACTION = 'DELETE_TRANSACTION'
}

export type Actions = 
| { type: ACTIONSTYPE.ADD_TRANSACTION, payload: Transaction }
| { type: ACTIONSTYPE.DELETE_TRANSACTION, payload: id }

export interface StateType {
    transactions: Transaction[]
}

export interface GlobalStateContext {
    transactions: Transaction[],
    addTransaction: (transaction: Transaction) => void
    deleteTransaction: (id: id) => void
}