import { createContext, useEffect, useState } from "react";
import { CategoryExpense, CategoryExpenseTypes, CategoryIncome, CategoryIncomeTypes, FormContextType } from "../types";

export const FormContext = createContext<FormContextType | null>(null)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [formType, setFormType] = useState<'Gasto' | 'Ingreso'>('Gasto')
    const [category, setCategory] = useState<CategoryExpenseTypes | CategoryIncomeTypes>('Salud')

    const categoryChange = (e) => {
        setCategory(e)
    }

    const formTypeChange = (e) => {
        setFormType(e as 'Gasto' | 'Ingreso')
    }

    useEffect(() => {
        setCategory(formType === 'Gasto' ? CategoryExpense.SALUD : CategoryIncome.SALARIO)
    }, [formType])
    
    return (
        <FormContext.Provider value={{
            category,
            formType,
            formTypeChange,
            categoryChange
        }}>
            {children}
        </FormContext.Provider>
    )
}