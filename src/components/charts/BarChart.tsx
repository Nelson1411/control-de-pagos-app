import { format, weekStart } from "@formkit/tempo"
import { useStoreContext } from "../../hooks/StoreHook"
import { Transaction } from "../../types"
import { BarChartTremor } from "../Tremor/BarChartTremor"

function BarChart() {
    const { transactions } = useStoreContext()
    const data = []
    let i = 0
    while (i < 7) {
        data.push({
            date: format(weekStart(new Date(), i), "short"),
            Ingreso: transactions.reduce((total: number, transaction: Transaction) => {
                if (format(transaction.date, "medium") === format(weekStart(new Date(), i), "medium") 
                    && transaction.amount > 0) {
                    return total + transaction.amount
                }
                return total
            }, 0),
            Gasto: transactions.reduce((total: number, transaction: Transaction) => {
                if (format(transaction.date, "medium") === format(weekStart(new Date(), i), "medium") 
                    && transaction.amount < 0) {
                    return total + transaction.amount
                }
                return total
            }, 0) * -1
        })
        i++
    }
    data.sort((a, b) => a.date.localeCompare(b.date, undefined, { numeric: true }))

  return (
    <>
        <h1 className="text-xl text-gray-700 dark:text-gray-300">
            Grafíca de gastos
        </h1>
        <BarChartTremor
            data={data}
            index="date"
            categories={["Ingreso", "Gasto"]}
            valueFormatter={(number: number) =>
            `$${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
            xAxisLabel="Fechas"
            yAxisLabel="Monto"
        />
    </>
  )
}

export default BarChart