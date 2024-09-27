import Balance from "./components/Balance"
import ExpenseChart from "./components/ExpenseChart"
import IncomeExpense from "./components/IncomeExpense"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionsList from "./components/transactions/TransactionsList"
import { Card } from "./components/Tremor/Card"
import { FormProvider } from "./context/FormContext"
import { StoreProvider } from "./context/Store"



function App() {

  return (
    <>
      <FormProvider>
        <StoreProvider>
          <main className="bg-[#0f172a] h-screen w-full text-white flex 
          justify-center items-start pt-12 gap-12">
            <div className="container w-2/6">
              <section className="bg-zinc-800 p-6 rounded-lg 
              flex gap-x-2 justify-center">
                <div>
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
        </StoreProvider>
      </FormProvider>
    </>
  )
}

export default App
