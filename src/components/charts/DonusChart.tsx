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
      <h1 className="text-center text-sm dark:text-[#fffffe] font-title font-bold">
        Balance
      </h1>
      <p className="mt-2 w-full text-center text-xl font-semibold font-paragraph dark:text-[#fffffe]">
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



