import { useGlobalState } from "../../hooks/state"
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
    const { transactions  } = useGlobalState()
  return (
    <>
        <TableRoot>
            <Table>
                <TableCaption>Recent invoices.</TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Titulo</TableHeaderCell>
                        <TableHeaderCell>Monto ($)</TableHeaderCell>
                        <TableHeaderCell>categoria</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((item: Transaction) => (
                        <TransactionItem transaction={item} key={item.id} />
                    ))}
                </TableBody>
                {/* <TableFoot>
                    <TableRow>
                        <TableHeaderCell colSpan={1} scope="row" className="text-center">
                        4,642
                        </TableHeaderCell>
                        <TableHeaderCell colSpan={2} scope="row" className="text-center">
                        497
                        </TableHeaderCell>
                    </TableRow>
                </TableFoot> */}
            </Table>
        </TableRoot>
    </>
  )
}

export default TransactionsList