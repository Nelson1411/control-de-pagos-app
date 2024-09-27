import Balance from "./components/Balance"
import ExpenseChart from "./components/ExpenseChart"
import IncomeExpense from "./components/IncomeExpense"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionsList from "./components/transactions/TransactionsList"
import { Card } from "./components/Tremor/Card"
import { FormProvider } from "./context/FormContext"

import { GlobalProvider } from "./context/globalState"

function App() {

  return (
    <>
      <FormProvider>
        <GlobalProvider>
          <main className="bg-[#0f172a] h-screen w-full text-white flex 
          justify-center items-start pt-36 gap-12">
            <div className="container w-2/6">
              <section className="bg-zinc-800 p-6 rounded-lg flex gap-x-2 justify-center">
                <div>
                  <h1 className="text-4xl font-bold"></h1>
                  <IncomeExpense />
                  <Balance />
                  <TransactionForm />
                </div>
              </section>
            </div>
            <section className="flex flex-col gap-y-5">
              <Card>
                <ExpenseChart />
              </Card>
              <Card>
                <TransactionsList />
              </Card>
            </section>
          </main>
        </GlobalProvider>
      </FormProvider>
    </>
  )
}

export default App
