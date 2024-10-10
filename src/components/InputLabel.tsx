import { useFormContext } from "../hooks/formHook"
import { Input } from "./Tremor/Input"
import { Label } from "./Tremor/Label"

export const InputLabel = ({ label, className }:{
  label: string,
  className?: string
}) => {
  const { title, titleChange } = useFormContext()

  

  return (
    <div>
      <Label htmlFor="titulo">{ label }</Label>
      <Input
        placeholder="Titulo"
        className={className}
        id="titulo"
        name="titulo"
        type="text"
        value={title}
        onChange={(e) => titleChange(e)}
      />
    </div>
  )
}