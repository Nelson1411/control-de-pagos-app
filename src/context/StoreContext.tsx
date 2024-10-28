import { createContext, useEffect, useState } from "react";
import { useStore } from "../store/store";
import { id, StoreContextType, Transaction } from "../types";
import { useFormContext } from "../hooks/formHook";
import { toast } from 'sonner'


export const StoreContext = createContext<StoreContextType | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
        const state = useStore((state) => state.transactions)
        const { formType, category, amount, title, clearForm } = useFormContext()
        const [date] = useState(new Date())

        const balance = state.map(transaction => transaction.amount)
                        .reduce((acc, item) => (acc += item), 0)
                        .toFixed(2)

        const expense = state.map(transaction => transaction.amount)
                        .filter(item => item < 0)
                        .reduce((acc, item) => (acc += item), 0)
                        .toFixed(2)

        const income = state.map(transaction => transaction.amount)
                        .filter(item => item > 0)
                        .reduce((acc, item) => (acc += item), 0)
                        .toFixed(2)
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
    
    const onClickUpdate = (id: id, date: Date) => {
        const newTransaction = {
            id,
            description: title,
            amount: formType === 'Gasto' ? Number(-amount) : +amount,
            category: category,
            date: date,
        }
        try {
            useStore.getState().updateTransaction(id, newTransaction)
        } catch (error) {
            console.error(error);
            toast.error('Error al actualizar la transacción')
            return
        }
        toast.success('Transacción actualizada')
        clearForm()
    }

    const onSubmit = () => {
        console.log(title, amount, category)
        if (amount === '' || title === '') {
            toast.error('Campos requeridos no llenados')
            return
        }
        try {
            addTransaction({
                id: window.crypto.randomUUID(),
                description: title,
                amount: formType === 'Gasto' ? Number(-amount) : +amount,
                category: category,
                date: date,
            })
        } catch (error) {
            console.error(error)
        }
        toast.success('Transacción guardada')
        clearForm()
    }

    return (
        <StoreContext.Provider value={{
            transactions: state,
            balance,
            expense,
            income,
            onSubmit,
            deleteTransaction,
            onClickUpdate
        }}>
            {children}
        </StoreContext.Provider>
    )
}
