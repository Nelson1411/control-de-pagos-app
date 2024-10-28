import { Toaster } from "sonner"
import TransactionForm from "../components/transactions/TransactionForm"
import TransactionsList from "../components/transactions/TransactionsList"

function Tabla() {
  return (
    <section className="text-white px-8 pt-20">
        <div className="flex justify-between">
          <h1 className="text-xl md:text-2xl font-semibold mb-5">Transacciones</h1>
          <TransactionForm />
        </div>
        <TransactionsList />
        <Toaster richColors />
    </section>
  )
}

export default Tabla