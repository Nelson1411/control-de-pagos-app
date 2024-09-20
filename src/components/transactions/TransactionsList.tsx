import { useGlobalState } from "../../hooks/state"
import TransactionItem from "./TransactionItem"

function TransactionsList() {
    const { transactions  } = useGlobalState()
  return (
    <>
        <h3 className="text-slate-300 text-xl font-bold">History</h3>
        <ul className="w-full">
            {
                transactions.map((transaction) => {
                    return (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                    />
                    )
                })
            }
        </ul>
    </>
  )
}

export default TransactionsList