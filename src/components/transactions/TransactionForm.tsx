import SelectCategory from "../SelectCategory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tremor/Tabs"
import { Categorys } from "../../data/category"
import { useFormContext } from "../../hooks/formHook"
import { InputLabel } from "../InputLabel"
import { useStoreContext } from "../../hooks/StoreHook"
import { InputNumber } from "../InputNumber"
import { Button } from "../Tremor/Button"

function TransactionForm() {
  const { formTypeChange, formType } = useFormContext()
  const { onSubmit } = useStoreContext()

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    onSubmit(e)
  }

  return (
    <section className="w-full">
      <Tabs
        defaultValue="Gasto"
        value={formType}
        onValueChange={(v) => formTypeChange(v as 'Gasto' | 'Ingreso')}
      >
        <TabsList className="mb-4">
          <TabsTrigger value="Gasto">Gasto</TabsTrigger>
          <TabsTrigger value="Ingreso">Ingreso</TabsTrigger>
        </TabsList>
        <form onSubmit={e => onSubmitHandler(e)}>

          <InputLabel label="Titulo" />
          <InputNumber label="Monto" />

            <TabsContent
              value={formType}
              className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
            >
              <SelectCategory
              label="Categoría"
              categorys={
                formType === 'Gasto' 
                ? Categorys.expense 
                : Categorys.income
              }
              />
            </TabsContent>
          <Button className="w-full mt-4" variant="primary">Añadir transacción</Button>
        </form>
      </Tabs>
    </section>
  )
}

export default TransactionForm