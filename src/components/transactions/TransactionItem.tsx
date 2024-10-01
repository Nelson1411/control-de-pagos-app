// import { useGlobalState } from '../../hooks/state'
import { Transaction } from '../../types'
import { Badge } from '../Tremor/Badge'
import { TableCell, TableRow } from '../Tremor/Table'
import { format } from "@formkit/tempo"

function TransactionItem({ transaction }: {
    transaction: Transaction,
}) {
  const formatDate = format(transaction.date, 'short')
    // const { deleteTransaction } = useGlobalState()
  return (
    <TableRow>
      <TableCell>{transaction.description}</TableCell>
      <TableCell>{transaction.amount}</TableCell>
      <TableCell>{transaction.category}</TableCell>
      <TableCell>
        {
          transaction.amount < 0 
          ? <Badge variant="error">Gasto</Badge>
          : <Badge variant="success">Ingreso</Badge>
        }
      </TableCell>
      <TableCell>{formatDate}</TableCell>
    </TableRow>
  )
}

export default TransactionItem