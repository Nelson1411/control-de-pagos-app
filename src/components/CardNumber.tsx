function CardNumber({amount, className, title}: {
    amount: string, 
    className?: string, 
    title?: string
}) {
  return (
    <>
        <div className={className}>
          <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-[#242629] text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
            <span className="text-5xl font-bold">${amount}</span>
            <p className="text-xl font-thin text-[#94a1b2]">{title}</p>
          </div>
        </div>
    </>
  )
}

export default CardNumber