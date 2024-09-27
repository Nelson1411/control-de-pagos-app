import { useStoreContext } from "../../hooks/Store"
import { Transaction } from "../../types"
import TransactionItem from "./TransactionItem"
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeaderCell,
    TableRoot,
    TableRow,
  } from "../Tremor/Table"

function TransactionsList() {
    const { transactions  } = useStoreContext()
  return (
    <>
        <TableRoot>
            <Table>
                <TableCaption>ultimas transacciones</TableCaption>
                <TableHead className="block">
                    <TableRow>
                        <TableHeaderCell>Titulo</TableHeaderCell>
                        <TableHeaderCell>Monto ($)</TableHeaderCell>
                        <TableHeaderCell>Categoria</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody className="overflow-y-scroll block h-48">
                    {transactions.map((item: Transaction) => (
                        <TransactionItem transaction={item} key={item.id} />
                    ))}
                </TableBody>
            </Table>
        </TableRoot>
    </>
  )
}

export default TransactionsList