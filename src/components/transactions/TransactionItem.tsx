// import { useGlobalState } from '../../hooks/state'
import { Transaction } from '../../types'
import { TableCell, TableRow } from '../Tremor/Table'

function TransactionItem({ transaction }: {
    transaction: Transaction,
}) {
    // const { deleteTransaction } = useGlobalState()
  return (
    <TableRow>
      <TableCell>{transaction.description}</TableCell>
      <TableCell>{transaction.amount}</TableCell>
      <TableCell>{transaction.category}</TableCell>
    </TableRow>
  )
}

export default TransactionItem