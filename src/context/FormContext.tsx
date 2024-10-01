import { createContext, useEffect, useState } from "react";
import {
    CategoryExpense,
    CategoryExpenseTypes,
    CategoryIncome,
    CategoryIncomeTypes,
    FormContextType
} from "../types";

export const FormContext = createContext<FormContextType | null>(null)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [formType, setFormType] = useState<'Gasto' | 'Ingreso'>('Gasto')
    const [category, setCategory] = useState<CategoryExpenseTypes | CategoryIncomeTypes>('Salud')
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")

    const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const amountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value)
    }

    const categoryChange = (category: CategoryExpenseTypes | CategoryIncomeTypes) => {
        setCategory(category)
    }

    const formTypeChange = (formType: 'Gasto' | 'Ingreso') => {
        setFormType(formType)
    }

    const clearForm = () => {
        setTitle("")
        setAmount("")
    }

    useEffect(() => {
        setCategory(formType === 'Gasto' ? CategoryExpense.SALUD : CategoryIncome.SALARIO)
    }, [formType])
    
    return (
        <FormContext.Provider value={{
            category,
            formType,
            title,
            amount,
            formTypeChange,
            categoryChange,
            titleChange,
            amountChange,
            clearForm
        }}>
            {children}
        </FormContext.Provider>
    )
}
