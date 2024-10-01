// import Balance from "./components/Balance"
// import ExpenseChart from "./components/ExpenseChart"
// import IncomeExpense from "./components/IncomeExpense"
// import TransactionForm from "./components/transactions/TransactionForm"
// import TransactionsList from "./components/transactions/TransactionsList"
// import { Card } from "./components/Tremor/Card"
import { FormProvider } from "./context/FormContext"
import { StoreProvider } from "./context/StoreContext"
import { Route, Switch } from "wouter"
import Graficas from "./views/Graficas"
import Layout from "./layout/Layout"
import Tabla from "./views/Tabla"


function App() {

  return (
    <>
      <FormProvider>
        <StoreProvider>
          <Layout>
            <Switch>
              <Route path={'/graficas'} component={Graficas} />
              <Route path={'/transacciones'} component={Tabla} />
              <Route>404</Route>
            </Switch>
          </Layout>
        </StoreProvider>
      </FormProvider>
    </>
  )
}

export default App
