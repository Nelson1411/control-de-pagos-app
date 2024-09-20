import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/globalState'
function ExpenseChart() {

    const { transactions } = useGlobalState()

    const totalIncome = transactions
                        .filter(transaction => transaction.amount > 0)
                        .reduce((acc, transaction) => (acc += transaction.amount), 0)

    const totalExpense = transactions
                        .filter(transaction => transaction.amount < 0)
                        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

    const totalExpensePercentage = (Math.abs(totalExpense) / (totalIncome + totalExpense)) * 100

    const totalIncomePercentage = 100 - totalExpensePercentage

    
    const data = [
        { x: "Income", y: totalIncomePercentage },
        { x: "Expense", y: totalExpensePercentage },
    ]
    
    
    return (
    <>
        {
            transactions.length > 0 ? (
                <VictoryPie
                    colorScale={["#2ecc71", "#e74c3c"]}
                    data={data}
                    labels={({datum}) => `${datum.y.toFixed(2)}%`}
                    animate={{ duration: 2000 }}
                    labelComponent={<VictoryLabel
                        angle={45}
                        style={{ fill: "white", fontSize: 50 }}
                    />}
                />
            ) : (
                <h1>No hay transacciones</h1>
            )
        }
    </>
  )
}

export default ExpenseChart