import SelectCategory from "../SelectCategory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tremor/Tabs"
import { Categorys } from "../../data/category"
import { InputLabel } from "../InputLabel"
import { useStoreContext } from "../../hooks/StoreHook"
import { InputNumber } from "../InputNumber"
import { Button } from "../Tremor/Button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../Tremor/Drawer"
import { useFormContext } from "../../hooks/formHook"
import { CategoryExpenseTypes, CategoryIncomeTypes, id } from "../../types"

function TransactionUpdateForm({ id, date, amount, category, type, title }:
  { 
    id: id, 
    date: Date, 
    amount: string, 
    category: CategoryExpenseTypes | CategoryIncomeTypes,  
    type: 'Gasto' | 'Ingreso',
    title: string
  }) {
  const { formTypeChange, formType, amountChange, categoryChange, clearForm, titleChange } = useFormContext()
  const { onClickUpdate } = useStoreContext()

  const handleClick = () => {
    onClickUpdate(id, date)
  }
  
  return (
    <section className="h-full">
      <Drawer>
        <DrawerTrigger onClick={() =>{
          amountChange(amount)
          categoryChange(category)
          formTypeChange(type)
          titleChange(title)
        }} asChild>
          <Button variant='primary'>Editar</Button>
        </DrawerTrigger>
        <DrawerContent className="sm:max-w-lg flex">
          <DrawerHeader>
            <DrawerTitle>Añade una nueva transacción</DrawerTitle>
            <DrawerDescription className="mt-1 text-sm">
              Completa los siguientes campos para editar 
              la transacción.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <Tabs
            defaultValue="Gasto"
            value={formType}
            onValueChange={(v) => formTypeChange(v as 'Gasto' | 'Ingreso')}
            >
            <TabsList className="mb-4">
                <TabsTrigger value="Gasto">Gasto</TabsTrigger>
                <TabsTrigger value="Ingreso">Ingreso</TabsTrigger>
            </TabsList>

            <InputLabel className="w-72 mt-2 mb-4" label="Titulo" />
            <InputNumber className="w-72 mt-2 mb-4" label="Monto" />

            <TabsContent
                value={formType}
                className="space-y-2 text-sm leading-7 
                text-gray-600 dark:text-gray-500"
            >
                <SelectCategory
                label="Categoría"
                categorys={
                    formType === 'Gasto' 
                    ? Categorys.expense 
                    : Categorys.income
                }
                className="w-72"
                />
            </TabsContent>
            </Tabs>
          </DrawerBody>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                  onClick={() => clearForm()}
                >
                  Cancelar
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button
                  type="submit"
                  onClick={handleClick}
                  className="w-full sm:w-fit"
                >
                  OK
                </Button>
              </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
      </Drawer>
  </section>
    // <section className="w-full">
      
    //     
    // </section>
  )
}

export default TransactionUpdateForm