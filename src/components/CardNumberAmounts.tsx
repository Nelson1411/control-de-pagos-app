import { useStoreContext } from '../hooks/StoreHook'
import CardNumber from './CardNumber'

function CardNumberAmounts({ className }: { className?: string }) {
    const { balance, expense, income } = useStoreContext()
  return (
    <section className={className}>
        <CardNumber amount={balance} title="Balance" className='flex justify-center gap-x-12' />
        <CardNumber amount={expense} title="Gastos" className='flex justify-center gap-x-12' />
        <CardNumber amount={income} title="Ingresos" className='flex justify-center gap-x-12' />
    </section>
  )
}

export default CardNumberAmounts