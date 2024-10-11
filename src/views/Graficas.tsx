import CardNumberAmounts from "../components/CardNumberAmounts";
import BarChart from "../components/charts/BarChart";
import ExpenseChart from "../components/charts/DonusChart";
import LineChartBalance from "../components/charts/LineChartBalance";
import { Card } from "../components/Tremor/Card";
import { useStoreContext } from "../hooks/StoreHook";

function Graficas() {
    const { transactions } = useStoreContext()
  return (
    <section className="h-full w-full text-white py-12 px-12">
        {
            transactions.length > 0 
            ? <div className="grid grid-cols-1 md:grid-rows-[200px_1fr] md:grid-cols-2 gap-12 h-full">
                    <CardNumberAmounts className="col-start-1 col-end-3 flex justify-center items-center gap-12" />
                    <Card>
                        <BarChart />
                    </Card>
                    <Card>
                        <ExpenseChart />
                    </Card>
                    <Card>
                        <LineChartBalance />
                    </Card>
                </div>
            : <h1 className="text-center text-2xl font-bold">No hay transacciones</h1>

        }
    </section>
  )
}

export default Graficas