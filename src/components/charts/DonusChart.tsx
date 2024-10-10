import { useStoreContext } from '../../hooks/StoreHook'
import { DonutChart } from "../Tremor/DonusChartTremor"

function ExpenseChart() {

    const {
      balance: total,
      expense: totalExpense,
      income: totalIncome
    } = useStoreContext()

    const data = [
      {
        name: 'Gastos',
        amount: Number(-totalExpense)
      },
      {
        name: 'Ingresos',
        amount: Number(totalIncome)
      }
    ]

  return (
    <>
      <p className="text-center text-sm text-gray-700 dark:text-gray-300">
        Balance
      </p>
      <p className="mt-2 w-full text-center text-xl font-semibold text-gray-900 dark:text-gray-50">
        {total}
      </p>
      <DonutChart
        data={data}
        category="name"
        value="amount"
        className="mx-auto mt-8 w-full h-52"
        colors={["red", "green"]}
      />
    </>
  )
}

export default ExpenseChart



