import { useFormContext } from "../hooks/form"
import { CategoryExpenseTypes, CategoryIncomeTypes } from "../types"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./Tremor/Select"

function SelectCategory({ categorys }: { categorys: CategoryExpenseTypes[] | CategoryIncomeTypes[] }) {
  const { categoryChange, category } = useFormContext()

  return (
    <>
      <Select
        defaultValue={category}
        value={category}
        onValueChange={categoryChange}
      >
        <SelectTrigger className="mx-auto">
          <SelectValue placeholder="Select" />
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