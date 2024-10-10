import { useFormContext } from "../hooks/formHook"
import { CategoryExpenseTypes, CategoryIncomeTypes } from "../types"
import { Label } from "./Tremor/Label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./Tremor/Select"

function SelectCategory({ categorys, label, className }: {
  categorys: CategoryExpenseTypes[] | CategoryIncomeTypes[]
  label: string,
  className?: string
}) {
  const { categoryChange, category } = useFormContext()

  return (
    <>
      <Label htmlFor="category">{ label }</Label>
      <Select
        defaultValue={category}
        value={category}
        onValueChange={categoryChange}
        name="category"
        required
      >
        <SelectTrigger
          id="category"
          className={className}
        >
          <SelectValue
            placeholder="Seleccione una categoría"
          />
        </SelectTrigger>
        <SelectContent>
          {
            categorys.map((c: CategoryExpenseTypes | CategoryIncomeTypes) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </>
  )
}

export default SelectCategory