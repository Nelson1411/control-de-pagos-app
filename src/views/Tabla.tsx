import { Toaster } from "sonner"
import TransactionForm from "../components/transactions/TransactionForm"
import TransactionsList from "../components/transactions/TransactionsList"

function Tabla() {
  return (
    <section className="h-full w-full text-white px-8 pt-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold mb-5">Transacciones</h1>
          <TransactionForm />
        </div>
        <TransactionsList />
        <Toaster richColors />
    </section>
  )
}

export default Tabla