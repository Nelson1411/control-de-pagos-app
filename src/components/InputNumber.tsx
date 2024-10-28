import { useFormContext } from "../hooks/formHook"
import { Input } from "./Tremor/Input"
import { Label } from "./Tremor/Label"

export const InputNumber = ({ label, className }: {
  label: string,
  className?: string
}) => {
  const { amount, amountChange } = useFormContext()
  return (
    <div>
      <Label htmlFor="amount">{ label }</Label>
      <Input
        value={amount}
        onChange={(e) => amountChange(e.target.value)}
        placeholder="00.00"
        id="amount"
        name="amount"
        type="number"
        className={className}
      />
    </div>
  )
}