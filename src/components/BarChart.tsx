import { format } from "@formkit/tempo"
import { useStoreContext } from "../hooks/StoreHook"
import { Transaction } from "../types"
import { BarChartTremor } from "./Tremor/BarChartTremor"

function BarChart() {
    const { transactions } = useStoreContext()

    const gasto = transactions
                    .filter(transaction => transaction.amount < 0)
                    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

    const ingreso = transactions
                    .filter(transaction => transaction.amount > 0)
                    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    const data = transactions.map((t: Transaction) => {
        return {
            date: format(t.date, 'MMM D', "es"),
            gasto: gasto,
            ingreso: ingreso
        }
    })
  return (
    <>
        <p>BarChart</p>
        <BarChartTremor
            className="h-80"
            data={data}
            index="date"
            categories={["SolarPanels", "Inverters"]}
            valueFormatter={(number: number) =>
            `$${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
            xAxisLabel="Month"
            yAxisLabel="Spend Category"
        />
    </>
  )
}

export default BarChart