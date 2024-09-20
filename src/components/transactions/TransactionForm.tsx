import { useState } from "react"
import { useGlobalState } from "../../hooks/state"

function TransactionForm() {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const { addTransaction } = useGlobalState()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    })
    console.log(description, amount);
    
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
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
        />

        <button className="bg-indigo-700 text-white px-3 py-2
        rounded-lg block mb-2 w-full">
          Add Transaction
        </button>

      </form>
    </>
  )
}

export default TransactionForm