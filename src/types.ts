export type id = `${string}-${string}-${string}-${string}-${string}`
export interface Transaction {
    description: string,
    amount: number,
    id: id
}

export interface StateType {
    transactions: Transaction[]
}

export interface Actions {
    addTransaction: (transaction: Transaction) => void
    deleteTransaction: (id: id) => void
}

export interface GlobalStateContext {
    transactions: Transaction[],
    addTransaction: (transaction: Transaction) => void
    deleteTransaction: (id: id) => void
}