import ExpenseChart from "../components/DonusChart";
import { Card } from "../components/Tremor/Card";


function Graficas() {
  return (
    <section className="h-full w-full text-white flex flex-col
          justify-center items-start pt-12 gap-12">
        <div className="flex gap-12 w-full max-w-2xl">
            <Card>
                <ExpenseChart />
            </Card>
        </div>
    </section>
  )
}

export default Graficas