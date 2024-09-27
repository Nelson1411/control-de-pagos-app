import { useFormContext } from "../hooks/form"
import { Input } from "./Tremor/Input"
import { Label } from "./Tremor/Label"

export const InputLabel = ({ label }: { label: string }) => {
  const { title, titleChange } = useFormContext()
  return (
    <div className="mx-auto max-w-xs space-y-2">
      <Label htmlFor="titulo">{ label }</Label>
      <Input
        placeholder="Titulo"
        id="titulo"
        name="titulo"
        type="text"
        value={title}
        onChange={(e) => titleChange(e)}
      />
    </div>
  )
}