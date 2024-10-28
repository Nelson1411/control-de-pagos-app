import { LineChart } from "../Tremor/LineChartTremor"
import { format, weekStart } from "@formkit/tempo"
import { Transaction } from "../../types"
import { useStoreContext } from "../../hooks/StoreHook"


function LineChartBalance() {
  const { transactions } = useStoreContext()
  const data = []
      let i = 0
      while (i < 7) {
          data.push({
              date: format(weekStart(new Date(), i), "short"),
              Balance: transactions.reduce((total: number, transaction: Transaction) => {
                if (format(transaction.date, "medium") === format(weekStart(new Date(), i), "medium")) {
                    return total + transaction.amount
                }
                return total
            }, 0)
          })
          i++
      }
  data.sort((a, b) => a.date.localeCompare(b.date, undefined, { numeric: true }))

  return (
    <div>
      <h1 className="text-xl dark:text-[#fffffe] font-title font-bold">
        Balance por día
      </h1>

      <LineChart
        data={data}
        index="date"
        categories={["Balance"]}
        showLegend={false}
        showYAxis={false}
        startEndOnly={true}
        className="-mb-2 mt-8 h-48"
      />
    </div>
  )

}

export default LineChartBalance