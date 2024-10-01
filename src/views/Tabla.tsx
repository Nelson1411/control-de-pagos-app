import TransactionsList from "../components/transactions/TransactionsList"

function Tabla() {
  return (
    <section className="h-full w-full text-white px-8 pt-8">
        <h1 className="text-2xl font-semibold mb-5">Transacciones</h1>
        <TransactionsList />
    </section>
  )
}

export default Tabla