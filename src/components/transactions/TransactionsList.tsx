import { useStoreContext } from "../../hooks/StoreHook"
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
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Titulo</TableHeaderCell>
                        <TableHeaderCell>Monto ($)</TableHeaderCell>
                        <TableHeaderCell>Categoria</TableHeaderCell>
                        <TableHeaderCell>Tipo</TableHeaderCell>
                        <TableHeaderCell>Fecha</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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