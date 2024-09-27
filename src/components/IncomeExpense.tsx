import { useStoreContext } from "../hooks/Store"
import { Transaction } from "../types"

function IncomeExpense() {
  const { transactions } = useStoreContext()

  const amounts = transactions.map((transaction: Transaction) => transaction.amount)
  
  const income = amounts
                .filter((item: number) => item > 0)
                .reduce((acc, item) => (acc += item), 0)
                .toFixed(2)

  const expense = amounts
                .filter(item => item < 0)
                .reduce((acc, item) => (acc += item), 0) * -1
                .toFixed(2)

  return (
    <>
        <div className="flex justify-between my-2">
            <h4>Income</h4>
            <p>{income}</p>
        </div>
        <div className="flex justify-between my-2">
            <h4>Expense</h4>
            <h4>{expense}</h4>
        </div>
    </>
  )
}

export default IncomeExpense