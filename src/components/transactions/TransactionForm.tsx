import SelectCategory from "../SelectCategory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tremor/Tabs"
import { Categorys } from "../../data/category"
import { useFormContext } from "../../hooks/form"
import { InputLabel } from "../InputLabel"
import { useStoreContext } from "../../hooks/Store"
import { InputNumber } from "../InputNumber"

function TransactionForm() {
  const { formTypeChange, formType } = useFormContext()
  const { onSubmit } = useStoreContext()

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    onSubmit(e)
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
      <form onSubmit={e => onSubmitHandler(e)}>

        <InputLabel label="Titulo" />
        <InputNumber label="Monto" />
        {/* <input
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
        /> */}

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