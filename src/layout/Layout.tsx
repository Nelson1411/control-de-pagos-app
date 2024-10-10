import React from 'react'
import { Link } from 'wouter'
import { Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../components/Tremor/Drawer'
import { Button } from '../components/Tremor/Button'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='text-white grid grid-rows-1 lg:grid-cols-[150px_1fr] h-fit w-full'>
        <nav className='hidden lg:col-start-1 lg:col-end-2 lg:flex lg:flex-col gap-4 
                p-4 border-r border-gray-700'>
            <Link to={'/'}>Principal</Link>
            <Link to={'/graficas'}>Graficas</Link>
            <Link to={'/transacciones'}>Transacciones</Link>
        </nav>
        
        <header className='lg:hidden flex justify-end'>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary">⩸</Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col">
              <DrawerHeader aria-describedby='Menu de la pagina'>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <DrawerClose asChild>
                  <Link to={'/graficas'}>Graficas</Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link to={'/transacciones'}>Transacciones</Link>
                </DrawerClose>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </header>

        <section>
            {children}
        </section>
    </main>
  )
}

export default Layout