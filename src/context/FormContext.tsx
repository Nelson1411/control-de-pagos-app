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

    const titleChange = (e: string) => {
        setTitle(e)
    }

    const amountChange = (e: string) => {
        setAmount(e)
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
        setCategory(CategoryExpense.SALUD)
        setFormType('Gasto')
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
