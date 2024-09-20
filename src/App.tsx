import Balance from "./components/Balance"
import ExpenseChart from "./components/ExpenseChart"
import IncomeExpense from "./components/IncomeExpense"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionsList from "./components/transactions/TransactionsList"

import { GlobalProvider } from "./context/globalState"

function App() {

  return (
    <>
      <GlobalProvider>
        <main className="bg-[#0f172a] h-screen text-white flex 
        justify-center items-center">
          <div className="container mx-auto w-2/5">
            <section className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
              <section>
                <h1 className="text-4xl font-bold"></h1>
                <IncomeExpense />
                <Balance />
                <TransactionForm />
              </section>
              <div className="flex flex-col flex-1">
                <ExpenseChart />
                <TransactionsList />
              </div>
            </section>
          </div>
        </main>
      </GlobalProvider>
    </>
  )
}

export default App
