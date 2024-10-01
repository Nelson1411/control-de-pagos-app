import React from 'react'
import { Link } from 'wouter'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='text-white grid grid-cols-[20%_80%] h-full w-full'>
        <nav className='col-start-1 col-end-2 flex flex-col gap-4 
                p-4 border-r border-gray-700 h-full'>
            <Link to={'/'}>Principal</Link>
            <Link to={'/graficas'}>Graficas</Link>
            <Link to={'/transacciones'}>Transacciones</Link>
        </nav>
        <section>
            {children}
        </section>
    </main>
  )
}

export default Layout