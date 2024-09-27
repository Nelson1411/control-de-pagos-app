import { useState } from "react"
import { useGlobalState } from "../../hooks/state"
import SelectCategory from "../SelectCategory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tremor/Tabs"
import { Categorys } from "../../data/category"
import { useFormContext } from "../../hooks/form"

function TransactionForm() {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const { addTransaction } = useGlobalState()
  const { category, formTypeChange, formType } = useFormContext()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: formType === 'Gasto' ? Number(-amount) : +amount,
      category: category
    })
    console.log(description, amount, category);
    setAmount('')
    setDescription('')
  }

  return (
    <>
      <Tabs
        defaultValue="Gasto"
        value={formType}
        onValueChange={(v) => formTypeChange(v as 'Gasto' | 'Ingreso')}
      >
        <TabsList>
          <TabsTrigger value="Gasto">Gasto</TabsTrigger>
          <TabsTrigger value="Ingreso">Ingreso</TabsTrigger>
        </TabsList>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />

        <input
          type="number"
          step={0.1}
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />

        <div className="ml-2 mt-4">
          <TabsContent
            value={formType}
            className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
          >
            <SelectCategory
            categorys={
              formType === 'Gasto' 
              ? Categorys.expense 
              : Categorys.income
            }
            />
          </TabsContent>
        </div>
        <button className="bg-indigo-700 text-white px-3 py-2
        rounded-lg block mb-2 w-full">
          Add Transaction
        </button>
      </form>
      </Tabs>
        



    </>
  )
}

export default TransactionForm