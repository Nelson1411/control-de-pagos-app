"use client"

import React from "react"

import { LineChart, TooltipProps } from "../Tremor/LineChartTremor"
import { format, weekStart } from "@formkit/tempo"
import { Transaction } from "../../types"
import { useStoreContext } from "../../hooks/StoreHook"


function LineChartBalance() {
  const { transactions } = useStoreContext()
  const data = []
      let i = 0
      while (i < 7) {
          data.push({
              date: format(weekStart(new Date(), i), "short"),
              Balance: transactions.reduce((total: number, transaction: Transaction) => {
                if (format(transaction.date, "medium") === format(weekStart(new Date(), i), "medium")) {
                    return total + transaction.amount
                }
                return total
            }, 0)
          })
          i++
      }
  data.sort((a, b) => a.date.localeCompare(b.date))

  const [datas, setDatas] = React.useState<TooltipProps | null>(null)
  const currencyFormatter = (number: number) =>
    `$${Intl.NumberFormat("us").format(number)}`

  const payload = datas?.payload?.[0]
  console.log(datas)
  const value = payload?.value
  if (value === undefined) return null

  const formattedValue = payload
    ? currencyFormatter(value)
    : currencyFormatter(data[data.length - 1].Balance)

  return (
    <div>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Balance por día
      </p>
      <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
        {formattedValue}
      </p>

      <LineChart
        data={data}
        index="date"
        categories={["Balance"]}
        showLegend={false}
        showYAxis={false}
        startEndOnly={true}
        className="-mb-2 mt-8 h-48"
        tooltipCallback={(props) => {
          if (props.active) {
            setDatas((prev) => {
              if (prev?.label === props.label) return prev
              return props
            })
          } else {
            setDatas(null)
          }
          return null
        }}
      />
    </div>
  )

}

export default LineChartBalance