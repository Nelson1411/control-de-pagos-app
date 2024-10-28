import CardNumberAmounts from "../components/CardNumberAmounts";
import BarChart from "../components/charts/BarChart";
import ExpenseChart from "../components/charts/DonusChart";
import LineChartBalance from "../components/charts/LineChartBalance";
import { Card } from "../components/Tremor/Card";
import { useStoreContext } from "../hooks/StoreHook";

function Graficas() {
    const { transactions } = useStoreContext()
  return (
    <section className="h-full w-full text-white py-12 px-12 md:py-0 md:px-0">
        {
            transactions.length > 0 
            ? <div className="grid grid-cols-1 lg:grid-rows-[200px_1fr] lg:grid-cols-2 gap-12 h-full">
                    <CardNumberAmounts className="lg:col-start-1 lg:col-end-3 flex flex-wrap 
                    justify-center items-center gap-12" />
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