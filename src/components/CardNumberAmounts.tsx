import { useStoreContext } from '../hooks/StoreHook'
import CardNumber from './CardNumber'

function CardNumberAmounts({ className }: { className?: string }) {
    const { balance, expense, income } = useStoreContext()
  return (
    <section className={className}>
        <CardNumber amount={balance} title="Balance" className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2" />
        <CardNumber amount={expense} title="Gastos" className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2" />
        <CardNumber amount={income} title="Ingresos" className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2" />
    </section>
  )
}

export default CardNumberAmounts