import { useStoreContext } from "../hooks/Store"

function Balance() {
  const { transactions } = useStoreContext()

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts
                .reduce((acc, item) => (acc += item), 0)
                .toFixed(2)

  return (
    <div className="flex justify-between">
        <h3>Balance</h3>
        <h1 className="text-2xl">${total}</h1>
    </div>
  )
}

export default Balance