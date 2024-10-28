export type id = `${string}-${string}-${string}-${string}-${string}`
export interface Transaction {
    description: string,
    amount: number,
    id: id,
    category: CategoryExpenseTypes | CategoryIncomeTypes
    date: Date
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
    updateTransaction: (id: id, newTransaction: Transaction) => void
}

export interface StoreContextType {
    transactions: Transaction[],
    onSubmit: () => void
    deleteTransaction: (id: id) => void
    onClickUpdate: (id: id, date: Date) => void | string
    balance: string
    expense: string
    income: string
}

export interface FormContextType {
    formType: 'Gasto' | 'Ingreso'
    category: CategoryExpenseTypes | CategoryIncomeTypes,
    title: string,
    amount: string,
    formTypeChange: (formType: 'Gasto' | 'Ingreso') => void
    categoryChange: (category: CategoryExpenseTypes | CategoryIncomeTypes) => void
    titleChange: (e: string) => void | string
    amountChange: (e: string) => void | string
    clearForm: () => void
}

export interface siteConfig {
    name: string
    url: string
    description: string
    baseLinks: {
        principal: string
        graficas: string
        transacciones: string
      }
}
