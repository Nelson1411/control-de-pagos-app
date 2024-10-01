import { useFormContext } from "../hooks/formHook"
import { Input } from "./Tremor/Input"
import { Label } from "./Tremor/Label"

export const InputNumber = ({ label }: { label: string }) => {
  const { amount, amountChange } = useFormContext()
  return (
    <div className="mx-auto max-w-xs space-y-2">
      <Label htmlFor="amount">{ label }</Label>
      <Input
        value={amount}
        onChange={(e) => amountChange(e)}
        placeholder="00.00"
        id="amount"
        name="amount"
        type="number"
        className="mt-2"
      />
    </div>
  )
}