import { useStoreContext } from "../../hooks/StoreHook"
import { Transaction } from "../../types"
import TransactionItem from "./TransactionItem"
import {
    Table,
    TableBody,
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
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Titulo</TableHeaderCell>
                        <TableHeaderCell>Monto ($)</TableHeaderCell>
                        <TableHeaderCell>Categoría</TableHeaderCell>
                        <TableHeaderCell>Tipo</TableHeaderCell>
                        <TableHeaderCell>Fecha</TableHeaderCell>
                        <TableHeaderCell>Acciones</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        transactions.map((item: Transaction) => (
                            <TransactionItem transaction={item} key={item.id} />
                        ))
                    }
                </TableBody>
            </Table>
        </TableRoot>
    </>
  )
}

export default TransactionsList