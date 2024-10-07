import SelectCategory from "../SelectCategory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tremor/Tabs"
import { Categorys } from "../../data/category"
import { useFormContext } from "../../hooks/formHook"
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

function TransactionForm() {
  const { formTypeChange, formType } = useFormContext()
  const { onSubmit } = useStoreContext()


  return (
    <section className="h-full">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="secondary">Añadir transacción</Button>
        </DrawerTrigger>
        <DrawerContent className="sm:max-w-lg flex">
          <DrawerHeader>
            <DrawerTitle>Añade una nueva transacción</DrawerTitle>
            <DrawerDescription className="mt-1 text-sm">
              Completa los siguientes campos para añadir 
              una nueva transacción.
            </DrawerDescription>
          </DrawerHeader>
          <form
            onSubmit={e => {
              e.preventDefault()
              onSubmit()
            }}
          >
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

                <InputLabel className="w-72" label="Titulo" />
                <InputNumber className="w-72" label="Monto" />

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
            <DrawerFooter className="mt-6 relative bottom-0 right-4">
              <DrawerClose asChild>
                <Button
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                  >
                  Cancelar
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button type="submit" className="w-full sm:w-fit">OK</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
  </section>
    // <section className="w-full">
      
    //     
    // </section>
  )
}

export default TransactionForm