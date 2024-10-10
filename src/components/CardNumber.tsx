import { Card } from "./Tremor/Card"

function CardNumber({amount, className, title}: {
    amount: string, 
    className?: string, 
    title?: string
}) {
  return (
    <>
        <Card className={className}>
            <h2>{title}</h2>
            <h2>
                ${amount}
            </h2>
        </Card>
    </>
  )
}

export default CardNumber