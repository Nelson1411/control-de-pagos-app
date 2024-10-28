// import { useGlobalState } from '../../hooks/state'
import { Transaction } from '../../types'
import { Badge } from '../Tremor/Badge'
import { TableCell, TableRow } from '../Tremor/Table'
import { format } from "@formkit/tempo"
import TransactionUpdateForm from './UpdateTransactionForm'
import { Button } from '../Tremor/Button'
import { useStoreContext } from '../../hooks/StoreHook'

function TransactionItem({ transaction }: {
    transaction: Transaction,
}) {
  const { deleteTransaction } = useStoreContext()
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
      <TableCell className='flex gap-2'>
        <TransactionUpdateForm
          id={transaction.id}
          date={transaction.date}
          amount={transaction.amount.toString()}
          category={transaction.category}
          type={transaction.amount > 0 ? 'Ingreso' : 'Gasto'}
          title={transaction.description}
        />
        <Button onClick={() => deleteTransaction(transaction.id)} variant="secondary">Borrar</Button>
      </TableCell>
    </TableRow>
  )
}

export default TransactionItem