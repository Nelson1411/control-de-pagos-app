export type id = `${string}-${string}-${string}-${string}-${string}`
export interface Transaction {
    description: string,
    amount: number,
    id: id,
    category: CategoryExpenseTypes | CategoryIncomeTypes
}

export enum CategoryExpense {
    SALUD = 'Salud',
    OCIO = 'Ocio',
    CASA = 'Casa',
    COMIDA = 'Comida',
    EDUCACION = 'Educación',
    REGALOS = 'Regalos',
    MERCADO = 'Mercado',
    TRANSPORTE = 'Transporte',
    INVERSION = 'Inversión',
    VEHICULOS = 'Vehículos'
}

export enum CategoryIncome {
    SALARIO = 'Salario',
    REGALO = 'Regalo',
    INTERES = 'Interés',
    VENTA = 'Venta',
    PRESTAMO = 'Prestamo'
}

export interface Category {
    expense: CategoryExpenseTypes[]
    income: CategoryIncomeTypes[]
}

export type CategoryExpenseTypes = `${CategoryExpense}` 
export type CategoryIncomeTypes = `${CategoryIncome}` 

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

export interface FormContextType {
    formType: 'Gasto' | 'Ingreso'
    category: CategoryExpenseTypes | CategoryIncomeTypes
    formTypeChange: (e) => void
    categoryChange: (e) => void
}