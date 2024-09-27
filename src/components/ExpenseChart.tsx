import { useStoreContext } from '../hooks/Store'
import { DonutChart } from "./Tremor/DonusChart"

function ExpenseChart() {

    const { transactions } = useStoreContext()

    const totalIncome = transactions
                        .filter(transaction => transaction.amount > 0)
                        .reduce((acc, transaction) => (acc += transaction.amount), 0)

    const totalExpense = transactions
                        .filter(transaction => transaction.amount < 0)
                        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

    const total = transactions
                  .map(transaction => transaction.amount)
                  .reduce((acc, item) => (acc += item), 0)
                  .toFixed(2)

    const data = [
      {
        name: 'gasto',
        amount: totalExpense
      },
      {
        name: 'ingresos',
        amount: totalIncome
      }
    ]

  return (
    <>
      <p className="text-center text-sm text-gray-700 dark:text-gray-300">
        Total
      </p>
      <p className="mt-2 w-full text-center text-xl font-semibold text-gray-900 dark:text-gray-50">
        {total}
      </p>
      <DonutChart
        data={data}
        category="name"
        value="amount"
        className="mx-auto mt-8"
        colors={["blue", "violet", "cyan", "emerald"]}
      />
    </>
  )
}

export default ExpenseChart



